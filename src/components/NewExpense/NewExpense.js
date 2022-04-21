import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onSaveExpense(enteredExpenseData);
        return expenseData;
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
        </div>
    );
}

export default NewExpense;