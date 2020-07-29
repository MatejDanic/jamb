package matej.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import matej.api.services.ScoreService;
import matej.models.Score;

@RestController
public class MainController {

	@Autowired
	ScoreService scoreService;

	@Scheduled(fixedRate = 86400000)
	public void clearUnfinishedScores() {
		scoreService.clearUnfinishedScores();
	}

	@GetMapping("/scores")
	public List<Score> getLeaderboard() {
		return scoreService.getLeaderboard(10);
	}

}
