import { useEffect, useState } from 'react'
import { io, Socket } from "socket.io-client";
import { GameBoard } from '../components/GameBoard';
import { NavBar } from '../components/NavBar';
import { Board, ClientToServerEvents, MoveData, Position, ServerToClientEvents } from '../types';

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;  

const Home = () => {
  const [board, setBoard] = useState<Board>()
  
  useEffect(() =>{ 
    const socketInitializer = async () => {
      await fetch('/api/game')
      socket = io();
  
      socket.on('connect', () => {
        console.log('connected')
      })
  
      socket.on('updateBoard', board => {
        setBoard(board)
      })
      return
    }

    socketInitializer()
  }, [])

  
  const makeMove = (move: MoveData) => {
    socket.emit('makeMove', move)
  }

  const newGame = () => {
    socket.emit('newGame')
  }

  return (
    <>
    <NavBar/>
    <GameBoard board={board} makeMove={makeMove} newGame={newGame}/>
    </>
  )
}

export default Home;