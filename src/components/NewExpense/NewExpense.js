import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    let [ isEditing, setEditing] = useState(false);
    
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            id : Math.random().toString(),
            ...enteredExpenseData
        }
        console.log(expenseData);

        props.onAddExpense(expenseData);

    }
    
    const editHandler = () => {
        setEditing(true);
    }

    const cancelHandler = () => {
        setEditing(false);
    }


    return (
        <div className="new-expense">
            <button id="addAnExpenseButton" onClick={editHandler}>Add A New Expense</button>
            { isEditing === true && <ExpenseForm id="expenseForm" onSaveExpenseForm={saveExpenseHandler} onCancelForm={cancelHandler}/>}
        </div>
    )
}

export default NewExpense;