"use client"

import { useEffect, useState } from "react";

const Identifier = (turn,) => {

  const [bgColorClass,setBgColorClass] = useState('bg-gray-300');


  if (turn === 'red') {
    setBgColorClass('bg-red-500');

  } else if (turn === 'yellow') {
    setBgColorClass('bg-yellow-300');
  }
 

 

  return (
    
    <div className="w-[50px] h-[20px] sm:w-[40px] sm:h-[15px]  flex justify-center items-center"
    
    >
      <div 
        className={`w-[40px] h-[10px] sm:w-[35px] sm:h-[8px] rounded-xl ${bgColorClass}`}
            
      >
        
      </div>
    </div>
    
  )
}

export default Identifier
