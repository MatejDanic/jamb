package matej.api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	Optional<Role> findByLabel(String label);
	
}
