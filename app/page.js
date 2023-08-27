"use client"

import CreateLobby from "@/components/CreateLobby"
import { useState } from "react"



const Dashboard = () => {
  const [player1Name,setPlayer1Name]=useState("")
  const [player2Name,setPlayer2Name]=useState("")

  

  return (

    <main className="w-full">
      <h1 className="text-center font-mono text-5xl mt-10">Connect-4!!</h1>
      <h3 className="text-center font-sans text-slate-400 text-sm mb-10">created by Harshith ©</h3>

      <div className="flex flex-col justify-center items-center">
        
        <h2 className="font-mono text-xl mt-2"> Enter Player 1 name:</h2>
        <input className="w-[280px] h-[30px] mt-3 text-center text-md font-mono rounded-md border-[1px] border-black" type="text" value={player1Name} onChange={(e)=>{
          setPlayer1Name(e.target.value)
        }} />

        <h2 className="font-mono text-xl mt-10"> Enter Player 2 name:</h2>
        <input className="w-[280px] h-[30px] mt-3 mb-5 text-center text-md font-mono rounded-md border-[1px] border-black" type="text" value={player2Name} onChange={(e)=>{
          setPlayer2Name(e.target.value)
        }} />
      </div>
      
      <CreateLobby 
        player1Name={player1Name}
        player2Name={player2Name}
      />
    </main>
  )
}

export default Dashboard
