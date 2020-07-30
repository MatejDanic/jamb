package matej.payload.request;

import java.util.Set;

import javax.validation.constraints.*;
 
public class RegisterRequest {

    @NotBlank
    @Size(min = 2, max = 15)
    private String username;
    
    private Set<String> role;
    
    @NotBlank
    private String password;
  
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
    
    public Set<String> getRole() {
      return this.role;
    }
    
    public void setRole(Set<String> role) {
      this.role = role;
    }
}