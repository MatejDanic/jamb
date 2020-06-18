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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import matej.jamb.models.enums.BoxType;
import matej.jamb.models.enums.ColumnType;

@Entity
@Table(name="FORMCOLUMN")
public class FormColumn {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "form_id", referencedColumnName = "id", nullable = false)
	private Form form;
	
	@Column(name = "type")
	private ColumnType columnType;

	@OneToMany(mappedBy ="column", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Box> boxes;
	
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

}
