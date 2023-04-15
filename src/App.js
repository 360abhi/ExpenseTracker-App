import Expense from "./Components/Expense";

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
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
