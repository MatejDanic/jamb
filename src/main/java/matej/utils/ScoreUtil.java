package matej.utils;

import java.util.ArrayList;
import java.util.List;

import matej.constants.JambConstants;
import matej.models.Dice;
import matej.models.enums.BoxType;

public final class ScoreUtil {

	public static int checkScore(List<Dice> diceList, BoxType boxType) {
		int value = 0;
		switch(boxType) {
		case ONES:
		case TWOS:
		case THREES:
		case FOURS:
		case FIVES:
		case SIXES:
			value = checkSumByType(diceList, boxType);
			break;
		case MAX:
			value = checkSum(diceList);
			break;
		case MIN:
			value = checkSum(diceList);
			break;
		case TRIPS:
			value = checkTrips(diceList);
			break;
		case STRAIGHT:
			value = checkStraight(diceList);
			break;
		case FULL:
			value = checkFull(diceList);
			break;
		case POKER:
			value = checkPoker(diceList);
			break;
		case JAMB:
			value = checkJamb(diceList);
			break;			
		}
		return value;
	}
	
	public static int checkSumByType(List<Dice> diceList, BoxType boxType) { 
		int result = 0; 
		for (Dice d : diceList) {
			if (d.getValue() == boxType.ordinal() + 1) {
				result += d.getValue();
			}
		} 
		return result; 
	} 
	
	public static int checkSum(List<Dice> diceList) { 
		int result = 0; 
		for (Dice d : diceList) { 
			result += d.getValue();
		} 
		return result; 
	} 
 
	public static int checkTrips(List<Dice> diceList) { 
		int result = 0; 
		for (Dice d1 : diceList) { 
			int count = 1; 
			int value = d1.getValue(); 
			for (Dice d2 : diceList) { 
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
 
	public static int checkStraight(List<Dice> diceList) { 
		int result = 0; 
		List<Integer> straight = new ArrayList<>(); 
		straight.add(2); 
		straight.add(3); 
		straight.add(4); 
		straight.add(5); 
		List<Integer> countbers = new ArrayList<>(); 
		for (Dice d : diceList) { 
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
 
	public static int checkFull(List<Dice> diceList) { 
		int result = 0;
		int valueTwo = 0;  
		int valueThree = 0; 
		for (Dice d1 : diceList) { 
			int count = 1; 
			int value = d1.getValue(); 
			for (Dice d2 : diceList) { 
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
 
	public static int checkPoker(List<Dice> diceList) { 
		int result = 0; 
		for (Dice d1 : diceList) { 
			int count = 1; 
			int value = d1.getValue(); 
			for (Dice d2 : diceList) { 
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
 
	public static int checkJamb(List<Dice> diceList) { 
		int result = 0; 
		for (Dice d1 : diceList) { 
			int count = 1; 
			int value = d1.getValue(); 
			for (Dice d2 : diceList) { 
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
