import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [input, setInput] = useState(0); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));   
  };
 
  function times(e) { 
     // Add the code for the plus function 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));   
  }; 
 
  function divide(e) { 
     // Add the code for the divide function 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));  
  };
 function equals(e){
    e.preventDefault();
    inputRef.value = resultRef.value; 
  }
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault(); 
  }; 
 
  function resetResult(e) { 
    	// Add the code for the resetResult function 
    e.preventDefault(); 
    setResult(0);
  }; 
 
  function handleChange(e){
    const handler = (e) ? e.target.value : null;
    setInput(handler);
  }

  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
       <form> 
         
        <p className="result" ref={resultRef}> 
          {result} 
        </p> 
         <input
          pattern="[0-9]" 
          ref={inputRef} 
          onChange={handleChange} 
          type="number" 
          placeholder="Type a number" 
          value={input==null? '' : input}
        /> 

        {
          <button onClick={plus} aria-valuetext="Add">+</button>
        }
         
        {
          <button onClick={minus}>-</button>
        }
        {
          <button onClick={times}>×</button>
        }
        {
          <button onClick={divide}>÷</button>
        }
        {
          <button onClick={equals}>=</button>
        }
        {
          <button onClick={resetInput}>Clear Mem </button>
        }
        {
          <button onClick={resetResult}>Clear</button>
        }
      </form> 
    </div> 
  ); 
} 
 
export default App; 
