package matej.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Box;

public interface BoxRepository extends JpaRepository<Box, Integer> {
	
}
