import React from "react";
import AddTransactionForm from "./addTransactionsForm";
function transaction(){

const mydata= transactions.map((transaction) => {
  return (
   <> <AddTransactionForm/>
    <tr>
      <td>{ transaction.date}</td>
      <td>{ transaction.description}</td>
      <td>{ transaction.category}</td>
      <td>{ transaction.amount}</td>
    </tr></>
  );
})}

export default mydata;