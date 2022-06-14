import { NextApiRequest, NextApiResponse } from 'next'
import { Server } from 'socket.io'
import { generateInitalBoard, makeMove } from "../../../helper";
import { Board, MoveData, Position } from '../../../types';

const SocketHandler = (
    req: any,
    res: any
    ) => {
  let board: Board;
  let users: string[] = []
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    board = generateInitalBoard()

    io.on('connection', socket => {
    //   users.push(socket.id)
      //send board to people joining room
      socket.emit('updateBoard', board)
    //   socket.on('disconnect', () => {
    //       users.filter((user) => user != socket.id)
    //   })
    socket.on('newGame', () => {
        board=generateInitalBoard()
        socket.broadcast.emit('updateBoard', board)
      })

      socket.on('makeMove', (move: MoveData) => {
        board=makeMove(board, move.playerId, move.column)
        socket.broadcast.emit('updateBoard', board)
      })
            
      socket.on('getBoard', () => {
        socket.emit('updateBoard', board)
      })
    })
  }
  res.status(200).json({ name: 'John Doe' })
  res.end()
}

export default SocketHandler