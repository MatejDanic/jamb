package matej.jamb.models.enums;

public enum ColumnType {
	
	DOWNWARDS, UPWARDS, ANY_DIRECTION, ANNOUNCEMENT;
	
	private static ColumnType[] allValues = values();
    
	public static ColumnType fromOrdinal(int n) {
		return allValues[n];
	}
	
}
