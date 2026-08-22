package net.dev.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.dev.ems.entity.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
