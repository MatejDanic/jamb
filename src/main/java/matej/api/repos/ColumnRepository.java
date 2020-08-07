package matej.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Column;

public interface ColumnRepository extends JpaRepository<Column, Integer> {
	
}
