package matej.jamb.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import matej.jamb.api.services.ScoreService;
import matej.jamb.caching.CachingService;

@Controller
public class MainController {
	
	@Autowired
    CachingService cachingService;
	@Autowired
	ScoreService scoreService;
    
//    @RequestMapping("")
//    public String index() {
//        return "index";
//    }
    
    @Scheduled(fixedRate = 86400000)
    public void evictAllCaches() {
    	cachingService.evictAllCaches();
    }
    
}
