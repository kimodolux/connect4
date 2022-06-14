import { Board, Position } from "./types";

export const generateInitalBoard = () => {
    let initalBoard: Board = [
        [Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E],
        [Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E],
        [Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E],
        [Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E],
        [Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E],
        [Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E],
        [Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E],
        [Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E, Position.E],
      ]
      return initalBoard;
}

export const makeMove = (board: Board, player: number, column: number) => {
    if(board[column][0] != Position.E){
      console.log("Column full")
      return board
    }
    for(let i = 0; i<8; i++){
      if(board[column][i] != Position.E){
          board[column][i-1] = player === 1 ? Position.P1 : Position.P2
          return board
        }
      }
      board[column][7] = player === 1 ? Position.P1 : Position.P2
      return board
  }