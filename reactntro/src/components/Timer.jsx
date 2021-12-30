import {useEffect,useState} from "react";

export const Timer = () => {
    const [counter,setCounter]=useState(0);
  
    useEffect(() =>{
      const id =setInterval(() =>{
        setCounter((p)=>{
          if(p===10){
            clearTimeout(id)
            return 0
          } 
          return p+1;
        })
        
      },1000);
      return () => {
          clearInterval(id)
      }
    },[])
  
  
  
    return (
        <>
        <h1>count:{counter}</h1>
        </>
        
    );
}