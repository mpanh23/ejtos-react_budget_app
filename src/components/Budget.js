import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if ( handleBudgetChange >= 20000) {
            alert("The value cannot exceed remaining funds);
            setCost("");
            return;
        }
        if (handleBudgetChange < ExpenseTotal) {
            alert("You cannot reduce the budget value lower than the spending");
            setCost("");
            return;
        }
        else
            setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
