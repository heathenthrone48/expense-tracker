import React, {useState} from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseChart from './ExpenseChart.js';
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = (props) => {
    
    const [ filteredYear, setFilteredYear] = useState('2022');
    
    const yearChooseHandler = (enteredYear) => {
        setFilteredYear(enteredYear);
        console.log(filteredYear);
    }

    const filteredExpenses = props.expenses.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear; 
    })

    return (
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearChoose={yearChooseHandler}/>
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList filteredExpenses={filteredExpenses} />
            </Card>
    );
}

export default Expenses;