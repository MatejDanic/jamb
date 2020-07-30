package matej.api.services;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matej.api.repositories.ScoreRepository;
import matej.models.Score;
import matej.utils.DateUtil;


@Service
public class ScoreService {

	@Autowired
	ScoreRepository scoreRepo;
	
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
