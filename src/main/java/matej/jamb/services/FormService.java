package matej.jamb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matej.jamb.models.Form;
import matej.jamb.models.enums.BoxType;
import matej.jamb.models.enums.ColumnType;
import matej.jamb.repos.FormRepository;


@Service
public class FormService {

	@Autowired
	FormRepository formRepo;

	public int addForm(Form form) {
		formRepo.save(form);
		return form.getId();
	}	

	public void deleteFormById(int id) {
		formRepo.deleteById(id);
	}

	public Form getFormById(int id) {
		return formRepo.findById(id).get();
	}
	
	public void rollDice (int id) {
		formRepo.findById(id).get().rollRice();
	}
	
	public void updateForm(int id, ColumnType columnType, BoxType boxType) {
		Form form = formRepo.findById(id).get();
		form.getColumnByType(columnType).getBoxByType(boxType).update(form.getDiceSet());
	}
}
