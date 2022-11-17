import logo from './logo.svg';
import './App.scss';
import Jobber from './Jobber';
import { useState } from 'react';


function App() {
const [isOpen, setOpen] = useState(false);


  return (
    <div className="App">
<button onClick={()=>setOpen(!isOpen)}>Click to open Jobber form!</button>


<div className={isOpen ? "JobberOpen" : "JobberClosed"}><div className='Inner'>
 <Jobber/>
 </div>
    </div></div>
  );
}

export default App;
