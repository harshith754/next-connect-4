"use client"
import {useRouter} from 'next/navigation'

import { useDispatch } from 'react-redux';

import { setPlayerNames } from '../redux/playerInfo/playerInfoSlice';


const CreateLobby = ({player1Name, player2Name}) => {
  
  const router = useRouter();
  const dispatch = useDispatch();

  const handleEnter=()=>{

    dispatch(setPlayerNames({ player1Name, player2Name }));
    router.push('/lobby')
  }

  return (
    <div className="flex justify-center">
        <button 
          className='bg-blue-500 mt-5 px-10 py-2 rounded-md text-white hover:bg-blue-600 '
          onClick={handleEnter}
        >
          Enter
        </button>
      </div>
  )
}

export default CreateLobby
