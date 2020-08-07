package matej.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Dice;

public interface DiceRepository extends JpaRepository<Dice, Integer> {
	
}
