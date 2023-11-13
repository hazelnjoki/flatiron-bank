import React from "react";
import AddTransactionForm from "./addTransactionsForm";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AddTransactionForm/>
    </div>
  );
}

export default App;