package matej.jamb.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.jamb.models.Score;

public interface ScoreRepository extends JpaRepository<Score, Integer> {
	
}
