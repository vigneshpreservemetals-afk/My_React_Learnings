
export default function DemoPage2() {

    const firstName = "Vignesh";   
    const lastName = "Baskaran";
    const fullName = firstName + " " + lastName;
    const age = 30;
    const profession = "Software Engineer";
    const BaseSalary = 50000;
    const Bonus = 10000;
    const TotalSalary = BaseSalary + Bonus;



    return (
    <div>
        <h1> Welcome to Employee Salary Calculator </h1>
        <p> <strong> Employee Full Name </strong> : {fullName} </p>
        <p> <strong> Age </strong>: {age}</p>
        <p> <strong> Profession </strong> : {profession} </p>
        <p> <strong> Base Salary </strong> : ${BaseSalary} </p>
        <p> <strong> Bonus </strong> : ${Bonus} </p>
        <p> <strong> Total Salary </strong> : ${TotalSalary} </p>
    </div>)
}