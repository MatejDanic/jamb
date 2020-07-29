package matej.models.enums;

public enum BoxType {

	ONES, TWOS, THREES, FOURS, FIVES, SIXES, MAX, MIN, TRIPS, STRAIGHT, FULL, POKER, JAMB;

	private static BoxType[] allValues = values();

	public static BoxType fromOrdinal(int n) {
		return allValues[n];
	}
}
