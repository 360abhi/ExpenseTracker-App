import { useState } from "react";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Car Insurance",
    amount: "10",
    date: new Date(2022, 5, 19),
  },
  { 
    id:'e41',
    title: "House Insurance",
    amount: "1778",
    date: new Date(2021, 6, 19),
  },
  {
    id:'er1',
    title: "Computer Insurance",
    amount: "1000",
    date: new Date(2019, 7, 19),
  },
  {
    id:'ef1',
    title: "Phone Insurance",
    amount: "1000",
    date: new Date(2021, 8, 19),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses([expense,...expenses]);
    // setExpenses((prevExpenses) => {
    //   return [expense, ...prevExpenses];
    // });
    
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
