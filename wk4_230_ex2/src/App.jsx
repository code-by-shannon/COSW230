import { useState } from 'react';
import './styles.css';

export default function App() {

  const [enteredColor, setEnteredColor] = useState('');
  
  function updateTextColorHandler(event) {
    setEnteredColor(event.target.value);
  }

  return (
    <>
    
      <input type="text" onChange={updateTextColorHandler} />
      <p style={ {color: enteredColor} }>
        This text color changes dynamically
      </p>
    
    </>
    
  );
}