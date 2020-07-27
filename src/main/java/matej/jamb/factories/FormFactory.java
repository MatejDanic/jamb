package matej.jamb.factories;

import org.springframework.beans.factory.annotation.Autowired;

import matej.jamb.api.repos.FormRepository;
import matej.jamb.models.Form;
import matej.jamb.models.Score;

public class FormFactory {
	

	@Autowired
	static
	FormRepository formRepo;
	
	public static Form newInstance(Score score) {
		Form form = new Form(score);
//		form.setScore(score);
		formRepo.save(form);

		return form;
	}

}
