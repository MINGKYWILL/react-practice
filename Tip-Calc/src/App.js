import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div>
      <TipCalc />
    </div>
  );
}

function TipCalc() {
  const [bill, setBill] = useState("");
  const [service1, setService1] = useState("");
  const [service2, setService2] = useState("");

  const tip = (bill * (service1 + service2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setService1("");
    setService2("");
  }
  return (
    <div className="container">
      <h2 className="title">💸How Much To Tip💸</h2>
      <Bill bill={bill} onSetBill={setBill} />
      <Service service={service1} onSetService={setService1}>
        <label>How did you like the service?</label>
      </Service>
      <Service service={service2} onSetService={setService2}>
        <label>How did your friends like the service?</label>
      </Service>
      {bill > 0 && <Total bill={bill} onSetBill={setBill} tip={tip} />}
      <Reset onReset={handleReset} />
    </div>
  );
}
function Bill({ bill, onSetBill }) {
  return (
    <div className="question">
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
function Service({ service, onSetService, children }) {
  return (
    <div className="question">
      {children}
      <select
        value={service}
        onChange={(e) => onSetService(Number(e.target.value))}
      >
        <option value="">Please select one</option>
        <option value="0">Aweful (0%)</option>
        <option value="10"> Okay (10%)</option>
        <option value="15">Good (15%)</option>
        <option value="18">Great (18%)</option>
        <option value="20">Awesome (20%)</option>
      </select>
    </div>
  );
}
function Total({ bill, tip }) {
  return (
    <div className="total">
      <h3>You pay in total $ {bill + tip}</h3>
      <h4>
        (${bill} bill + ${tip} tip)
      </h4>
    </div>
  );
}
function Reset({ onReset }) {
  return (
    <button className="btn" onClick={onReset}>
      Reset
    </button>
  );
}
