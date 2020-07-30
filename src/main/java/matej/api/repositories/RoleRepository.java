package matej.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	Role findByLabel(String label);
	
}
