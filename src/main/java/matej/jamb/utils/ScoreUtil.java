package matej.jamb.utils;

import java.util.HashSet;
import java.util.Set;

import matej.jamb.constants.JambConstants;
import matej.jamb.models.Dice;
import matej.jamb.models.enums.BoxType;

public final class ScoreUtil {

	public static int checkScore(Set<Dice> diceSet, BoxType boxType) {
		int value = 0;
		switch(boxType) {
		case ONES:
		case TWOS:
		case THREES:
		case FOURS:
		case FIVES:
		case SIXES:
			value = checkSumByType(diceSet, boxType);
			break;
		case MAX:
			value = checkSum(diceSet);
			break;
		case MIN:
			value = checkSum(diceSet);
			break;
		case TRIPS:
			value = checkTrips(diceSet);
			break;
		case STRAIGHT:
			value = checkStraight(diceSet);
			break;
		case FULL:
			value = checkFull(diceSet);
			break;
		case POKER:
			value = checkPoker(diceSet);
			break;
		case JAMB:
			value = checkJamb(diceSet);
			break;			
		}
		return value;
	}
	
	public static int checkSumByType(Set<Dice> diceSet, BoxType boxType) { 
		int result = 0; 
		for (Dice d : diceSet) {
			if (d.getValue() == boxType.ordinal() + 1) {
				result += d.getValue();
			}
		} 
		return result; 
	} 
	
	public static int checkSum(Set<Dice> diceSet) { 
		int result = 0; 
		for (Dice d : diceSet) { 
			result += d.getValue();
		} 
		return result; 
	} 
 
	public static int checkTrips(Set<Dice> diceSet) { 
		int result = 0; 
		for (Dice d1 : diceSet) { 
			int count = 1; 
			int value = d1.getValue(); 
			for (Dice d2 : diceSet) { 
				if (d1 != d2 && d1.getValue() == d2.getValue()) { 
					count++; 
					if (count <= 3) value += d2.getValue(); 
				} 
			} 
			if (count >= 3) {
				result = value + JambConstants.BONUS_TRIPS; 
				break; 
			} 
		} 
		return result; 
	} 
 
	public static int checkStraight(Set<Dice> diceSet) { 
		int result = 0; 
		Set<Integer> straight = new HashSet<>(); 
		straight.add(2); 
		straight.add(3); 
		straight.add(4); 
		straight.add(5); 
		Set<Integer> countbers = new HashSet<>(); 
		for (Dice d : diceSet) { 
			countbers.add(d.getValue()); 
		} 
		if (countbers.containsAll(straight)) { 
			if (countbers.contains(1)) { 
				result = JambConstants.BONUS_STRAIGHT_SMALL; 
			} else if (countbers.contains(6)) 
				result = JambConstants.BONUS_STRAIGHT_BIG; 
		} 
		return result; 
	} 
 
	public static int checkFull(Set<Dice> diceSet) { 
		int result = 0;
		int valueTwo = 0;  
		int valueThree = 0; 
		for (Dice d1 : diceSet) { 
			int count = 1; 
			int value = d1.getValue(); 
			for (Dice d2 : diceSet) { 
				if (d1 != d2 && d1.getValue() == d2.getValue()) { 
					count++; 
					value += d2.getValue(); 
				} 
			} 
			if (count == 2) { 
				valueTwo = value; 
			} else if (count == 3) { 
				valueThree = value; 
			} 
		}
		if (valueTwo != 0 && valueThree != 0) { 
			result = valueTwo + valueThree + JambConstants.BONUS_FULL;
		}
		return result; 
	} 
 
	public static int checkPoker(Set<Dice> diceSet) { 
		int result = 0; 
		for (Dice d1 : diceSet) { 
			int count = 1; 
			int value = d1.getValue(); 
			for (Dice d2 : diceSet) { 
				if (d1 != d2 && d1.getValue() == d2.getValue()) { 
					count++; 
					if (count <= 4) value += d2.getValue(); 
				} 
			} 
			if (count >= 4) { 
				result = value + JambConstants.BONUS_POKER; 
				break; 
			} 
		} 
		return result; 
	} 
 
	public static int checkJamb(Set<Dice> diceSet) { 
		int result = 0; 
		for (Dice d1 : diceSet) { 
			int count = 1; 
			int value = d1.getValue(); 
			for (Dice d2 : diceSet) { 
				if (d1 != d2 && d1.getValue() == d2.getValue()) { 
					count++; 
					if (count <= 5) value += d2.getValue();
				} 
			} 
			if (count >= 5) { 
				result = value + JambConstants.BONUS_JAMB; 
				break; 
			} 
		} 
		return result; 
	}

}
