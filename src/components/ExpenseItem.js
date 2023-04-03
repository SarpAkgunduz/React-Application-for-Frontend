import './ExpenseItem.css'
function ExpenseItem() {
    return (
    <div className = "expense-item">
        <div>03.04.2023</div>
        <div className = "expense-item__description">
            <h2 className = "expense-item__description h2">Car Insurance</h2>
            <div className= "expense-item__price">$295.64</div>
        </div>
    </div>
    )
}

export default ExpenseItem;