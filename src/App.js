import React , {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense"; 

const DUMMY_EXPENSES = [
  { id: "e1", title : "Car Insurance", price : 1000, date : new Date(2020, 1, 12) },
  { id: "e2", title : "Electricity Bill", price : 400, date : new Date(2022, 1, 9) },
  { id: "e3", title : "Party", price : 800, date : new Date(2022, 1, 18) },
];

const App = () => {
  
  console.log("Second commit of 19-04");

  const [ expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => ([expense, ...prevExpenses]));
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
