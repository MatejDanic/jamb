package matej.api.services;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import matej.api.repos.RoleRepository;
import matej.api.repos.UserRepository;
import matej.models.Role;
import matej.models.User;
import matej.models.enums.RoleLabel;
import matej.models.enums.UserStatus;

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
		user.setUserStatus(UserStatus.VERIFIED);
		Role userRole = roleRepo.findByRoleLabel(RoleLabel.SITE_USER);
		user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
		userRepo.save(user);
	}
	
	public boolean isUserAlreadyPresent(User user) {
		return false;
	}
	
}
