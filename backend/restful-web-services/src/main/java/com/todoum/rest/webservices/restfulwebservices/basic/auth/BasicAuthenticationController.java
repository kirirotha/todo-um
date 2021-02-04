package com.todoum.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



//Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	
	
	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWorldBean() {
//		throw new RuntimeException("Some Error has Happened!!! Contact Support at 567-5309");
		return new AuthenticationBean("You have been authenticated!");
	}
	
	
}
