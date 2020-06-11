package matej.jamb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import matej.jamb.net.CachingService;
import matej.jamb.services.ScoreService;

@Controller
public class GameController {
	
	@Autowired
    CachingService cachingService;
	@Autowired
	ScoreService scoreService;
    
    @RequestMapping("/bjamb")
    public String bjamb() {
        return "bjamb";
    }

	@GetMapping("/scores")
	public String showAll(Model model) {
		model.addAttribute("scores", scoreService.getScoreList());
		return "allScores";
	}
    
    @Scheduled(fixedRate = 86400000)
    public void evictAllCaches() {
    	cachingService.evictAllCaches();
    }
    
}
