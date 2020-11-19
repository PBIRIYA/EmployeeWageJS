class EmployeePayrollData
{
    //property
    id;
    salary;
    //here we have not initialised name property but have given name in the contructor
    //in javascript it is not mandatory to initialise property
    //but since we have not initialised name we need a getter and setter for name property to set its value
    

    //constructor
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    get name(){return this._name}
    set name(name){this._name=name}
    
    tostring(){return "id: "+this.id+" name: "+this.name+" salary : "+this.salary;}
}
 let employeePayrollData = new EmployeePayrollData(1,"Puma",60000);
 console.log(employeePayrollData.tostring());
 employeePayrollData.name="Nike";
 console.log(employeePayrollData.tostring());