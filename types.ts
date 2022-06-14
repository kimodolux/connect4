export type MoveData = {
  playerId: number,
  column: number
}

export interface ServerToClientEvents {
    updateInput: (msg: string) => void;
    updateBoard: (board: Board) => void;
  }
  
export interface ClientToServerEvents {
    changeInput: (msg: string) => void;
    makeMove: (move: MoveData) => void;
    getBoard: () => void;
    newGame: () => void;
  }
  
export interface InterServerEvents {
    ping: () => void;
  }
  
export interface SocketData {
    name: string;
    age: number;
  }

  // player 1's token, player 2's token, empty space
  export enum Position {
      P1 = "P1",
      P2 = "P2",
      E = "E"
  }
  export type Column = [Position, Position, Position, Position, Position, Position, Position, Position]
  export type Board = [Column, Column, Column, Column, Column, Column, Column, Column]