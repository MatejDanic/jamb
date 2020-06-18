package matej.jamb.services;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matej.jamb.models.Score;
import matej.jamb.repos.ScoreRepository;
import matej.jamb.utils.DateUtil;


@Service
public class ScoreService {

	@Autowired
	ScoreRepository scoreRepo;
	

	public int addScore(Score score) {
		scoreRepo.save(score);
		return score.getId();
	}	

	public void deleteScoreById(int id) {
		scoreRepo.deleteById(id);
	}

	public List<Score> getScoreList() {
		List<Score> scoreList = new LinkedList<>();
		scoreList = scoreRepo.findAll();
		Collections.sort(scoreList, new Comparator<Score>() {
			@Override
			public int compare(Score s1, Score s2) {
				return (int) (s2.getId() - s1.getId());
			}
		});

		return scoreList;
	}	

	public Score getScoreById(int id) {
		return scoreRepo.findById(id).get();
	}
	
	public void clearUnfinishedScores() {
		Queue<Score> queue = new LinkedList<>();
		LocalDate today = LocalDate.now();
		for (Score score : scoreRepo.findAll()) {
			if (!score.isFinished() && score.getDate().isBefore(today)) {
				queue.add(score);
			}
		}
		scoreRepo.deleteAll(queue);
	}

	public void updateScore(int id, int value, boolean finished) {
		Score score = scoreRepo.findById(id).get();
		if (finished) {
			score.setFinished(true);
		}
		score.setValue(value);
		scoreRepo.save(score);	
	}

	public List<Score> getLeaderboard(int max) {
		List<Score> leaderBoard = scoreRepo.findAll();
		Queue<Score> queue = new LinkedList<>();
		LocalDate today = LocalDate.now();
		leaderBoard.forEach(e -> {
			if (!e.isFinished() || !(DateUtil.isSameWeek(e.getDate(), today))) {
				queue.add(e);
			}
		});
		leaderBoard.removeAll(queue);
		Collections.sort(leaderBoard, new Comparator<Score>() {
			@Override
			public int compare(Score s1, Score s2) {
				return (s2.getValue() - s1.getValue());
			}
		});
		return leaderBoard.stream().limit(max).collect(Collectors.toList());
	}
}
