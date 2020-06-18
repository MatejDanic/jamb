package matej.jamb.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.jamb.models.Box;

public interface BoxRepository extends JpaRepository<Box, Integer> {
	
}
