package matej.api.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matej.api.services.ScoreService;
import matej.constants.JambConstants;
import matej.models.Score;


@RestController
@CrossOrigin(origins="*")
@RequestMapping("")
public class HomeController {
	
	@Autowired
	ScoreService scoreService;
	
	@Scheduled(fixedRate = 86400000)
	public void clearUnfinishedScores() {
		scoreService.clearUnfinishedScores();
	}
	
	@GetMapping("")
	public void handleGet(HttpServletResponse response) {
		response.setHeader("Location", "http://localhost:3000");
		response.setStatus(302);
	}
	
	@GetMapping("/scores")
	public List<Score> getLeaderboard() {
		return scoreService.getLeaderboard(JambConstants.LEADERBOARD_LIMIT);
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasAuthority('ADMIN')")
	public String adminAccess() {
		return "You are an admin";
	}
}


