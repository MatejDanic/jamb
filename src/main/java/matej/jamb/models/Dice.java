package matej.jamb.models;

import java.util.concurrent.ThreadLocalRandom;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import matej.jamb.models.composite.DiceId;

@Entity
@Table(name="Dice")
@IdClass(DiceId.class)
public class Dice {

	@Id
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "form_id", referencedColumnName = "id", nullable = false)
	private Form form;
	
	@Id
	@Column(name = "ordNum")
	private int ordNum;

	@Column(name = "value")
	private int value;

	public Form getForm() {
		return form;
	}

	public void setForm(Form form) {
		this.form = form;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}
	
	public int getOrdNum() {
		return ordNum;
	}

	public void setOrdNum(int ordNum) {
		this.ordNum = ordNum;
	}

	public void roll() {
		value = ThreadLocalRandom.current().nextInt(1, 7);
	}
	
	@Override
	public String toString() {
		return form.getId() + " Dice #" + ordNum + ": " + value;
	}
	
}
