package matej.startup;

import java.util.Arrays;

import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import matej.api.repositories.RoleRepository;
import matej.models.Role;

@Component
public class AppStartupComponent {    
    @Bean
    public ApplicationRunner initializer(RoleRepository roleRepo) {
        return args -> roleRepo.saveAll(Arrays.asList(
            new Role("USER"),
            new Role("ADMIN")
        ));
    }
}