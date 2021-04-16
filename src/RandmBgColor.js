import React from 'react';
function useRandonColorPIcker(){
const color=["red","pink","orange","blue","green","yellow"];
const randomColor=color[Math.floor(Math.random()*5)]
return {randomColor}
}
export default useRandonColorPIcker;