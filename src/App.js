
import React from 'react';
import useRandonColorPIcker from './RandmBgColor';
import useCounter from './useCounter';
let App=()=>{
  const{increment,decrement,count}=useCounter();
  const {randomColor}=useRandonColorPIcker()
  console.log(randomColor);
   return(
     <div style={{background:randomColor }}>
       <button onClick={()=>{decrement()}}>decrement</button>
       <h1>{count}</h1>
      <button  onClick={()=>{increment()}}>increment</button>
     
     </div>
  
   )
 }

export default App;