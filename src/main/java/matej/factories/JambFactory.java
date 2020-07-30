package matej.factories;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

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

	public static Set<Column> createColumns(Form form) {
		Set<Column> columns = new HashSet<>();
		for (ColumnType columnType : ColumnType.values()) {
			Column column = new Column();
			column.setForm(form);
			column.setColumnType(columnType);
			columns.add(column);
		}
		return columns;
	}

	public static Set<Box> createBoxes(Column column) {
		Set<Box> boxes = new HashSet<>();
		for (BoxType boxType : BoxType.values()) {
			Box box = new Box();
			box.setColumn(column);
			box.setBoxType(boxType);
			if (column.getColumnType() == ColumnType.ANY_DIRECTION) box.setAvailable(true);
			else if (column.getColumnType() == ColumnType.DOWNWARDS && boxType == BoxType.ONES) box.setAvailable(true);
			else if (column.getColumnType() == ColumnType.UPWARDS && boxType == BoxType.JAMB) box.setAvailable(true);
			boxes.add(box);
		}
		return boxes;
	}

	public static Set<Dice> createDice(Form form) {
		Set<Dice> diceSet = new HashSet<>();
		for (int i = 0; i < JambConstants.NUM_OF_DICE; i++) {
			Dice dice = new Dice();
			dice.setForm(form);
			dice.setOrdinalNumber(i);
			diceSet.add(dice);
		}
		return diceSet;
	}

}
