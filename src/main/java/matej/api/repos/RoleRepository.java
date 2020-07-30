package matej.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	public Role findByLabel(String label);
	
}
