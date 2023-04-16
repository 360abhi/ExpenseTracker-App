
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import './Expense.css'
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

function Expense(props) {

    const [filteredYear, setYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

   

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpensesList items = {filteredExpenses} />
        </Card>
    );
}

export default Expense;