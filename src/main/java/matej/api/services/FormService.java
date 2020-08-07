package matej.api.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javassist.NotFoundException;
import matej.api.repositories.BoxRepository;
import matej.api.repositories.ColumnRepository;
import matej.api.repositories.DiceRepository;
import matej.api.repositories.FormRepository;
import matej.api.repositories.ScoreRepository;
import matej.api.repositories.UserRepository;
import matej.constants.JambConstants;
import matej.exceptions.IllegalMoveException;
import matej.exceptions.InvalidOwnershipException;
import matej.factories.JambFactory;
import matej.models.Box;
import matej.models.Dice;
import matej.models.Form;
import matej.models.Column;
import matej.models.Score;
import matej.models.User;
import matej.models.enums.BoxType;
import matej.models.enums.ColumnType;

@Service
public class FormService {

	@Autowired
	FormRepository formRepo;

	@Autowired
	ScoreRepository scoreRepo;

	@Autowired
	ColumnRepository columnRepo;

	@Autowired
	BoxRepository boxRepo;

	@Autowired
	DiceRepository diceRepo;

	@Autowired
	UserRepository userRepo;

	public Optional<Form> initializeForm(String username) throws NotFoundException {
		User user = userRepo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
		if (user.getForm() != null) {
			return formRepo.findById(user.getForm().getId());
		}
		Form form = JambFactory.createForm(user);
		form = formRepo.save(form);
		return formRepo.findById(form.getId());
	}	
	
	public void deleteForm(Form form, int finalSum) {
		Score score = JambFactory.createScore(form.getUser(), finalSum);
		scoreRepo.save(score);
		formRepo.delete(form);
	}
	
	public void deleteForm(Form form) {
		formRepo.delete(form);
	}
	
	public Form getFormById(int id) {
		return formRepo.findById(id).get();
	}
	
	public Column getColumn(int id, int columnTypeOrdinal) {
		return getFormById(id).getColumnByType(ColumnType.fromOrdinal(columnTypeOrdinal));
	}
	
	public Box getColumnBox(int id, int columnTypeOrdinal, int boxTypeOrdinal) {
		return getFormById(id).getColumnByType(ColumnType.fromOrdinal(columnTypeOrdinal)).getBoxByType(BoxType.fromOrdinal(boxTypeOrdinal));
	}
	
	public List<Form> getFormList() {
		return formRepo.findAll();
	}
	
	public List<Dice> rollDice (String username, int id, Map<Integer, Boolean> diceToThrow) throws IllegalMoveException,
			InvalidOwnershipException {
		if (!checkOwnership(username, id)) throw new InvalidOwnershipException("Form with id " + id + " doesn't belong to user " + username);
		Form form = getFormById(id);
		
		if (form.getRollCount() == 0) diceToThrow.replaceAll((k,v) -> v = true);
		else if (form.getRollCount() == JambConstants.NUM_OF_ROLLS) throw new IllegalMoveException("Dice roll limit reached!");
		else if (form.getRollCount() > 0 && isAnnouncementRequired(form) && form.getAnnouncement() == null) throw new IllegalMoveException("Announcement is required!");
		
		if (form.getRollCount() < JambConstants.NUM_OF_ROLLS) {
			form.setRollCount(form.getRollCount() + 1);
			if (isAnnouncementRequired(form)) form.setAnnouncementRequired(true);
			formRepo.save(form);
		}
		
		for (Map.Entry<Integer, Boolean> entry : diceToThrow.entrySet()) {
			Dice dice = form.getDiceByOrdinalNumber(entry.getKey());
			if (entry.getValue()) {
				dice.setForm(form);
				dice.setLabel(entry.getKey());
				dice.roll();
				diceRepo.save(dice);
			}
		}
		return form.getDice();
	}
	
	public int announce(String username, int id, int announcementOrdinal) throws IllegalMoveException,
			InvalidOwnershipException {
		if (!checkOwnership(username, id)) throw new InvalidOwnershipException("Form with id " + id + " doesn't belong to user " + username);

		Form form  = getFormById(id);
		
		if (form.getAnnouncement() != null) throw new IllegalMoveException("Announcement already declared!");
		if (form.getRollCount() >= 2) throw new IllegalMoveException("Announcement unavailable after second roll!");
		
		form.setAnnouncement(BoxType.fromOrdinal(announcementOrdinal));
		formRepo.save(form);
		return announcementOrdinal;
	}
	
	public int fillBox(String username, int id, int columnTypeOrdinal, int boxTypeOrdinal) throws IllegalMoveException,
			InvalidOwnershipException {
		if (!checkOwnership(username, id)) throw new InvalidOwnershipException("Form with id " + id + " doesn't belong to user " + username);
		Form form = getFormById(id);
		Column column = form.getColumnByType(ColumnType.fromOrdinal(columnTypeOrdinal));
		Box box = column.getBoxByType(BoxType.fromOrdinal(boxTypeOrdinal));
		
		if (box.isFilled()) throw new IllegalMoveException("Box already filled!");
		else if (form.getRollCount() == 0) throw new IllegalMoveException("Cannot fill box without rolling dice!");
		else if (!box.isAvailable() && form.getAnnouncement() == null) throw new IllegalMoveException("Box is currently not available!");
		else if (form.getAnnouncement() != null && form.getAnnouncement() != box.getBoxType()) throw new IllegalMoveException("Box is not the same as announcement!");
		
		box.fill(form.getDice());
		box.setColumn(column);
		boxRepo.save(box);
		
		advanceColumn(form, columnTypeOrdinal, boxTypeOrdinal);
		column.setForm(form);
		columnRepo.save(column);
		
		Map<String, Integer> sums = form.calculateSums();
		sums.put("boxValue", box.getValue());
		
		if (isFormCompleted(form)) {
			// System.out.println("Deleting form...");
			deleteForm(form, sums.get("finalSum"));
		} else {			
			form.setRollCount(0);
			form.setAnnouncement(null);
			formRepo.save(form);
		}
		
		return box.getValue();
	}
	

	private boolean isFormCompleted(Form form) {
		for (Column column : form.getColumns()) {
			if (!column.isCompleted()) return false;
		}
		return true;
	}

	public void advanceColumn(Form form, int columnTypeOrdinal, int boxTypeOrdinal) {
		Box nextBox = new Box();
		Column column = form.getColumnByType(ColumnType.fromOrdinal(columnTypeOrdinal));
		if (column.getColumnType() == ColumnType.DOWNWARDS) {
			boxTypeOrdinal++;
		} else if (column.getColumnType() == ColumnType.UPWARDS) {
			boxTypeOrdinal--;
		} else {
			return;
		}
		try {
			nextBox = column.getBoxByType(BoxType.fromOrdinal(boxTypeOrdinal));
			nextBox.setAvailable(true);
			nextBox.setColumn(column);
			boxRepo.save(nextBox);
		} catch(IndexOutOfBoundsException e) {
			//			e.printStackTrace();
		}
	}
	
	private boolean isAnnouncementRequired(Form form) {
		boolean announcementRequired = (form.getAnnouncement() == null);
		// System.out.println(form);
		for (Column column : form.getColumns()) {
			if (column.getColumnType() != ColumnType.ANNOUNCEMENT) {
				if (!column.isCompleted()) {
					announcementRequired = false;
					break;
				}	
			}
		}
		return announcementRequired;
	}

	private boolean checkOwnership(String username, int formId) {
		User user = userRepo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
		return user.getForm().getId() == formId;
	}
	
}
