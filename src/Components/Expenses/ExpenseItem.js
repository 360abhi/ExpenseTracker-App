import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    //    const [title, setTitle] = useState(props.title);
    //    console.log("this many times") // runs 4 times as in the beginning as usestate runs for four diffrent expense items after that one time on a single click

    //     const clickedFunction = () => {
    //         setTitle('Updated');
    //         //we can use const titile as we dont use = and the value is revaluted the component runs again so we are setting the value only one time
    //     }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button>Click me</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;