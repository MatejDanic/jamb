package matej.jamb.models.composite;

import java.io.Serializable;
import java.util.Objects;

public class DiceId implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int form;
	
	private int ordNum;
	
	public DiceId() {}
 
    public DiceId(int form, int ordNum) {
        this.form = form;
        this.ordNum = ordNum;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this== o) return true;
        if (o ==null|| getClass() != o.getClass()) return false;

        DiceId that = (DiceId) o;

        return Objects.equals(form, that.form) 
        		&& Objects.equals(ordNum, that.ordNum);
    }

    @Override
    public int hashCode() {
        return Objects.hash(form, ordNum);
    }
}