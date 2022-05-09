import ExpenseItem from "../ExpenseItem/ExpenseItem"
import Card from "../Card/Card";
import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        //console.log(selectedYear)
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)
                }
                
            </Card>
        </div>
    );
};

export default Expenses;