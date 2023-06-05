
import './App.css';
import React, {useState} from "react";
function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <div className="App">
      <h1 className='count-head'>Counter App</h1>
       <h2>{count}</h2>
       <button onClick={()=> setCount(count + 1)} className='plus'>Increment</button>
       <button onClick={()=> setCount(count - 1)} className='minus'>Decrement</button>
       <button onClick={()=> setCount(0)} className='reset'>Reset</button>
    </div>
    </>
   
  );
}

export default App;
