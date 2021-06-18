class EmployeeParollData
{
    //Property

    id;
    salary;
    gender;
    startDate;
    
    //Constructor
    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //Getter and Setter Method
    get name()
    {
        return this._name;
    }
    set name(name)
    {
        this._name = name;
    }

    //Method

    toString()
    {
       return "id: "+this.id +",name: "+this.name+ " ,salary: "+this.salary;

    }

}
let employeePayrollData = new EmployeeParollData(1, "Ankit", 50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Jhon";
console.log(employeePayrollData.toString());
employeePayrollData.id = 2, employeePayrollData._name = "Viajy", employeePayrollData.salary = 49999;
console.log(employeePayrollData.toString());