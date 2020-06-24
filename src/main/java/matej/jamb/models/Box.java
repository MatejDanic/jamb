package matej.jamb.models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import matej.jamb.models.composite.BoxId;
import matej.jamb.models.enums.BoxType;
import matej.jamb.utils.ScoreUtil;

@Entity
@Table(name="BOX")
@IdClass(BoxId.class)
public class Box {

	@Id
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "column_id", referencedColumnName = "id", nullable = false)
	private FormColumn column;
	
	@Id
	@Column(name = "type")
	private BoxType boxType;
	
	@Column(name = "value")
	private int value;

	@Column(name = "filled")
	private boolean filled;

	@Column(name = "available")
	private boolean available;

	public FormColumn getColumn() {
		return column;
	}

	public void setColumn(FormColumn column) {
		this.column = column;
	}
	
	public BoxType getBoxType() {
		return boxType;
	}
	
	public void setBoxType(BoxType boxType) {
		this.boxType = boxType;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public boolean isFilled() {
		return filled;
	}

	public void setFilled(boolean filled) {
		this.filled = filled;
	}
	
	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public void update(Set<Dice> diceSet) {
		value = ScoreUtil.checkScore(diceSet, boxType);
		filled = true;
		available = false;
	}
	
}
