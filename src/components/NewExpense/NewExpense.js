import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const editFormHandler = () => {
        setIsEditing(true);
    }
    const cancleEditFormHandler = () => {
        setIsEditing(false);
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={editFormHandler}>Add Expense</button>} 
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={cancleEditFormHandler}/>}          
        </div>
    )
}

export default NewExpense;