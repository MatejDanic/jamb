package matej.jamb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class JambOnlineApplication {

	public static void main(String[] args) {
		SpringApplication.run(JambOnlineApplication.class, args);
	}
	
}
