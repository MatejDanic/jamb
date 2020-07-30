package matej.models.enums;

public enum UserStatus {
    
	VERIFIED, UNVERIFIED, PENDING;
	
	private static UserStatus[] allValues = values();
    
	public static UserStatus fromOrdinal(int n) {
		return allValues[n];
	}
}