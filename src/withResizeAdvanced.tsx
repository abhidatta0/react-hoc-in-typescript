import { useEffect, useState, FC } from "react";

type Params =  {
  bumped: number;
}
const withResizeAdvanced = (params: Params)=> (Component: FC<any> )=> (props: any)=> {
    console.log(params);
    const  [innerWidth, setInnerWidth] = useState(0);

    const handleResize = ()=>{
     setInnerWidth(window.innerWidth+params.bumped);
    }
 
    useEffect(()=>{
     window.addEventListener('resize', handleResize);
 
     return ()=>{
       window.addEventListener('resize', handleResize);
     }
    },[]); 

    return <Component {...props} windowInnerWidth={innerWidth} />
}

export default withResizeAdvanced;