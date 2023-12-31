import React ,{useState} from "react";

function Search({ onFilter }) {  
  
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    const text = event.target.value;
    setFilterText(text);
    onFilter(text);
  };
  return(
    <div>
    <form >
    <input
        type="text"
        id="filter"
        placeholder="Search by Description"
        value={filterText}
        onChange={handleFilterChange}
      />
     
    </form>

  </div>
  )
}

export default Search;