package matej.jamb.models;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import matej.jamb.models.enums.BoxType;
import matej.jamb.models.enums.ColumnType;


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
	private Set<FormColumn> columns;

	@OneToMany(mappedBy = "form", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Dice> diceSet;

	@Column(name = "roll_count")
	private int rollCount;
	
	@Column(name = "announcement")
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

	public Set<FormColumn> getColumns() {
		return columns;
	}

	public void setColumns(Set<FormColumn> columns) {
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
	
	public FormColumn getColumnByType(ColumnType columnType) {
		FormColumn column = new FormColumn();
		for (FormColumn fc : columns) {
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

	public boolean isAnnouncementMandatory() {
		for (FormColumn column : columns) {
			if (column.getColumnType() != ColumnType.ANNOUNCEMENT) {
				if (!column.isCompleted()) return false;
			}
		}
		return true;
	}
	
	public boolean isCompleted() {
		for (FormColumn column : columns) {
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
		for (FormColumn column : columns) {
			columnSums = column.calculateSums();
			columnSums.forEach((k, v) -> sums.put(column.getColumnType().toString() + " " + k, v));
			sums.replace("numberSum", sums.get("numberSum") + columnSums.get("numberSum"));
			sums.replace("diffSum", sums.get("diffSum") + columnSums.get("diffSum"));
			sums.replace("labelSum", sums.get("labelSum") + columnSums.get("labelSum"));
		}
		sums.put("finalSum", sums.get("numberSum") + sums.get("diffSum") + sums.get("labelSum"));
		return sums;
	}
	
}
