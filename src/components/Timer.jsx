import { useState, useEffect } from "react";

const Timer = ({ questionNumber, setStop }) => {
   const [timer, setTimer] = useState(20);
   
   useEffect(() => {
    
      if (timer === 0) return setStop(true);
      if (timer !== 14) {

          const interval = setInterval(() => {
              setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
   }, [timer, setStop]);

   useEffect(() => {
      setTimer(20);
   }, [questionNumber]);

   return timer;
};

export default Timer;
