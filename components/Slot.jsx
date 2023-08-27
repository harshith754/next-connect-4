"use client"
const Slot = ({ state , handleClick  }) => {

  let bgColorClass = '';

  if (state === 'red') {
    bgColorClass = 'bg-red-500';
  } else if (state === 'yellow') {
    bgColorClass = 'bg-yellow-300';
  } else {
    bgColorClass = 'bg-gray-300';
  }

  return (

  <div className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] flex justify-center items-center"
    onClick={handleClick} 
  >
    <div 
      className={`w-[40px] h-[40px] sm:w-[35px] sm:h-[35px] rounded-full ${bgColorClass}`}
          
    >
    </div>
  </div>

    
  )
}

export default Slot
