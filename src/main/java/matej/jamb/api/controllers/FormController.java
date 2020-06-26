package matej.jamb.api.controllers;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matej.jamb.api.services.FormService;
import matej.jamb.exceptions.IllegalMoveException;
import matej.jamb.models.Box;
import matej.jamb.models.Dice;
import matej.jamb.models.Form;
import matej.jamb.models.FormColumn;
import matej.jamb.models.Score;
import matej.jamb.models.enums.BoxType;
import matej.jamb.models.enums.ColumnType;

@RestController
@RequestMapping("/forms")
public class FormController {

	@Autowired
	FormService formService;
	
	@PostMapping("")
	public void addForm(@RequestBody(required = false) String nickname) {
		formService.addForm(nickname);
	}
	
	@DeleteMapping("/{id}")
	public void deleteFormById(@PathVariable(value="id") int id) {
		formService.deleteFormById(id);
	}
	
	@GetMapping("")
	public List<Form> getFormList() {
		return formService.getFormList();
	}
	
	@GetMapping("/{id}")
	public Form getFormById(@PathVariable(value="id") int id) {
		return formService.getFormById(id);
	}
	
	@GetMapping("/{id}/columns")
	public Set<FormColumn> getFormColumns(@PathVariable(value="id") int id) {
		return formService.getFormById(id).getColumns();
	}
	
	@GetMapping("/{id}/columns/{columnTypeOrdinal}")
	public FormColumn getFormColumnByType(@PathVariable(value="id") int id, @PathVariable(value="columnTypeOrdinal") int columnTypeOrdinal) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnTypeOrdinal]);
	}
	
	@GetMapping("/{id}/columns/{columnTypeOrdinal}/boxes")
	public Set<Box> getFormColumnBoxes(@PathVariable(value="id") int id, @PathVariable(value="columnTypeOrdinal") int columnTypeOrdinal) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnTypeOrdinal]).getBoxes();
	}
	
	@GetMapping("/{id}/columns/{columnTypeOrdinal}/boxes/{boxTypeOrdinal}")
	public Box getFormColumnBoxByType(@PathVariable(value="id") int id, @PathVariable(value="columnTypeOrdinal") int columnTypeOrdinal, @PathVariable(value="boxTypeOrdinal") int boxTypeOrdinal) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnTypeOrdinal]).getBoxByType(BoxType.values()[boxTypeOrdinal]);
	}
	
	@GetMapping("/{id}/dice")
	public Set<Dice> getFormDice(@PathVariable(value="id") int id) {
		return formService.getFormById(id).getDiceSet();
	}
	
	@GetMapping("/{id}/score")
	public Score getFormScore(@PathVariable(value="id") int id) {
		return formService.getFormById(id).getScore();
	}
	
	@PutMapping("/{id}/roll")
	public ResponseEntity<Object> rollDice(@PathVariable(value="id") int id, @RequestBody Map<Integer, Boolean> diceHolding) {
		try {
			return new ResponseEntity<>(formService.rollDice(id, diceHolding), HttpStatus.OK);	
		} catch (IllegalMoveException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/{id}/announce")
	public ResponseEntity<Object> announce(@PathVariable(value="id") int id, @RequestBody int announcementOrdinal) {
		try {
			return new ResponseEntity<>(formService.announce(id, announcementOrdinal), HttpStatus.OK);
		} catch (IllegalMoveException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/{id}/columns/{columnTypeOrdinal}/boxes/{boxTypeOrdinal}/update")
	public ResponseEntity<Object> update(@PathVariable(value="id") int id, @PathVariable(value="columnTypeOrdinal") int columnTypeOrdinal, @PathVariable(value="boxTypeOrdinal") int boxTypeOrdinal) {
		try {
			return new ResponseEntity<>(formService.update(id, columnTypeOrdinal, boxTypeOrdinal), HttpStatus.OK);
		} catch (IllegalMoveException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
}
