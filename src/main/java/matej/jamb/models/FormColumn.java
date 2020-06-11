package matej.jamb.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import matej.jamb.models.enums.BoxType;
import matej.jamb.models.enums.ColumnType;

@Entity
@Table(name="FCOLUMN")
public class FormColumn {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "column_id", referencedColumnName = "id", nullable = false)
	private Form form;
	
	@Column(name = "type")
	private ColumnType columnType;

	@OneToMany(cascade = CascadeType.ALL)
	private Set<Box> boxes;
	
	@Column(name = "number_sum")
	private int numberSum;
	
	@Column(name = "diff_sum")
	private int diffSum;
	
	@Column(name = "label_sum")
	private int labelSum;
	
	public FormColumn(ColumnType columnType) {
		this.columnType = columnType;
		boxes = new HashSet<>();
		boxes.add(new Box(BoxType.ONES));
		boxes.add(new Box(BoxType.TWOS));
		boxes.add(new Box(BoxType.THREES));
		boxes.add(new Box(BoxType.FOURS));
		boxes.add(new Box(BoxType.FIVES));
		boxes.add(new Box(BoxType.SIXES));
		boxes.add(new Box(BoxType.MAX));
		boxes.add(new Box(BoxType.MIN));
		boxes.add(new Box(BoxType.TRIPS));
		boxes.add(new Box(BoxType.STRAIGHT));
		boxes.add(new Box(BoxType.FULL));
		boxes.add(new Box(BoxType.POKER));	
		boxes.add(new Box(BoxType.JAMB));	
		numberSum = 0;
		diffSum = 0;
		labelSum = 0;
	}

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
		Box box = new Box(boxType);
		for (Box b : boxes) {
			if (b.getBoxType() == boxType) {
				box = b;
				break;
			}
		}
		return box;
	}

}
