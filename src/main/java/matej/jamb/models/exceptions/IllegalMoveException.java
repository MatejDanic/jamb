package matej.jamb.models.exceptions;

public class IllegalMoveException extends Exception {
	
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public IllegalMoveException (String errorMessage) {
        super("Illegal move: " + errorMessage);
    }
}