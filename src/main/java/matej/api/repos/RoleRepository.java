package matej.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Role;
import matej.models.enums.RoleLabel;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	public Role findByRoleLabel(RoleLabel label);

}
