package matej.jamb.services;

import java.time.LocalDate;
import java.time.temporal.TemporalField;
import java.time.temporal.WeekFields;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Queue;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matej.jamb.models.Score;
import matej.jamb.repos.ScoreRepository;


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
			if (!e.isFinished() || !(isSameWeek(e.getDate(), today))) {
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

	public static boolean isSameDay(Calendar cal1, Calendar cal2) {
		if (cal1 == null || cal2 == null) {
			throw new IllegalArgumentException("The dates must not be null");
		}
		return (cal1.get(Calendar.ERA) == cal2.get(Calendar.ERA) &&
				cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR) &&
				cal1.get(Calendar.DAY_OF_YEAR) == cal2.get(Calendar.DAY_OF_YEAR));
	}
	
	public static boolean isSameWeek(LocalDate date1, LocalDate date2) {
		if (date1 == null || date2 == null) {
			throw new IllegalArgumentException("The dates must not be null");
		}
		TemporalField woy = WeekFields.of(Locale.getDefault()).weekOfWeekBasedYear();
		return (date1.getEra() == date2.getEra() &&
				date1.getYear() == date2.getYear() &&
				date1.get(woy) == date2.get(woy));
	}
}
