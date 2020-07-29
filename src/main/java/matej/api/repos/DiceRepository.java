package matej.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Dice;

public interface DiceRepository extends JpaRepository<Dice, Integer> {
	
}
