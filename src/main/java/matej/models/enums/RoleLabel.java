package matej.models.enums;

public enum RoleLabel {
    
	SITE_USER, ADMIN_USER, SUPER_USER;
	
	private static RoleLabel[] allValues = values();
    
	public static RoleLabel fromOrdinal(int n) {
		return allValues[n];
	}
}