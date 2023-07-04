import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";

function App() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
   counter===3 && alert("counter-value is 3")
  }, [counter])
  
  return (
    <div style={{textAlign: "center"}}>
    {counter>0 && <Counter counter={counter}/>}
    <div>
      <button onClick={()=> setCounter(counter+1) }>Increase</button>
      <button onClick={()=> setCounter(counter-1) }>Decrease</button>
    </div>
    </div>
  );
}

export default App;
