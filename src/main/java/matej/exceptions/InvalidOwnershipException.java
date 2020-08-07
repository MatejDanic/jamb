package matej.exceptions;

public class InvalidOwnershipException extends Exception {
	
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InvalidOwnershipException (String errorMessage) {
        super("Invalid ownership: " + errorMessage);
    }
}