
import Card from "../Card/Card";
import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                />
                <ExpensesList expenses={filteredExpenses}/>                                  
            </Card>
        </div>
    );
};

export default Expenses;