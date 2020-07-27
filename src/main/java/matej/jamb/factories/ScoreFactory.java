package matej.jamb.factories;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;

import matej.jamb.api.repos.ScoreRepository;
import matej.jamb.models.Score;

public class ScoreFactory {

	
	@Autowired
	static ScoreRepository scoreRepo;

	public static Score newInstance(String nickname) {
		Score score = new Score(nickname, 0, LocalDate.now(), false);
		scoreRepo.save(score);
		return score;
	}

}
