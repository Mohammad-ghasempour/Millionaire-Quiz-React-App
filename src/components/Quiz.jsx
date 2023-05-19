import { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../assets/src_sounds_play.mp3";
import correct from "../assets/src_sounds_correct.mp3";
import wrong from "../assets/src_sounds_wrong.mp3";

const Quiz = ({
   data,
   setStop,
   setQuestionNumber,
   questionNumber,
   setPause,
}) => {
   const [question, setQuestion] = useState(null);
   const [selectedAnswer, setSelectedAnswer] = useState(null);
   const [className, setClassName] = useState("answer");
   const [letsPlay] = useSound(play);
   const [correctAnswer] = useSound(correct);
   const [wrongAnswer] = useSound(wrong);

   useEffect(() => {
      letsPlay();
   }, [letsPlay]);

   useEffect(() => {
      setQuestion(data[questionNumber - 1]);
   }, [questionNumber, data]);

   // useEffect(() => {
   //    if (className !== "answer"){
   //        // setPause(true);
   //    }
   // }, [className]);

   const delay = (duration, callback) => {
      setTimeout(() => {
         callback();
      }, duration);
   };
   const handleClick = (answer) => {
      // setPause(true);
      setSelectedAnswer(answer);
      setClassName("answer active");
      delay(3000, () => {
         setClassName(answer.correct ? "answer correct" : "answer wrong");
      });
      delay(5000, () => {
         if (answer.correct) {
            correctAnswer();
            delay(8000,()=>{
               setQuestionNumber((prev) => prev + 1);
               setSelectedAnswer(null);
            })
         } else {
            wrongAnswer();
            delay(5000,()=>{
               setStop(true);
            })
         }
      });
   };

   return (
      <div className="quiz">
         <div className="question">{question?.question}</div>
         <div className="answers">
            {question?.answers.map((answer, index) => (
               <div
                  key={index}
                  onClick={() => handleClick(answer)}
                  className={selectedAnswer == answer ? className : "answer"}
               >
                  {answer.text}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Quiz;
