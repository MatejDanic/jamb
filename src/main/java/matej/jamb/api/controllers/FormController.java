package matej.jamb.api.controllers;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matej.jamb.api.services.FormService;
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
	
	@GetMapping("/{id}/columns/{columnType}")
	public FormColumn getFormColumnByType(@PathVariable(value="id") int id, @PathVariable(value="columnType") int columnType) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnType]);
	}
	
	@GetMapping("/{id}/columns/{columnType}/boxes")
	public Set<Box> getFormColumnBoxes(@PathVariable(value="id") int id, @PathVariable(value="columnType") int columnType) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnType]).getBoxes();
	}
	
	@GetMapping("/{id}/columns/{columnType}/boxes/{boxType}")
	public Box getFormColumnBoxByType(@PathVariable(value="id") int id, @PathVariable(value="columnType") int columnType, @PathVariable(value="boxType") int boxType) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnType]).getBoxByType(BoxType.values()[boxType]);
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
	public Set<Dice> getFormScore(@PathVariable(value="id") int id, @RequestBody Map<Integer, Boolean> diceHolding) {
		return formService.rollDice(id, diceHolding);
		
	}
}
