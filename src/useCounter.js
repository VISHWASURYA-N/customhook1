import React,{useState} from 'react';
function useCounter(){
    const [count,setCount]=useState(0)
    function increment(){
        setCount(prv=>prv+1)
    }
    function decrement(){
        setCount(prv=>prv-1)
    }
    return {increment,decrement,count}
}
export default useCounter