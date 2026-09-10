import { useEffect, useState } from "react";
import { getAllEmployees } from "../services/employeeService";
import { Button } from "bootstrap";

function EmployeeTable() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error(error);
                setError("Failed to load employees");
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <h3>Loading employees...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (
    
        <div className="employee-container">
       
            <h2>Employee List</h2>
<button type="button" className="btn btn-primary">
    Add Employee
</button>
            <table className="employee-table">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fitst Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>

                    {employees.map((employee) => (

                        <tr key={employee.id}>

                            <td>{employee.id}</td>

                            <td>{employee.firstName}</td>

                            <td>{employee.lastName}</td>

                            <td>{employee.email}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default EmployeeTable;