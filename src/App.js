import ExpenseItem from "./Components/ExpenseItem";

function App() {

  const expenses = [
    {
      title: 'Car Insurance',
      amount: 285,
      date: new Date(2021, 2, 28)
    },
    {
      title: 'Books',
      amount: 28,
      date: new Date(2021, 3, 28)
    },
    {
      title: 'Bike Insurance',
      amount: 285,
      date: new Date(2021, 2, 28)
    },
    {
      title: 'Home Insurance',
      amount: 2853,
      date: new Date(2020, 2, 25)
    }
  ]


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
