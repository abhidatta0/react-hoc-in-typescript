import { useEffect, useState } from "react";

const ResizeComponent = ({name} : {name: string})=>{
   const  [innerWidth, setInnerWidth] = useState(0);

   const handleResize = ()=>{
    setInnerWidth(window.innerWidth);
   }

   useEffect(()=>{
    window.addEventListener('resize', handleResize);

    return ()=>{
      window.removeEventListener('resize', handleResize);
    }
   },[]);   

   return (
    <div>Inner Width is {innerWidth} and name is {name}</div>
   )
}

export default ResizeComponent;