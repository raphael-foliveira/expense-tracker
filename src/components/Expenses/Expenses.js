import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


function Expenses(props){

    const [filterYear, setFilteredYear] = useState("2022")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    let filteredExpenses = props.data.filter((expense) => {
        let expenseYear = expense.date.getFullYear();
        let expenseYearString = expenseYear.toString();
        return expenseYearString === filterYear;
    })

    return (
        <div>
            

        <Card className="expenses">
        <ExpensesFilter currentlySelected={filterYear} selectedYear={filterChangeHandler}/>
        {filteredExpenses.map((expense) => (
            <ExpenseItem 
            key={expense.id}
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