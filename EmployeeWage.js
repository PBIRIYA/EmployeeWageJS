<<<<<<< HEAD
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const TOTAL_WORKING_DAYS = 20;
const MAXIMUM_WORKING_HOURS = 100;
function GetWorkingHours(empCheck)
{ 
    switch(empCheck)
    {
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
        case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
        default:
        return 0;
        break;
    }
}
let empHrs = 0;
let totalWorkingDays = 0;
for(let day = 1; day<= TOTAL_WORKING_DAYS; day++)
{
   let empCheck = Math.floor(Math.random() * 10) % 3;
   empHrs += GetWorkingHours(empCheck);
   totalWorkingDays = day;
   if(empHrs >= MAXIMUM_WORKING_HOURS)
   {
       break;
   }
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total working days: " + totalWorkingDays + "Total Working hours: "+ empHrs + "Employee Wage: " + empWage);
=======
console.log("Welcome to Employee Wage");
//UC1-To Check If Employee is Absent Or Present
console.log("UC1-To Check If Employee is Absent Or Present");
const  IS_ABSENT=0;
{
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is absent");
}
else
{
    console.log("Employee is present");
}
}
//UC2-To Check PartTime and FullTime WageS
console.log("UC2-PartTime or fulltime wage")
const IS_Full_TIME=2;
const IS_PART_TIME=1;
const WAGE_PER_HOUR=20;
let emp_hours=0;
let empCheck= Math.floor((Math.random()*10)%3);
switch(empCheck)
{
    case 1:       
        emp_hours=4;
        break;
    case 2:      
        emp_hours=8;
        break;
    default:
        emp_hours=0;
        break;
}
let employeeWage= WAGE_PER_HOUR*emp_hours;
console.log("empWage for UC2 : "+employeeWage);
//UC3-Refractoring UC2 to Write Functions
{
    console.log("UC3-Refractor UC2 to Write Functions");  
    const IS_Full_TIME=2;
    const IS_PART_TIME=1;
    const Full_TIME_HRS=8;
    const PART_TIME_HRS=4;
    const WAGE_PER_HOUR=20;
    function getWorkingHrs(empCheck)
    {
        switch(empCheck)
        {
            case 1:       
                return PART_TIME_HRS;
                
            case 2:      
                 return Full_TIME_HRS;           
            default:
                return 0;        
    
        }
    }
    let empCheck= Math.floor((Math.random()*10)%3);
    let empHrs=getWorkingHrs(empCheck);
    let employeeWage= WAGE_PER_HOUR*emp_hours;
    console.log("empWage For UC3: "+employeeWage);
    //UC4-Calculating Wage For a month 
    const NUM_OF_WORKING_DAYS=20;
    let totalWorkinghrs=0;
    for(let day=0;day<=NUM_OF_WORKING_DAYS;day++)
    {
        let empCheck= Math.floor((Math.random()*10)%3);
        empHrs=getWorkingHrs(empCheck); 
        totalWorkinghrs+=empHrs   
    }
    employeeWage= totalWorkinghrs*WAGE_PER_HOUR;
    console.log("EmployeeWage for month UC4 : "+ employeeWage);

    //UC5-Total Working Hours Less Than 100 or Total working days less than 20
    console.log("UC5-Total Working Hours Less Than 100 or Total working days less than 20");
    const MAX_WORKING_HOURS=160;
    let daysWorked=0;
    let workingHrs=0;
    while(totalWorkinghrs<MAX_WORKING_HOURS && daysWorked<NUM_OF_WORKING_DAYS)
    {
        daysWorked++;
        empCheck= Math.floor((Math.random()*10)%3);
        empHrs=getWorkingHrs(empCheck); 
        workingHrs+=empHrs;
    }
    employeeWage= workingHrs*WAGE_PER_HOUR;
    console.log("total working days for UC5 : "+daysWorked +" EmployeeWage for month UC5 : "+ employeeWage);

    //UC6-Storing total wage and daily wage in an array by creating a function
    daysWorked=0;
    totalWorkinghrs=0;
    let empDailyWageArray= new Array();
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();
    let empDailyHrsAndWageArray= new Array();
    function CalEmpWage(empHrs)
    {
        return empHrs*WAGE_PER_HOUR;
    }
    while(totalWorkinghrs<MAX_WORKING_HOURS && daysWorked<NUM_OF_WORKING_DAYS)
    {
        daysWorked++;
        let empCheck= Math.floor((Math.random()*10)%3);
        let empHrs=getWorkingHrs(empCheck); 
        totalWorkinghrs+=empHrs;
        empDailyWageArray.push(CalEmpWage(empHrs));
        empDailyWageMap.set(daysWorked,CalEmpWage(empHrs));
        empDailyHrsMap.set(daysWorked,empHrs);
        empDailyHrsAndWageArray.push({
            daynum:daysWorked,
            dailyHrs:empHrs,
            dailyWage:CalEmpWage(empHrs),
            toString(){ 
            return '\n day'+this.daynum+' => daily hrs '+this.dailyHrs+' daily wage '+this.dailyWage
            },

        });
    }
    let totalWage=CalEmpWage(totalWorkinghrs);
    console.log("UC6 daily wage array ");
    console.log(empDailyWageArray);
    console.log("total working days for UC6 : "+daysWorked +" EmployeeWage for month UC6: "+ totalWage);
    //UC7A-Calculating TotalWage using foreach
    let totalEmployeeWage=0;
    function sum(dailyWage)
    {
        totalEmployeeWage+= dailyWage;
    }
    //will perform the function sum foreach element in the array
    empDailyWageArray.forEach(sum);
    console.log("UC 7a Emp wage with foreach: "+totalEmployeeWage);
    function totalWages(totalWage,dailyWage)
    {
        return totalWage+dailyWage;
    }
    //this will also perform a similar func like foreach
    //the first parameter for reduce is the function name with atleast max 4 parameters
    //the second parameter for reduce is the initial value of totalwage so that it can start
    //daily wages are extracted from the array
    console.log("UC 7a Emp wage with reduce: "+empDailyWageArray.reduce(totalWages,0));
    // UC 7b- daily wage counter using array map
    //UC 7B- show the day along with daily wage using array map helper functions.
    let dayCount= 0;
    function mapDayWithWage(dailyWage)
    { 
       dayCount+=1;
       return dayCount + " = "+ dailyWage; 
    }
    let mapDaywithWageArray= empDailyWageArray.map(mapDayWithWage);
    //console.log(empDailyWageArray);
    console.log(mapDaywithWageArray[1]);
    //console.log(dayCount);

    //UC 7c - displaying days when daily wage is 160
    function FullTimeWage(dailyWage)
    {
        return dailyWage.includes("160");
    }
    let fullDayWageArr= mapDaywithWageArray.filter(FullTimeWage);
    console.log("UC 7c: "+fullDayWageArr); 
    //UC 7d- finding first day occurence when employee was present for full day 160 wage
    console.log("UC 7d first time employee was present for full day: "+ mapDaywithWageArray.find(FullTimeWage))
    //UC 7e- checking if every element of fullday wage array contains 160 
    console.log("UC 7e: checking if all elements of full time employee has wage of 160 : "+fullDayWageArr.every(FullTimeWage));
    //UC 7f- Checking if there is any part time wage i.e. 80
    function PartTimeWage(dailyWage)
    {
        return dailyWage.includes("80");
    }
    //some specifies whether called func returns true for any value
    console.log("UC 7f:"+mapDaywithWageArray.some(PartTimeWage));
    //UC 7g checking number of days employee actually worked
    function totalDaysWorked(noOfDays,dailyWage)
    {
    if(dailyWage>0)
    {
        return noOfDays+=1;
    }
    return noOfDays;
    }
    //using reduce function and give noofdays as 0 for begining 
    console.log("UC 7g no of days employee worked actually : "+empDailyWageArray.reduce(totalDaysWorked,0));
    //UC8 Using map DataStructure
    let totalWageMap=0;
    for(let wage of empDailyWageMap.values())
    {
        totalWageMap+=wage;
    }
    console.log("UC8 total wage from map :"+totalWageMap)
    //UC9- Using Arrow Functions
    //using dailywagemap and dailyhrsmap to calculate the total hours and total salary
    const findTotal=(totalVal,dailyVal)=>
    {
        return totalVal+dailyVal;
    }
    let count=0;
    //using arrow functions to find total hours using findtotal func
    let totalHours= Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
    //calculating totalSalary using filter and reduce in built func
    let totalSalary=empDailyWageArray.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
    console.log("UC9 totalHours: "+totalHours+"  totalSalary : "+totalSalary);
    //days worked fulltime , parttime and nonworking
    let nonWorkingDays=new Array();
    let partTimeWorkingDays=new Array();
    let fullWorkingDays=new Array();
    empDailyHrsMap.forEach((value,key)=>{
        if(value==8) fullWorkingDays.push(key);
        else if(value==4)partTimeWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("UC9 Full working days :"+fullWorkingDays);
    console.log("UC9 part time working days :"+partTimeWorkingDays);
    console.log("UC9 non working days :"+partTimeWorkingDays);
    //UC10 storing days, hours , wage in a single object
    console.log("UC10 using single object"+empDailyHrsAndWageArray);
    //UC11a Calculating total wages and Total hours using single object
    let totalWagesUsingObject = empDailyHrsAndWageArray.filter(dailywageVal=>dailywageVal.dailyWage>0).reduce((totalWageVal,dailywageVal)=>totalWageVal+=dailywageVal.dailyWage,0);
    let totalHoursUsingObject=empDailyHrsAndWageArray.filter(dailyHrsVal=>dailyHrsVal.dailyHrs>0).reduce((totalHrsVal,dailyHrsVal)=>totalHrsVal+=dailyHrsVal.dailyHrs,0);
    console.log("UC11a TotalHours: "+totalHoursUsingObject+" TotalWages :"+totalWagesUsingObject);
    //UC11b print full working days using foreach 
    process= require('process');
    process.stdout.write("\nUC 11B Logging full working days");
    let fulltimeWorkingDays=empDailyHrsAndWageArray.filter((day)=>day.dailyHrs==8).forEach((day)=>process.stdout.write(day.toString()));
    process.stdout.write("\nUC 11c Logging part time working days");
    let partWorkingDays=empDailyHrsAndWageArray.filter((day)=>day.dailyHrs==4).map((day)=>process.stdout.write(day.toString()));
    process.stdout.write("\nUC 11d Logging non working days");
    let noWorkingDays=empDailyHrsAndWageArray.filter((day)=>day.dailyHrs==0).map((day)=>process.stdout.write(day.toString()));  
}
>>>>>>> UC13_ValidatingnameUsingRegex
