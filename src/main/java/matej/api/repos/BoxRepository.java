package matej.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Box;

public interface BoxRepository extends JpaRepository<Box, Integer> {
	
}
