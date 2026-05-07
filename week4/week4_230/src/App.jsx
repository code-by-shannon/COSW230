import { use, useState } from "react"


export default function App() {
  //track and update current input value
  const [task, setTask] = useState('');
  // track and update current todos array elements
  const [todos, setTodos] = useState(
    [
      'go to store',
      'take a walk',
      'buy groceries'
    ]
  );
  
  const handleChange = (e) => {
    setTask(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    if (!task) return;

    setTodos([...todos, task]);
    setTask('');
  }

  
  return(
    <>
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={task} onChange={handleChange}/>
        <button>Add Task</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>
            <p>{todo}</p>
          </li>
        ))}
      </ul>
    
    </>
  )
    
}

