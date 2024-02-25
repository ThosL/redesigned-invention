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
  function zero(e){
    e.preventDefault();
    setInput(0);
  }
  function zero(e){
    e.preventDefault();
    setInput(0);
  }
  function one(e){
    e.preventDefault();
    setInput(1);
  }
  function two(e){
    e.preventDefault();
    setInput(2);
  }
  function three(e){
    e.preventDefault();
    setInput(3);
  }
  function four(e){
    e.preventDefault();
    setInput(4);
  }
  function five(e){
    e.preventDefault();
    setInput(5);
  }
  function six(e){
    e.preventDefault();
    setInput(6);
  }
  function seven(e){
    e.preventDefault();
    setInput(7);
  }
  function eight(e){
    e.preventDefault();
    setInput(8);
  }
  function nine(e){
    e.preventDefault();
    setInput(9);
  }
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
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault(); 
    handleChange(null);
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
      <div className="calculator-body">
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
            <button className="btn-clr" onClick={resetInput}>Clr </button>
          }
          {
            <button className="btn-clr" onClick={resetResult}>Clr Mem </button>
          }
          {
            <button onClick={one}>1</button>
          }
          {
            <button onClick={two}>2</button>
          }
          {
            <button onClick={three}>3</button>
          }
          {
            <button onClick={four}>4</button>
          }
          {
            <button onClick={five}>5</button>
          }
          {
            <button onClick={six}>6</button>
          }
          {
            <button onClick={seven}>7</button>
          }
          {
            <button onClick={eight}>8</button>
          }
          {
            <button onClick={nine}>9</button>
          }
          {
            <button onClick={zero}>0</button>
          }

        </form> 
      </div>

    </div> 
  ); 
} 
 
export default App; 
