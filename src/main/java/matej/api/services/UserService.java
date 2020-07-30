package matej.api.services;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import matej.api.repositories.RoleRepository;
import matej.api.repositories.UserRepository;
import matej.models.Role;
import matej.models.User;

@Service
public class UserService {
	
	@Autowired
	BCryptPasswordEncoder encoder;
	@Autowired
	RoleRepository roleRepo;
	@Autowired
	UserRepository userRepo;
	
	public void saveUser(User user) {
		user.setPassword(encoder.encode(user.getPassword()));
		Role userRole = roleRepo.findByLabel("SITE_USER");
		user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
		userRepo.save(user);
	}
	
	public boolean isUserAlreadyPresent(User user) {
		return false;
	}
	
}
