package matej.jamb.models;

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
	
	@Column(name = "final_sum")
	private int finalSum;

	@Column(name = "number_sum")
	private int numberSum;

	@Column(name = "diff_sum")
	private int diffSum;
	
	@Column(name = "label_sum")
	private int labelSum;

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

	public int getFinalSum() {
		return finalSum;
	}

	public void setFinalSum(int finalSum) {
		this.finalSum = finalSum;
	}

	public int getNumberSum() {
		return numberSum;
	}

	public void setNumberSum(int numberSum) {
		this.numberSum = numberSum;
	}

	public int getDiffSum() {
		return diffSum;
	}

	public void setDiffSum(int diffSum) {
		this.diffSum = diffSum;
	}

	public int getLabelSum() {
		return labelSum;
	}

	public void setLabelSum(int labelSum) {
		this.labelSum = labelSum;
	}

	public Dice getDiceByOrder(int ordNum) {
		Dice dice = new Dice();
		for (Dice d : diceSet) {
			if (d.getOrdNum() == ordNum) dice = d;
			break;
		}
		return dice;
	}
	
}
