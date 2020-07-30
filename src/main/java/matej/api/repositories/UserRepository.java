package matej.api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);
}
