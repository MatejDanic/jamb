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
		for (int i = 0; i < 4; i++) {
			FormColumn column = new FormColumn();
			column.setForm(form);
			column.setColumnType(ColumnType.values()[i]);
			columnRepo.save(column);
			createBoxes(column);
		}
	}

	private void createBoxes(FormColumn column) {
		for (int i = 0; i < 13; i++) {
			Box box = new Box();
			box.setBoxType(BoxType.values()[i]);
			box.setColumn(column);
			boxRepo.save(box);
		}
	}

	private void createDice(Form form) {
		for (int i = 0; i < JambConstants.NUM_OF_DICE; i++) {
			Dice dice = new Dice();
			dice.setOrder(i);
			dice.setForm(form);
			diceRepo.save(dice);
		}
	}

	public void deleteFormById(int id) {
		formRepo.deleteById(id);
	}

	public Form getFormById(int id) {
		return formRepo.findById(id).get();
	}

	public List<Form> getFormList() {
		return formRepo.findAll();
	}

	public Set<Dice> rollDice (int id, Map<Integer, Boolean> diceHolding) {
		Form form = formRepo.findById(id).get();
		
		if (form.getRollCount() == 0) diceHolding.forEach((k, v) -> v = false);
		else if (form.getRollCount() == 0) diceHolding.forEach((k, v) -> v = true);
		
		
		for (Map.Entry<Integer, Boolean> entry : diceHolding.entrySet()) {
			Dice dice = form.getDiceByOrder(entry.getKey());
			dice.roll(entry.getValue());
			diceRepo.save(dice);
		}
		return form.getDiceSet();
	}

	public void updateForm(int id, ColumnType columnType, BoxType boxType) {
		Form form = formRepo.findById(id).get();
		form.getColumnByType(columnType).getBoxByType(boxType).update(form.getDiceSet());
	}
}
