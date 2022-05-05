import './ExpenseItem.css'

function ExpenseItem() {

    const initialDate = new Date(2022, 2, 28);
    const title = "Car Insurance";
    const amount = 294.67;
    return (
        <div className="expense-item">        
            <div>{initialDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {amount} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;