package matej.factories;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import matej.constants.JambConstants;
import matej.models.Box;
import matej.models.Dice;
import matej.models.Form;
import matej.models.Column;
import matej.models.Score;
import matej.models.User;
import matej.models.enums.BoxType;
import matej.models.enums.ColumnType;

public class JambFactory {

	public static Form createForm(User user) {
		Form form = new Form();
		form.setAnnouncementRequired(false);
		form.setColumns(createColumns(form));
		for (Column column : form.getColumns()) {
			column.setBoxes(createBoxes(column));
		}
		form.setDice(createDice(form));
		form.setRollCount(0);
		form.setAnnouncement(null);
		form.setUser(user);
		return form;
	}

	public static Score createScore(User user, int finalSum) {
		Score score = new Score();
		score.setUser(user);
		score.setValue(finalSum);
		score.setDate(LocalDate.now());
		return score;
	}

	public static List<Column> createColumns(Form form) {
		List<Column> columns = new ArrayList<>();
		for (ColumnType columnType : ColumnType.values()) {
			Column column = new Column();
			column.setForm(form);
			column.setColumnType(columnType);
			columns.add(column);
		}
		return columns;
	}

	public static List<Box> createBoxes(Column column) {
		List<Box> boxes = new ArrayList<>();
		for (BoxType boxType : BoxType.values()) {
			Box box = new Box();
			box.setColumn(column);
			box.setBoxType(boxType);
			if (column.getColumnType() == ColumnType.ANY_DIRECTION || column.getColumnType() == ColumnType.ANNOUNCEMENT)
				box.setAvailable(true);
			else if (column.getColumnType() == ColumnType.DOWNWARDS && boxType == BoxType.ONES)
				box.setAvailable(true);
			else if (column.getColumnType() == ColumnType.UPWARDS && boxType == BoxType.JAMB)
				box.setAvailable(true);
			boxes.add(box);
		}
		return boxes;
	}

	public static List<Dice> createDice(Form form) {
		List<Dice> diceList = new ArrayList<>();
		for (int i = 0; i < JambConstants.NUM_OF_DICE; i++) {
			Dice dice = new Dice();
			dice.setForm(form);
			dice.setValue(6);
			dice.setLabel(i);
			diceList.add(dice);
		}
		return diceList;
	}

}
