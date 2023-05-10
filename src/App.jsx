import "./app.css";
import { useState } from "react";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";

function App() {
   const [questionNumber, setQuestionNumber] = useState(1);
   const [stop, setStop] = useState(false);
   const [pause , setPause] = useState(false);

   const data = [
      {
         id: 1,
         question: "Which Web development solution is the best?",
         answers: [
            { text: "Nodesample.js", correct: false },
            { text: "Nothing.js", correct: false },
            { text: "React.js", correct: true },
            { text: "extra.js", correct: false },
         ],
      },
      {
         id: 2,
         question: "Who is the best Design developer?",
         answers: [
            { text: "Jone", correct: false },
            { text: "Mohammad!", correct: true },
            { text: "Torbjørn", correct: false },
            { text: "Markus", correct: false },
         ],
      },
      {
         id: 3,
         question:
            "Rolex is a company that specialize in what type of products ?",
         answers: [
            { text: "Phone", correct: false },
            { text: "Watches", correct: true },
            { text: "Computers", correct: false },
            { text: "Biscuite", correct: false },
         ],
      },
   ];
   const moneyPyramit = [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
   ].reverse();
   return (
      <div className="app">
         <div className="main">
            {stop ? (
               <div className="stop">{`You Earned ${
                  questionNumber == 1
                     ? "$ 0"
                     : moneyPyramit.find(
                          (item) => item.id === questionNumber - 1
                       ).amount
               }`}</div>
            ) : (
               <>
                  <div className="top">
                     <div className="timer"><Timer setStop={setStop} pause={pause} questionNumber={questionNumber}/></div>
                  </div>
                  <div className="bottom">
                     <Quiz
                        data={data}
                        setStop={setStop}
                        setQuestionNumber={setQuestionNumber}
                        questionNumber={questionNumber}
                        setPause={setPause}
                     />
                  </div>
               </>
            )}
         </div>
         <div className="pyramid">
            <ul className="moneyList">
               {moneyPyramit.map((item) => (
                  <li key={item.id}
                     className={
                        questionNumber !== item.id
                           ? "moneyListItem"
                           : "moneyListItem active"
                     }
                  >
                     <span className="moneyListItemNumber">{item.id}</span>
                     <span className="moneyListItemAmount">{item.amount}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default App;
