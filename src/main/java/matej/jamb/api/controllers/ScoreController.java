package matej.jamb.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matej.jamb.api.services.FormService;
import matej.jamb.api.services.ScoreService;
import matej.jamb.models.Form;
import matej.jamb.models.Score;

@RestController
@RequestMapping("/scores")
@CrossOrigin(origins = "http://jamb-remote.herokuapp.com")
public class ScoreController {

	@Autowired
	ScoreService scoreService;
	
	@Autowired
	FormService formService;

//	@Scheduled(fixedRate = 86400000)
//	public void clearUnfinishedScores() {
//		scoreService.clearUnfinishedScores();
//	}
//
//	@PostMapping("")
//	public int addScore(@RequestBody Score score) {
//		scoreService.addScore(score);
//		Form form = new Form();
//		form.setScore(score);
//		score.setForm(form);
//		scoreService.addScore(score);
////		form.setScore(score);
////		score.setForm(form);
//		return score.getId();
//	}
//
//	@DeleteMapping("/{id}")
//	public void deleteScoreById(@PathVariable(value="id") int id) {
//		scoreService.deleteScoreById(id);
//	}
//
//	@GetMapping("/list")
//	public List<Score> getScoreList() {
//		return scoreService.getScoreList();
//	}
//	
//	@GetMapping("/{id}")
//	public Score getScoreById(@PathVariable(value="id") int id) {
//		return scoreService.getScoreById(id);
//	}
//
//	@PutMapping("/finish/{id}")
//	public void finishScore( @PathVariable("id") int id, @RequestBody int value) {
//		scoreService.updateScore(id, value, true);
//	}
//
//	@PutMapping("/{id}")
//	public void saveScore(@PathVariable("id") int id, @RequestBody int value) {
//		scoreService.updateScore(id, value, false);
//	}

	@GetMapping("/leaderboard")
	public List<Score> getLeaderboard() {
		return scoreService.getLeaderboard(10);
	}
}
