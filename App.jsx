import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0);

  const increament = () => {
    setNumber(number + 1);
  };
  const decreament = () => {
    if (number>0)
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };

  return (
    <div class="container">
    <div class="content">

    <h1 class="h">My First Project</h1>
      <h1 >Counting </h1>
      <h1 class="u">{number}</h1>
      <button class = "click" onClick={increament}>Increament</button>
      
      <button class = "click" onClick={decreament}>decreament</button>
      <button class = "click" onClick={reset}>reset</button>
    </div>
    </div>
  );
};

export default App;
