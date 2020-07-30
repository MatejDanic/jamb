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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import matej.constants.JambConstants;
import matej.models.enums.BoxType;
import matej.models.enums.ColumnType;

@Entity
@Table(name="\"column\"")
public class Column {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "form_id", referencedColumnName = "id", nullable = false)
	private Form form;

	@javax.persistence.Column(name = "type")
	private ColumnType columnType;

	@OneToMany(mappedBy ="column", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Box> boxes;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Form getForm() {
		return form;
	}

	public void setForm(Form form) {
		this.form = form;
	}

	public ColumnType getColumnType() {
		return columnType;
	}

	public void setColumnType(ColumnType columnType) {
		this.columnType = columnType;
	}

	public Set<Box> getBoxes() {
		return boxes;
	}

	public void setBoxes(Set<Box> boxes) {
		this.boxes = boxes;
	}

	public Box getBoxByType(BoxType boxType) {
		Box box = new Box();
		for (Box b : boxes) {
			if (b.getBoxType() == boxType) {
				box = b;
				break;
			}
		}
		return box;
	}

	public boolean isCompleted() {
		for (Box box : boxes) {
			if (!box.isFilled()) return false;
		}
		return true;
	}

	public Map<String, Integer> calculateSums() {
		Map<String, Integer> sums = new HashMap<>();
		sums.put("numberSum", 0);
		sums.put("diffSum", 0);
		sums.put("labelSum", 0);

		boolean diffReady = true;
		for (Box box : boxes) {
			if (box.getBoxType() == BoxType.ONES || box.getBoxType() == BoxType.MAX || box.getBoxType() == BoxType.MIN) {
				if (!box.isFilled()) {
					diffReady = false;
				}
			}
			if (box.getBoxType().ordinal() <= 5) {
				sums.replace("numberSum", sums.get("numberSum") + box.getValue());
			} else if (box.getBoxType().ordinal() >= 8) {
				sums.replace("labelSum", sums.get("labelSum") + box.getValue());
			}
		}
		if (sums.get("numberSum") >= JambConstants.NUMBERSUM_BONUS_THRESHOLD)
			sums.replace("numberSum", sums.get("numberSum") + JambConstants.NUMBERSUM_BONUS);
		if (diffReady) {
			sums.replace("diffSum", (getBoxByType(BoxType.MAX).getValue() - getBoxByType(BoxType.MIN).getValue()) * getBoxByType(BoxType.ONES).getValue());
		}
		return sums;
	}

}
