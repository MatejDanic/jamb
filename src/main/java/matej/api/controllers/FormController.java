package matej.api.controllers;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.util.concurrent.RateLimiter;

import matej.api.services.FormService;
import matej.exceptions.IllegalMoveException;
import matej.models.Box;
import matej.models.Dice;
import matej.models.Form;
import matej.models.Column;
import matej.models.User;
import matej.models.enums.BoxType;
import matej.models.enums.ColumnType;
import matej.security.jwt.JwtUtils;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/forms")
public class FormController {

	@Autowired
	FormService formService;

	@Autowired
	JwtUtils jwtUtils;	

	private final RateLimiter rateLimiter = RateLimiter.create(0.2);

	@GetMapping("/username")
	protected String getUsername(@RequestHeader String token) {
		String username = "";
		try {
			if (token != null && jwtUtils.validateJwtToken(token)) {
				username = jwtUtils.getUserNameFromJwtToken(token);
			} 
		} catch (Exception e) {
		}
		return username;
	}

	@PostMapping("")
	public int initializeForm(@RequestBody User user) {
		if (!rateLimiter.tryAcquire(1))
			return 0;
		return formService.initializeForm(user);
	}

	@GetMapping("")
	public List<Form> getFormList() {
		return formService.getFormList();
	}

	@GetMapping("/{id}")
	public Form getFormById(@PathVariable(value = "id") int id) {
		return formService.getFormById(id);
	}

	@GetMapping("/{id}/columns")
	public Set<Column> getColumns(@PathVariable(value = "id") int id) {
		return formService.getFormById(id).getColumns();
	}

	@GetMapping("/{id}/columns/{columnTypeOrdinal}")
	public Column getColumnByType(@PathVariable(value = "id") int id,
			@PathVariable(value = "columnTypeOrdinal") int columnTypeOrdinal) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnTypeOrdinal]);
	}

	@GetMapping("/{id}/columns/{columnTypeOrdinal}/boxes")
	public Set<Box> getColumnBoxes(@PathVariable(value = "id") int id,
			@PathVariable(value = "columnTypeOrdinal") int columnTypeOrdinal) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnTypeOrdinal]).getBoxes();
	}

	@GetMapping("/{id}/columns/{columnTypeOrdinal}/boxes/{boxTypeOrdinal}")
	public Box getColumnBoxByType(@PathVariable(value = "id") int id,
			@PathVariable(value = "columnTypeOrdinal") int columnTypeOrdinal,
			@PathVariable(value = "boxTypeOrdinal") int boxTypeOrdinal) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnTypeOrdinal])
				.getBoxByType(BoxType.values()[boxTypeOrdinal]);
	}

	@GetMapping("/{id}/dice")
	public Set<Dice> getFormDice(@PathVariable(value = "id") int id) {
		return formService.getFormById(id).getDiceSet();
	}

	@PutMapping("/{id}/roll")
	public ResponseEntity<Object> rollDice(@PathVariable(value = "id") int id,
			@RequestBody Map<Integer, Boolean> diceToThrow) {
		try {
			return new ResponseEntity<>(formService.rollDice(id, diceToThrow), HttpStatus.OK);
		} catch (IllegalMoveException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/{id}/announce")
	public ResponseEntity<Object> announce(@PathVariable(value = "id") int id, @RequestBody int announcementOrdinal) {
		try {
			return new ResponseEntity<>(formService.announce(id, announcementOrdinal), HttpStatus.OK);
		} catch (IllegalMoveException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/{id}/columns/{columnTypeOrdinal}/boxes/{boxTypeOrdinal}/fill")
	public ResponseEntity<Object> fillBox(@PathVariable(value = "id") int id,
			@PathVariable(value = "columnTypeOrdinal") int columnTypeOrdinal,
			@PathVariable(value = "boxTypeOrdinal") int boxTypeOrdinal) {
		try {
			return new ResponseEntity<>(formService.fillBox(id, columnTypeOrdinal, boxTypeOrdinal), HttpStatus.OK);
		} catch (IllegalMoveException e) {
			e.printStackTrace();
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

}
