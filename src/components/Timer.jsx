import { useState, useEffect } from "react";

const Timer = ({ questionNumber, setStop , pause }) => {
   const [timer, setTimer] = useState(60);
   
   useEffect(() => {
    
      if (timer === 0) return setStop(true);
     // if (!pause) {

          const interval = setInterval(() => {
              setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
      //  }
   }, [timer, setStop , pause]);

   useEffect(() => {
      setTimer(60);
   }, [questionNumber]);
   

   return timer;
};

export default Timer;
