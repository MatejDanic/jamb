package matej.api.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import matej.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
