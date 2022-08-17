import React, { useEffect, useState, FC } from "react";

const withResize = (Component: FC<any> )=> (props: any)=> {
    const  [innerWidth, setInnerWidth] = useState(0);

    const handleResize = ()=>{
     setInnerWidth(window.innerWidth);
    }
 
    useEffect(()=>{
     window.addEventListener('resize', handleResize);
 
     return ()=>{
       window.addEventListener('resize', handleResize);
     }
    },[]); 

    return <Component {...props} windowInnerWidth={innerWidth} />
}

export default withResize;