import { useState } from 'react';
import './ExpenseTracker.css'

const ExpenseTracker = () => {
  // Initilize useState using transactions, title, amount, type, showForm and search
  const [showForm, setShowForm] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState(null)
  const [search, setSearch] = useState("")

  //create filteredTransactions

  //Calculate balance using totalIncome and totalExpense
  const filteredTransactions = search ? transactions.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) : transactions


  const handleAddTransaction = () => {
    // complete logic to create a new transaction object
    // update the state and reset form fields
    setTransactions((prev) => ([...prev, { id: Date.now(), title, amount, type }]))
    setAmount("")
    setTitle("")
    setType(null)
    setShowForm(false)
  };

  const handleDelete = (id) => {
    // implement delete logic
    setTransactions(prev => prev.filter(item => item.id!==id))
  };

  return (
     <div className="tracker-container">
      <h2>Expense Tracker</h2>

      <div className="header-container">
        <div className="balance">
          <h3 data-testid="balance-amount">Balance: ₹{(transactions.filter(item => item.type === "income").reduce((acc, ele) => acc+ele.amount, 0))-(transactions.filter(item => item.type === "expense").reduce((acc, ele) => acc+ele.amount, 0))}</h3>
        </div>

        <button
          className="toggle-form-button"
          data-testid="toggle-form-button"
          onClick={() => setShowForm(prev => !prev)}
        >
          {showForm ? "Close" : "Open"} Form
        </button>
      </div>

      {showForm && (
        <div className="form">
          <input
            type="text"
            data-testid="title-input"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            data-testid="amount-input"
            placeholder="Amount"
            min="0"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <select
            data-testid="type-select"
            onChange={(e) => setType(e.target.value)}
          >
            <option>Select</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button data-testid="add-button" onClick={handleAddTransaction}>
            Add Transaction
          </button>
        </div>
      )}


      <div className="summary">
        <div data-testid="income-amount">Income: ₹{transactions.filter(item => item.type==="income").reduce((acc, ele) => acc+ele.amount, 0)}</div>
        <div data-testid="expenses-amount">Expense: ₹{transactions.filter(item => item.type==="expense").reduce((acc, ele) => acc+ele.amount, 0)}</div>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        data-testid="search-input"
        placeholder="Search..."
        className="search"
      />

        {(filteredTransactions.length === 0) ? (
          <div className='no-transactions' data-testid="no-transactions">No transactions found</div>
        ) : (
          
      <ul className='transactions'>
            {filteredTransactions.map((item => (
              <li key={item.id} className={`${item.type}`} data-testid="transaction-item">
                <span>{item.title}: ₹{item.amount}</span>
                <button onClick={() => handleDelete(item.id)} data-testid="delete-button">Delete</button>
              </li>
            )))}
      </ul>
      )}

    </div>
  );
};

export default ExpenseTracker;
