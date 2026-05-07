import { useState } from 'react';
import styles from './App.modules.css';

export default function App() {

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    // submit form
    function handleSubmit(e){
        e.preventDefault();
        
        if(input.trim() === ''){
            setError(true);
            return;
        } else {
        setError(false);
        
        const newTask = {id: Date.now(),
                         text: input,
                         status: false            
        };
        
        setTasks([... tasks, newTask]);

        setInput('');
    }};

    // delete tasks
    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    //  strikethrough text
    function strikeThrough(id){
        setTasks(tasks.map(task => task.id === id
            ? {...task, status: !task.status } : task));
    }

    return(

 

        <div className={styles.container}>
        
        <h1>My Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setInput(e.target.value)}  type="text" value ={input}/>
                <button >Add Task</button>
                <ul className={styles.list}>{tasks.map((task)=>
                    (<li key={task.id}
                    onClick={() => strikeThrough(task.id)}
                    style={{
                        textDecoration: task.status ? 'line-through' : 'none'
                    }}>
                    {task.text}
                    
                    <button
                    className={styles.button}
                    type='button' 
                    onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                    }}>
                    Delete</button>
                    </li>))}
                </ul>
            </form>
    
            <p>{input}</p>
            {error && <p className={styles.error}>Please input a valid To Do!</p>}
        
        
        
        </div>    
            
        )    
    
};
        
    


 