// package matej.api.controllers;

// import java.util.HashSet;
// import java.util.List;
// import java.util.Set;
// import java.util.stream.Collectors;

// import javax.validation.Valid;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import matej.models.Role;
// import matej.models.User;
// import matej.payload.request.LoginRequest;
// import matej.payload.request.RegisterRequest;
// import matej.payload.response.JwtResponse;
// import matej.payload.response.MessageResponse;
// import matej.api.repositories.RoleRepository;
// import matej.api.repositories.UserRepository;
// import matej.security.jwt.JwtUtils;
// import matej.security.services.UserDetailsImpl;

// @RestController
// @CrossOrigin(origins="*")
// @RequestMapping("/auth")
// public class AuthController {
	
// 	@Autowired
// 	AuthenticationManager authenticationManager;
	
// 	@Autowired
// 	UserRepository userRepo;
	
// 	@Autowired
// 	RoleRepository roleRepo;
	
// 	@Autowired
// 	PasswordEncoder encoder;
	
// 	@Autowired
// 	JwtUtils jwtUtils;
	
// 	@PostMapping("/login")
// 	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		
// 		Authentication authentication = authenticationManager.authenticate(
// 		new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		
// 		SecurityContextHolder.getContext().setAuthentication(authentication);
// 		String jwt = jwtUtils.generateJwtToken(authentication);
		
// 		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
// 		List<String> roles = userDetails.getAuthorities().stream()
// 		.map(item -> item.getAuthority())
// 		.collect(Collectors.toList());
		
// 		return ResponseEntity.ok(new JwtResponse(jwt, 
// 		userDetails.getId(), 
// 		userDetails.getUsername(),
// 		roles));
// 	}
	
// 	@PostMapping("/register")
// 	public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
// 		if (userRepo.existsByUsername(registerRequest.getUsername())) {
// 			return ResponseEntity
// 			.badRequest()
// 			.body(new MessageResponse("Error: Username is already taken!"));
// 		}
		
// 		// Create new user's account
// 		User user = new User(registerRequest.getUsername(),
// 		encoder.encode(registerRequest.getPassword()));
		
// 		Set<String> strRoles = registerRequest.getRole();
// 		Set<Role> roles = new HashSet<>();
		
// 		if (strRoles == null) {
// 			Role userRole = roleRepo.findByLabel("USER")
// 			.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
// 			roles.add(userRole);
// 		} else {
// 			strRoles.forEach(role -> {
// 				switch (role) {
// 					case "admin":
// 					Role adminRole = roleRepo.findByLabel("ADMIN")
// 					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
// 					roles.add(adminRole);
					
// 					break;
// 					default:
// 					Role userRole = roleRepo.findByLabel("USER")
// 					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
// 					roles.add(userRole);
// 				}
// 			});
// 		}
		
// 		user.setRoles(roles);
// 		userRepo.save(user);
		
// 		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
// 	}
// }