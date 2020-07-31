package matej.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import matej.api.services.ScoreService;
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
	
	@RequestMapping("")
	public ModelAndView index () {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("index");
		return modelAndView;
	}

	@GetMapping("/scores")
	public List<Score> getLeaderboard() {
		return scoreService.getLeaderboard(10);
	}
	
	@GetMapping("/play")
	@PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
	public String play() {
		return "index";
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasAuthority('ADMIN')")
	public String adminAccess() {
		return "You are an admin";
	}
}


