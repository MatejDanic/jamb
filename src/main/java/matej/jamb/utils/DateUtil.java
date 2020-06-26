package matej.jamb.utils;

import java.time.LocalDate;
import java.time.temporal.TemporalField;
import java.time.temporal.WeekFields;
import java.util.Calendar;
import java.util.Locale;

public final class DateUtil {
	
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