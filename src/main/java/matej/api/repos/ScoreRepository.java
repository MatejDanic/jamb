package matej.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Score;

public interface ScoreRepository extends JpaRepository<Score, Integer> {
	
}
