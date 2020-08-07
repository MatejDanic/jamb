package matej.api.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javassist.NotFoundException;

import com.google.common.util.concurrent.RateLimiter;

import matej.api.services.FormService;
import matej.exceptions.IllegalMoveException;
import matej.exceptions.InvalidOwnershipException;
import matej.models.Box;
import matej.models.Dice;
import matej.models.Form;
import matej.models.Column;
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

	// public String getUsername(@RequestHeader(value="Authorization") String
	// headerAuth) {
	// return jwtUtils.getUsernameFromHeader(headerAuth);
	// }

	@PutMapping("")
	public ResponseEntity<Object> initializeForm(@RequestHeader(value = "Authorization") String headerAuth) {
		if (!rateLimiter.tryAcquire(1))
			return null;
		try {
			return new ResponseEntity<>(formService.initializeForm(jwtUtils.getUsernameFromHeader(headerAuth)), HttpStatus.OK);
		} catch (NotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
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
	public List<Column> getColumns(@PathVariable(value = "id") int id) {
		return formService.getFormById(id).getColumns();
	}

	@GetMapping("/{id}/columns/{columnTypeOrdinal}")
	public Column getColumnByType(@PathVariable(value = "id") int id,
			@PathVariable(value = "columnTypeOrdinal") int columnTypeOrdinal) {
		return formService.getFormById(id).getColumnByType(ColumnType.values()[columnTypeOrdinal]);
	}

	@GetMapping("/{id}/columns/{columnTypeOrdinal}/boxes")
	public List<Box> getColumnBoxes(@PathVariable(value = "id") int id,
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
	public List<Dice> getFormDice(@PathVariable(value = "id") int id) {
		return formService.getFormById(id).getDice();
	}

	@PutMapping("/{id}/roll")
	public ResponseEntity<Object> rollDice(@RequestHeader(value = "Authorization") String headerAuth, @PathVariable(value = "id") int id,
			@RequestBody Map<Integer, Boolean> diceToThrow) {
		try {
			return new ResponseEntity<>(formService.rollDice(jwtUtils.getUsernameFromHeader(headerAuth), id, diceToThrow), HttpStatus.OK);
		} catch (InvalidOwnershipException | IllegalMoveException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/{id}/announce")
	public ResponseEntity<Object> announce(@RequestHeader(value = "Authorization") String headerAuth, @PathVariable(value = "id") int id, @RequestBody int announcementOrdinal) {
		try {
			return new ResponseEntity<>(formService.announce(jwtUtils.getUsernameFromHeader(headerAuth), id, announcementOrdinal), HttpStatus.OK);
		} catch (IllegalMoveException | InvalidOwnershipException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/{id}/columns/{columnTypeOrdinal}/boxes/{boxTypeOrdinal}/fill")
	public ResponseEntity<Object> fillBox(@RequestHeader(value = "Authorization") String headerAuth, @PathVariable(value = "id") int id,
			@PathVariable(value = "columnTypeOrdinal") int columnTypeOrdinal,
			@PathVariable(value = "boxTypeOrdinal") int boxTypeOrdinal) {
		try {
			return new ResponseEntity<>(formService.fillBox(jwtUtils.getUsernameFromHeader(headerAuth), id, columnTypeOrdinal, boxTypeOrdinal), HttpStatus.OK);
		} catch (IllegalMoveException | InvalidOwnershipException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

}
