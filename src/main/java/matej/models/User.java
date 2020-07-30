package matej.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import matej.models.enums.UserStatus;

@Entity
@Table(name="auth_user")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy="user")
    private Set<Score> scores;

    @OneToOne
    private Form form;
    
    @javax.persistence.Column(name="username", nullable=false)
    private String username;
    
    @javax.persistence.Column(name="password", nullable=false)
    private String password;
    
	@javax.persistence.Column(name = "status")
    private UserStatus userStatus;
    
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "auth_user_role")
    private Set<Role> roles;
    
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    public UserStatus getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(UserStatus userStatus) {
        this.userStatus = userStatus;
    }
        
    public Set<Role> getRoles() {
        return roles;
    }
    
    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}