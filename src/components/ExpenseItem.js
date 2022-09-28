import React from 'react'

export default function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.76;
    return (
        <div>
            <div>March 28th 2022</div>
            <div>
                <h2>Car Insurance</h2>
                <div>$297.64</div>
            </div>
        </div>

    )
}

