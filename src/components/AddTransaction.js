import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = e =>
    setIncome({ ...income, [e.target.name]: e.target.value });

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = e =>
    setExpense({ ...expense, [e.target.name]: e.target.value });

  const onSubmitIncome = e => {
    e.preventDefault();
    if (incomeText !== "" && incomeAmount !== 0) {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1
      };

      addIncome(newIncomeTransaction);
      setIncome({
        incomeText: "",
        incomeAmount: 0
      });
    }
  };

  const onSubmitExpense = e => {
    e.preventDefault();

    if (expenseText !== "" && expenseAmount !== 0) {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1
      };

      addExpense(newExpenseTransaction);
      setExpense({
        expenseText: "",
        expenseAmount: 0
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            name="incomeText"
            type="text"
            value={incomeText}
            onChange={onChangeIncome}
            placeholder="Add Income..."
            autocomplete="off"
          />
          <input
            name="incomeAmount"
            type="number"
            value={incomeAmount}
            onChange={onChangeIncome}
            placeholder="Amount"
            autocomplete="off"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            name="expenseText"
            type="text"
            value={expenseText}
            onChange={onChangeExpense}
            placeholder="Add Expense..."
            autocomplete="off"
          />
          <input
            name="expenseAmount"
            type="number"
            value={expenseAmount}
            onChange={onChangeExpense}
            placeholder="Amount..."
            autocomplete="off"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
