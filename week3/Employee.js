//TODO - Create Employee Module here and export to use in index.js


let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary: 5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary: 4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary: 5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary: 9000}
]




exports.getAllEmployeesJSON = async () => {
    return employees;
}

exports.getAllEmployeesFirstLastNames = async () => {
    let sortedEmployees = JSON.parse(JSON.stringify(employees));
    sortedEmployees.sort((a, b) => {
        let firstNameCompare = a.firstName.localeCompare(b.firstName);
        if (firstNameCompare !== 0) return firstNameCompare;

        return a.lastName.localeCompare(b.lastName);
    });
    return sortedEmployees;

}


exports.totalSalary = async () => {
    total = employees.reduce((total, employee) =>
        total + employee.Salary, 0
    );
    return {"total_salary": total};
}