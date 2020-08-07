package matej.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "auth_role")
public class Role {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@javax.persistence.Column(name = "label")
	private String label;

	@javax.persistence.Column(name = "description")
    private String description;

    public Role() {
        
    }

    public Role(String label) {
        this.label = label;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }
    
}