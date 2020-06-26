package matej.jamb.api.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matej.jamb.api.repos.BoxRepository;
import matej.jamb.api.repos.DiceRepository;
import matej.jamb.api.repos.FormColumnRepository;
import matej.jamb.api.repos.FormRepository;
import matej.jamb.api.repos.ScoreRepository;
import matej.jamb.constants.JambConstants;
import matej.jamb.exceptions.IllegalMoveException;
import matej.jamb.models.Box;
import matej.jamb.models.Dice;
import matej.jamb.models.Form;
import matej.jamb.models.FormColumn;
import matej.jamb.models.Score;
import matej.jamb.models.enums.BoxType;
import matej.jamb.models.enums.ColumnType;

@Service
public class FormService {

	@Autowired
	FormRepository formRepo;

	@Autowired
	ScoreRepository scoreRepo;

	@Autowired
	FormColumnRepository columnRepo;

	@Autowired
	BoxRepository boxRepo;

	@Autowired
	DiceRepository diceRepo;

	public int addForm(String nickname) {
		Score score = createScore(nickname);
		Form form = createForm(score);
		return form.getId();
	}	

	private Score createScore(String nickname) {
		Score score = new Score();
		score.setNickname(nickname);
		score.setDate(LocalDate.now());
		score.setValue(0);
		score.setFinished(false);
		scoreRepo.save(score);
		return score;
	}

	private Form createForm(Score score) {
		Form form = new Form();
		form.setScore(score);
		formRepo.save(form);

		createColumns(form);
		createDice(form);

		return form;
	}

	private void createColumns(Form form) {
		for (ColumnType columnTypeOrdinal : ColumnType.values()) {
			FormColumn column = new FormColumn();
			column.setForm(form);
			column.setColumnType(columnTypeOrdinal);
			columnRepo.save(column);
			createBoxes(column);
		}
	}

	private void createBoxes(FormColumn column) {
		for (BoxType boxTypeOrdinal : BoxType.values()) {
			Box box = new Box();
			box.setColumn(column);
			if (column.getColumnType() == ColumnType.ANY_DIRECTION) box.setAvailable(true);
			else if (column.getColumnType() == ColumnType.DOWNWARDS && boxTypeOrdinal == BoxType.ONES) box.setAvailable(true);
			else if (column.getColumnType() == ColumnType.UPWARDS && boxTypeOrdinal == BoxType.JAMB) box.setAvailable(true);
			box.setBoxType(boxTypeOrdinal);
			boxRepo.save(box);
		}
	}

	private void createDice(Form form) {
		for (int i = 0; i < JambConstants.NUM_OF_DICE; i++) {
			Dice dice = new Dice();
			dice.setForm(form);
			dice.setOrdNum(i);
			diceRepo.save(dice);
		}
	}

	public void deleteFormById(int id) {
		formRepo.deleteById(id);
	}

	public Form getFormById(int id) {
		return formRepo.findById(id).get();
	}

	public FormColumn getFormColumn(int id, int columnTypeOrdinal) {
		return getFormById(id).getColumnByType(ColumnType.fromOrdinal(columnTypeOrdinal));
	}

	public Box getFormColumnBox(int id, int columnTypeOrdinal, int boxTypeOrdinal) {
		return getFormById(id).getColumnByType(ColumnType.fromOrdinal(columnTypeOrdinal)).getBoxByType(BoxType.fromOrdinal(boxTypeOrdinal));
	}

	public List<Form> getFormList() {
		return formRepo.findAll();
	}

	public Set<Dice> rollDice (int id, Map<Integer, Boolean> diceToThrow) throws IllegalMoveException {
		Form form = getFormById(id);

		if (form.getRollCount() == 0) diceToThrow.replaceAll((k,v) -> v = true);
		else if (form.getRollCount() == JambConstants.NUM_OF_ROLLS) throw new IllegalMoveException("Dice roll limit reached!");
		else if (form.isAnnouncementMandatory()) throw new IllegalMoveException("Announcement is mandatory!");

		if (form.getRollCount() < JambConstants.NUM_OF_ROLLS) {
			form.setRollCount(form.getRollCount() + 1);
			formRepo.save(form);
		}

		for (Map.Entry<Integer, Boolean> entry : diceToThrow.entrySet()) {
			Dice dice = form.getDiceByOrdNum(entry.getKey());
			if (entry.getValue()) {
				dice.setForm(form);
				dice.setOrdNum(entry.getKey());
				dice.roll();
				diceRepo.save(dice);
			}
		}
		return form.getDiceSet();
	}

	public BoxType announce(int id, int announcementOrdinal) throws IllegalMoveException {
		Form form  = getFormById(id);

		if (form.getAnnouncement() != null) throw new IllegalMoveException("Announcement already declared!");
		if (form.getRollCount() >= 2) throw new IllegalMoveException("Announcement unavailable after second roll!");

		form.setAnnouncement(BoxType.fromOrdinal(announcementOrdinal));
		return BoxType.fromOrdinal(announcementOrdinal);
	}

	public int update(int id, int columnTypeOrdinal, int boxTypeOrdinal) throws IllegalMoveException {
		Form form = getFormById(id);
		FormColumn column = form.getColumnByType(ColumnType.fromOrdinal(columnTypeOrdinal));
		Box box = column.getBoxByType(BoxType.fromOrdinal(boxTypeOrdinal));
		Score score = form.getScore();

		if (box.isFilled()) throw new IllegalMoveException("Box already filled!");
		else if (form.getRollCount() == 0) throw new IllegalMoveException("Cannot fill box without rolling dice!");
		else if (!box.isAvailable() && form.getAnnouncement() == null) throw new IllegalMoveException("Box is currently not available!");
		else if (form.getAnnouncement() != null) {
			box.setBoxType(form.getAnnouncement());
		}

		box.update(form.getDiceSet());
		box.setColumn(column);

		boxRepo.save(box);
		advance(form, column, boxTypeOrdinal);

		column.updateSums();
		column.setForm(form);
		columnRepo.save(column);
		
		form.updateSums();
		formRepo.save(form);
		
		score.setValue(form.getFinalSum());
		
		boolean end = form.isCompleted();
		if (end) {
			score.setFinished(true);
			formRepo.delete(form);
		}
		scoreRepo.save(score);

		return box.getValue();
	}

	private void advance (Form form, FormColumn column, int boxTypeOrdinal) {
		Box box = new Box();
		if (column.getColumnType() == ColumnType.DOWNWARDS) {
			boxTypeOrdinal++;
		} else if (column.getColumnType() == ColumnType.UPWARDS) {
			boxTypeOrdinal--;
		} else {
			return;
		}
		try {
			box = column.getBoxByType(BoxType.fromOrdinal(boxTypeOrdinal));
			box.setAvailable(true);
			box.setColumn(column);
			boxRepo.save(box);
		} catch(IndexOutOfBoundsException e) {
		}
	}

}
