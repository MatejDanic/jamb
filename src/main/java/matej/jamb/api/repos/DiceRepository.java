package matej.jamb.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.jamb.models.Dice;

public interface DiceRepository extends JpaRepository<Dice, Integer> {
	
}
