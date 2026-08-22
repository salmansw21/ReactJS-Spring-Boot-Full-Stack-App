package net.dev.ems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.dev.ems.dto.EmployeeDto;
import net.dev.ems.service.EmployeeService;

@RestController
public class EmployeeController {

	private EmployeeService employeeService;

	@PostMapping("/create")
	public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
		
		EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
		
		return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
	}
	
}
