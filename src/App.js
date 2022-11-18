import logo from './logo.svg';
import './App.scss';
import Jobber from './Jobber';
import { useState } from 'react';


function App() {
const [isOpen, setOpen] = useState(false);


  return (
    <div className="App">
<div className='Button' onClick={()=>setOpen(!isOpen)}>Click to open Jobber form!</div>
      <div className='Overlay'></div>



<div className={isOpen ? "JobberOpen" : "JobberClosed"}><div className='Inner'>
 <Jobber/>
 </div>
 
    </div>   </div>
  );
}

export default App;
