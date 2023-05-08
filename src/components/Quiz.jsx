import { useState, useEffect } from "react";
const Quiz = ({ data, setStop, setQuestionNumber, questionNumber }) => {
   const [question, setQuestion] = useState(null);
   const [selectedAnswer, setSelectedAnswer] = useState(null);
   const [className, setClassName] = useState("answer");

   useEffect(() => {
      setQuestion(data[questionNumber - 1]);
   }, [questionNumber, data]);

   const delay = (duration, callback) => {
      setTimeout(() => {
         callback();
      }, duration);
   };

   const handleClick = (answer) => {
      setSelectedAnswer(answer);
      setClassName("answer active");
      delay(3000, () => {
         setClassName(answer.correct ? "answer correct" : "answer wrong");
      });
      delay(7000 , ()=>{
         if (answer.correct){

            setQuestionNumber(prev=> prev+1);
         } else{
            setStop(true);
         }
      })
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
