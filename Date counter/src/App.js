import { useEffect, useState } from "react";

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep((s) => step - 1);
//   }
//   function handleNext() {
//     if (step < 3) setStep((s) => step + 1);
//   }
//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>
//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}

        {/* diffent format */}
        <input
          type="range"
          min="0"
          max="20"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>Count:{" "}
        {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
