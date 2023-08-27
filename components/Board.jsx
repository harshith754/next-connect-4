"use client"

import { isWinner } from '@/utils';
import React, { useEffect, useState } from 'react';
import { rows, cols } from '../constants/constants';
import Identifier from './Identifier';
import Slot from './Slot'; 

import { useSelector } from 'react-redux';


const Board = () => {
  const [board, setBoard] = useState([]);
  const emptyBoard = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => null)
  );

  const { player1Name, player2Name } = useSelector(state => state.playerInfo)

  console.log("First Player "+player1Name)
  console.log("Second Player "+player2Name)

  const [turn,setTurn]=useState(null);

  useEffect(() => {
    setBoard(emptyBoard);
    setTurn('red');
  }, []);

  const switchTurn=()=>{
    if(turn==='red'){
      setTurn('yellow')
    }
    else{
      setTurn('red')
    }
  }

  

  const handleClick = (colIndex)=> {

    const updatedBoard = [...board];
    for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
      if (updatedBoard[rowIndex][colIndex] === null) {
        updatedBoard[rowIndex][colIndex] = turn;
        break; 
      }   
    }
    setBoard(updatedBoard);

    setTimeout(()=>{
      if(isWinner(board,turn)){

        let name;

        if (turn === 'red') name = player1Name;
        else name = player2Name;

        alert(name+" won!!")
        clearBoard();
      }

    },100)
    switchTurn();
    
  }

  const handleHover = (colIndex)=> {
    setHoveredColumn(colIndex)
  }

  const clearBoard = ()=>{
    setBoard(emptyBoard);
    setTurn("red")
  }

  return (
    <>

    <div className='flex flex-col justify-center items-center '>
      
      <div className={`w-[359px] sm:w-[290px] p-1 rounded-md mt-2 bg-blue-400 grid-cols-${rows} justify-center`}>

        {board.map((row, rowIndex) => (
          <div className='flex flex-row justify-center' key={rowIndex}>
            {row.map((col, colIndex) => (
              <Slot 
                key={`(${rowIndex}, ${colIndex})`}
                state={col}
                handleClick={() => handleClick(colIndex)}
                handleHover={() => handleHover(colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
  
      <div className={`flex justify-center  w-[359px] sm:w-[295px] p-1 rounded-md mt-2 bg-blue-400 grid-cols-${rows} justify-center`}>
        {board.map((col,colIndex) => (
          <Identifier 
            key={`${colIndex}`}
            turn={turn}
          />
        ))}
      </div>
      
      <div className='flex justify-center mt-8'>
        <p>
          It's {turn === 'red' ? player1Name : player2Name}'s turn
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <button 
          className='bg-red-400 px-10 py-2 rounded-md text-white hover:bg-rose-500 '
          onClick={clearBoard}
        >
          Clear
        </button>
      </div>
    </div>


   
    </>
  );
};

export default Board;
