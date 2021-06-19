class EmployeeParollData
{
    //Property

    id;
    salary;
    gender;
    startDate;
    
    //Constructor
    // constructor(id, name, salary, gender, startDate)
    // {
    //     this.id = id;
    //     this.name = name;
    //     this.salary = salary;
    // }

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.gender = params[2];
        this.salary = params[3];
        this.startDate = params[4];

    }

    //Getter and Setter Method
    get name()
    {
        return this._name;
    }
    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect';
    }

    //Method

    toString()
    {
       return "id: "+this.id +",name: "+this.name+  " gender: "+this.gender + 
       " ,salary: "+this.salary+" ,startDate: "+ this.startDate; 

    }

}
let employeePayrollData = new EmployeeParollData(1, "Ankit", 50000);
console.log(employeePayrollData.toString());
try{
 employeePayrollData.name = "jhon";
 console.log(employeePayrollData.toString());
}
catch(e)
{
    console.error(e)
}
console.log(employeePayrollData.toString());
employeePayrollData.id = 2, employeePayrollData._name = "Terrisa", employeePayrollData.salary = 49999,
 employeePayrollData.gender ='F', employeePayrollData.startDate= new Date();
console.log(employeePayrollData.toString());
// let newEmployeePayrollData = new EmployeeParollData(3, "Terrisa", 30000, "F", new Date());
// console.log(employeePayrollData.toString());