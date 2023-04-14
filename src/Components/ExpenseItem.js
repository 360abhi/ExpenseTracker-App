import './ExpenseItem.css';

function ExpenseItem(props) {

   
    return (
        <div className='expense-item-body'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item-detail'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;