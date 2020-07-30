package matej.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import matej.models.enums.RoleLabel;

@Entity
@Table(name = "auth_role")
public class Role {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@javax.persistence.Column(name = "label")
	private RoleLabel roleLabel;

	@javax.persistence.Column(name = "description")
    private String description;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public RoleLabel getRoleLabel() {
        return roleLabel;
    }

    public void setRoleLabel(RoleLabel roleLabel) {
        this.roleLabel = roleLabel;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }
    
}