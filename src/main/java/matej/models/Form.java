package matej.models;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import matej.models.enums.BoxType;
import matej.models.enums.ColumnType;


@Entity
@Table(name="FORM")
public class Form {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@OneToOne
	@JoinColumn(name = "score_id", referencedColumnName = "id", nullable = true)
	private Score score;
	
	@OneToMany(mappedBy ="form", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Column> columns;

	@OneToMany(mappedBy = "form", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Dice> diceSet;

	@javax.persistence.Column(name = "roll_count")
	private int rollCount;
	
	@javax.persistence.Column(name = "announcement")
	private BoxType announcement;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Score getScore() {
		return score;
	}

	public void setScore(Score score) {
		this.score = score;
	}

	public Set<Column> getColumns() {
		return columns;
	}

	public void setColumns(Set<Column> columns) {
		this.columns = columns;
	}

	public Set<Dice> getDiceSet() {
		return diceSet;
	}

	public void setDiceSet(Set<Dice> diceSet) {
		this.diceSet = diceSet;
	}

	public int getRollCount() {
		return rollCount;
	}

	public void setRollCount(int rollCount) {
		this.rollCount = rollCount;
	}

	public BoxType getAnnouncement() {
		return announcement;
	}

	public void setAnnouncement(BoxType announcement) {
		this.announcement = announcement;
	}
	
	public Column getColumnByType(ColumnType columnType) {
		Column column = new Column();
		for (Column fc : columns) {
			if (fc.getColumnType() == columnType) {
				column = fc;
				break;
			}
		}
		return column;
	}

	public Dice getDiceByOrdinalNumber(int ordinalNumber) {
		Dice dice = new Dice();
		for (Dice d : diceSet) {
			if (d.getOrdinalNumber() == ordinalNumber) dice = d;
			break;
		}
		return dice;
	}

	public boolean isAnnouncementRequired() {
		for (Column column : columns) {
			if (column.getColumnType() != ColumnType.ANNOUNCEMENT) {
				if (!column.isCompleted()) return false;
			}
		}
		return true;
	}
	
	public boolean isCompleted() {
		for (Column column : columns) {
			if (!column.isCompleted()) return false;
		}
		return true;
	}

	public Map<String, Integer> calculateSums() {
		Map<String, Integer> sums = new HashMap<>();
		Map<String, Integer> columnSums;
		sums.put("numberSum", 0);
		sums.put("diffSum", 0);
		sums.put("labelSum", 0);
		for (Column column : columns) {
			columnSums = column.calculateSums();
			columnSums.forEach((k, v) -> sums.put(column.getColumnType().toString() + "-" + k, v));
			sums.replace("numberSum", sums.get("numberSum") + columnSums.get("numberSum"));
			sums.replace("diffSum", sums.get("diffSum") + columnSums.get("diffSum"));
			sums.replace("labelSum", sums.get("labelSum") + columnSums.get("labelSum"));
		}
		sums.put("finalSum", sums.get("numberSum") + sums.get("diffSum") + sums.get("labelSum"));
		return sums;
	}
	
	@Override
	public String toString() {
		String result = "";
		for (Column column : columns) {
			for (Box box : column.getBoxes()) {
				result += " " + box.getValue();
			}
			result += "\n";
		}
		return result;
	}
}
