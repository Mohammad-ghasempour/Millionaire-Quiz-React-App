import { useRef } from "react";
import "../app.css";

export const Start = ({setUsername}) => {
   const inputRef = useRef();

   const handleClick = ()=>{
    setUsername(inputRef.current.value);
   }

   return (
      <div className="start">
         <input
            placeholder="Enter your name"
            className="startInput"
            ref={inputRef}
         />
         <button className="startButton" onClick={handleClick}>Start</button>
      </div>
   );
};

export default Start;
