package matej.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.Column;

public interface ColumnRepository extends JpaRepository<Column, Integer> {
	
}
