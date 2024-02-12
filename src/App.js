import React, { useState } from "react";
import './App.css';

function App() {
  const daysPerMonth = 30.416;
  const daysPerQtr = 91.248;
  const daysPerYear = 365;
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [duration, setDuration] = useState("");

// Calculation Formula's //
  const [monthlyTotal, setMonthlyTotal] = useState(amount * ((rate/100)/365) * daysPerMonth * (duration * 12));
  const [quarterlyTotal, setQuarterlyTotal] = useState(amount * ((rate/100)/365) * daysPerQtr * (duration * 4));
  const [annualTotal, setAnnualTotal] = useState(amount * ((rate/100)/365) * daysPerYear * duration);
  const [total, setTotal] = useState(amount * (rate/100) * duration);

  function totalMonthly (event) {
    setMonthlyTotal(Math.trunc(amount * ((rate/100)/365) * daysPerMonth * (duration * 12)));
    event.preventDefault()
  }
  function totalQuarterly (event) {
    setQuarterlyTotal(Math.trunc(amount * ((rate/100)/365) * daysPerQtr * (duration * 4)));
    event.preventDefault()
  }
  function totalAnnually (event) {
    setAnnualTotal(Math.trunc(amount * ((rate/100)/365) * daysPerYear * duration));
    event.preventDefault()
  }
  function totalMaturity (event) {
    setTotal(Math.trunc(amount * (rate/100) * duration));
    event.preventDefault()
  }

return (
  <div className = "container">
  <form>
  <h1>Welcome - Let's get calculating shall we? 😊</h1>

  <div className = "App">
    <p>Please enter your starting amount ($)</p>
      <input type="number" value={amount} onChange =  {e => setAmount (+ e.target.value)} />
    <p>Please enter your interest rate (%)</p>
      <input type="number" value={rate} onChange = {e => setRate (+ e.target.value)} />
    <p>Please enter the duration of your term deposit (years)</p>
      <input type="number" value={duration} onChange = {e => setDuration (+ e.target.value)} />
  </div>

  <div className = "buttons">
    <div> 
      <button id = "button" type = "button" onClick = {totalMonthly} >Monthly</button>  
    </div>
    <div> 
      <button id = "button" type = "button" onClick = {totalQuarterly} >Quarterly</button>    
    </div>
    <div> 
      <button id = "button" type = "button" onClick = {totalAnnually} >Annually</button>    
    </div>
    <div> 
      <button id = "button" type = "button" onClick = {totalMaturity} >Maturity</button>    
    </div>
  </div>

  <div>
    <h2>Your Total Interest Earned ($)</h2>  
      <h3>${monthlyTotal+quarterlyTotal+annualTotal+total}</h3>
  </div>

  <div>
    <h2>Your Final Balance:</h2>
    <h3>${amount+monthlyTotal+quarterlyTotal+annualTotal+total}</h3>
  </div>

  </form>
  </div>
  );
}

export default App;
