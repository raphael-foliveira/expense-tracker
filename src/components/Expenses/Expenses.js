import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        </Card>
            </div>
      )
}

export default Expenses;