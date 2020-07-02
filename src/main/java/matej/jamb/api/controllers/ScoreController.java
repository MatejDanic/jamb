package matej.jamb.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matej.jamb.api.services.FormService;
import matej.jamb.api.services.ScoreService;
import matej.jamb.models.Score;

@RestController
@RequestMapping("/scores")
public class ScoreController {

	@Autowired
	ScoreService scoreService;
	
	@Autowired
	FormService formService;

	@Scheduled(fixedRate = 86400000)
	public void clearUnfinishedScores() {
		scoreService.clearUnfinishedScores();
	}

	@GetMapping("/leaderboard")
	public List<Score> getLeaderboard() {
		return scoreService.getLeaderboard(10);
	}
}
