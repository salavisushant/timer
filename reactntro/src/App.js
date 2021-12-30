import {Timer} from './components/Timer.jsx'
import './App.css';
import {useState} from 'react';


function App() {

  let [count,setCount] = useState(false);

  return(
    <div className="App">
      {count&&<Timer/>}
    <br />
      <button onClick={()=>setCount(!count)}>Show/Hide</button>

    </div>
  )
}

export default App;
