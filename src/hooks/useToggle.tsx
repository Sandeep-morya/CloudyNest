import React, { useRef, useState } from 'react'



const useToggle=(items:string[])=>{
    let {current:index} = useRef(0);
    const [item,setItem] = useState(items[0])
    function toggle(){
        if(index===items.length){
            index=0
        }else{
            setItem(item[index])
        }

    }
  return {item,toggle}
}

export default useToggle