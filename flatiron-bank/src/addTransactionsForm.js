import React, { useState, useEffect } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
//   function handleSubmit(e) {
    useEffect(() => { fetch('http://localhost::3002/transactions')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
    .catch(error =>{
        console.error('Error fetching data:' , error);
    })
},[]);
// },[]);
  
        
  return (
    <div className="ui segment">
      <form  className="ui form">
        <div className="inline fields">
          <input required value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
          <input required value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          <input required value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input required value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;