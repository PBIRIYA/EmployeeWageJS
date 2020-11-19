class EmployeePayrollData
{
    //property
    id;
    salary;
    gender;
    startDate;
    //here we have not initialised name property but have given name in the contructor
    //in javascript it is not mandatory to initialise property
    //but since we have not initialised name we need a getter and setter for name property to set its value
    

    //constructor
    constructor(...params)
    {
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
    get name(){return this._name}
    set name(name){this._name=name}
    
    tostring(){
        const options={year:'numeric',month:'long',day:'numeric'};
        const empDate= this.startDate==undefined?"undefined":this.startDate.toLocaleDateString("en-US",options);
        return "id: "+this.id+" name: "+this.name+" salary : "+this.salary+" gender : "+this.gender+" startdate : "+this.startDate;}
}
 let employeePayrollData = new EmployeePayrollData(1,"Puma",60000);
 console.log(employeePayrollData.tostring());
 employeePayrollData.name="Nike";
 console.log(employeePayrollData.tostring());
 let newEmployeePayrollData = new EmployeePayrollData(1,"Puma",60000,'F',new Date());
 console.log(newEmployeePayrollData.tostring());