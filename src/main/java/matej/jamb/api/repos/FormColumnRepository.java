package matej.jamb.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.jamb.models.FormColumn;

public interface FormColumnRepository extends JpaRepository<FormColumn, Integer> {
	
}
