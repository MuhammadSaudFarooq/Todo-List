import { useState } from 'react';
import ItemList from './ItemList';
import './App.css';

function App() {
  
  const [inputItem, setInputItem] = useState('');
  const [itemArr, setItemArr] = useState([]);
  const getTodoItems = (e) => {
    // set new value
    setInputItem(e.target.value);
  }
  const addTodoItems = () => {
    // Create list array
    setItemArr((prevItems) => {
      return [...prevItems, inputItem];
    });

    // Empty input field after adding value
    setInputItem('');
  }

  const delItem = (id) => {
    setItemArr((prevItems) => {
      return prevItems.filter((itemArr, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div className="container-fluid todo-container text-center col-6 mt-4">
      <div className='todo-heading'>
        <h1>Todo List</h1>
      </div>
      <div className="todo-inputs input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter item name" value={inputItem} onChange={getTodoItems} />
        <button className="btn btn-primary" type="button" onClick={addTodoItems}><i className="fa-solid fa-plus"></i></button>
      </div>
      <ul className='todo-result list-group'>
        {
          itemArr.map((itemVal, index) => {
            return <ItemList key={index} id={index} text={itemVal} onSelect={delItem} />
          })
        }
      </ul>
    </div>
  );
}

export default App;
