import { useCallback, useState } from 'react';

const SortableList = () => {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
console.log(list)
  const sortList = useCallback((type) => {
    setList(prev => {
        const listItems = prev.map(item => item)
        console.log(listItems)
        if (type === "asc") {
            listItems.sort((a, b) => a.localeCompare(b))
        } else if (type === "desc") {
          listItems.sort((a, b) => b.localeCompare(a))
        }
        return listItems
    })
  }, [])

  function addItem() {
    setList(prev => [...prev, input])
    setInput("")
  }
 
  return (
    <div className="sortable-list-container">
      <h3>Sortable List</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>

      <div>
        <button onClick={() => sortList("asc")}>Sort Ascending</button>
        <button onClick={() => sortList("desc")}>Sort Descending</button>
      </div>
      <div className="list-items">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
     </div>
    </div>
  );
};

export default SortableList;
