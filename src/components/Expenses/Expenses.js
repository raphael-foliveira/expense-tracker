import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


function Expenses(props){

    const [filterYear, setFilteredYear] = useState("2022")

    const filterChangeHandler = (selectedYear) => {
        console.log("Expenses.js");
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            

        <Card className="expenses">
        <ExpensesFilter currentlySelected={filterYear} selectedYear={filterChangeHandler}/>
        {props.data.map(expense => (
            <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            ></ExpenseItem>
            ))}
        </Card>
            </div>
      )
}

export default Expenses;