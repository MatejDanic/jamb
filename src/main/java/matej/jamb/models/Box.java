package matej.jamb.models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import matej.jamb.models.enums.BoxType;
import matej.jamb.utils.ScoreUtil;

@Entity
@Table(name="BOX")
public class Box {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "column_id", referencedColumnName = "id", nullable = false)
	private FormColumn column;
	
	@Column(name = "value")
	private int value;

	@Column(name = "written")
	private boolean written;
	
	@Column(name = "type")
	private BoxType boxType;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public FormColumn getColumn() {
		return column;
	}

	public void setColumn(FormColumn column) {
		this.column = column;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public boolean isWritten() {
		return written;
	}

	public void setWritten(boolean written) {
		this.written = written;
	}

	public BoxType getBoxType() {
		return boxType;
	}
	
	public void setBoxType(BoxType boxType) {
		this.boxType = boxType;
	}

	public void update(Set<Dice> diceSet) {
		value = ScoreUtil.checkScore(diceSet, boxType);
	}
	
}
