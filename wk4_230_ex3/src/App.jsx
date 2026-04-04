import { useState } from "react";

export default function App() {

  const [todos, setTodos] = useState([
    { id: 1, text: 'walk dog', completed: true},
    { id: 2, text: 'walk cat', completed: true},
  ]);

  function toggleCompleted(id){
    setTodos(
      todos.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
  <>
    <ul>
      { todos.map(({ id, text, completed }) => (
        <li 
        key= {id} className={completed && 'completed'}>
          
          
          {text}{' '} 
          
          <input
          
          type='checkbox'
          onChange={() => toggleCompleted(id)}
          checked={completed}
          />
        </li>
      )) }
    </ul>

    <pre>
    {JSON.stringify(todos, null, 4)}
    </pre>
  </>
  );
}