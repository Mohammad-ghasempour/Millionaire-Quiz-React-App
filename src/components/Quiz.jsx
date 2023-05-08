import { useState, useEffect } from "react";
const Quiz = ({ data, setTimeOut, setQuestionNumber, questionNumber }) => {
   const [question, setQuestion] = useState(null);
   const [selectedAnswer, setSelectedAnswer] = useState(null);
   const [className, setClassName] = useState("answer");

   useEffect(() => {
      setQuestion(data[questionNumber - 1]);
   }, [questionNumber, data]);

   const handleClick = (answer) => {
      setSelectedAnswer(answer);
      setClassName("answer active");
      setTimeout(() => {
         setClassName(answer.correct ? "answer correct" : "answer wrong");
      }, 3000);
   };

   return (
      <div className="quiz">
         <div className="question">{question?.question}</div>
         <div className="answers">
            {question?.answers.map((answer) => (
               <div
                  className={selectedAnswer === answer ? className : "answer"}
                  onClick={() => handleClick(answer)}
               >
                  {answer.text}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Quiz;
