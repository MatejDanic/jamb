package matej.jamb.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.jamb.models.Form;

public interface FormRepository extends JpaRepository<Form, Integer> {
	
}
