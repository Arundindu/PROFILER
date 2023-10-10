import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './../Shared/Utils/Loader/Loader'
export default function App() {
  let [expandMenu, setExpandMenu] = useState(0);
  const increment = (event: string,inc:any) =>{
    console.log(event)
    setExpandMenu(inc-1)
    // event?.preventDefault();
  }
  return (
    <div className="App">
      <Loader />
      <button className='btn btn-danger' onClick={e => { e.stopPropagation(); increment('test',expandMenu); }}>Button</button>
      <p>{expandMenu}</p>
    </div>
  );
}

// export default App;
