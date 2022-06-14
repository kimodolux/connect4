import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Board, MoveData, Position } from "../types";

const mapPositionToColor = (postion: Position) => {
    switch(postion){
        case Position.P1:
            return "red";
            
        case Position.P2:
            return "blue"
            
        case Position.E:
            return "white"       
    }
}

export const GameBoard = (props: {board?: Board, makeMove: (move: MoveData) => void, newGame: () => void}) => {
    let {board, makeMove, newGame} = props
    return (
        <>
        <Grid container justifyContent="center" alignItems="center" padding="2em" style={{backgroundColor: "black"}}>
            {board?.map((column, columnIndex) => {
                return (
                    <Grid key={column.join().concat(`${columnIndex}`)} item xs={1}>
                        {column.map((position, rowIndex) => {
                            return (
                                <div key={position.concat(`${columnIndex}`).concat(`${rowIndex}`)}>
                                    <span style={{backgroundColor: mapPositionToColor(position), height: "5em", width: "5em", borderRadius: "50%", display: "inline-block"}}></span>
                                </div>
                            )
                        })
                        }
                    </Grid>
                )}
            )}
        </Grid>     
        <Button onClick={() => makeMove({playerId: 1, column: 0})}>
                 Red 1       
        </Button>
        <Button onClick={() => makeMove({playerId: 1, column: 1})}>
        Red 2       
        </Button>
        <Button onClick={() => makeMove({playerId: 1, column: 2})}>
        Red 3       
        </Button>
        <Button onClick={() => makeMove({playerId: 1, column: 3})}>
        Red 4       
        </Button>
        <Button onClick={() => makeMove({playerId: 1, column: 4})}>
        Red 5      
        </Button>
        <Button onClick={() => makeMove({playerId: 1, column: 5})}>
        Red 6       
        </Button>
        <Button onClick={() => makeMove({playerId: 1, column: 6})}>
        Red 7       
        </Button>
        <Button onClick={() => makeMove({playerId: 1, column: 7})}>
        Red 8      
        </Button>
        <br/>
        <br/>
        <Button onClick={() => makeMove({playerId: 2, column: 0})}>
                 Blue 1       
        </Button>
        <Button onClick={() => makeMove({playerId: 2, column: 1})}>
        Blue 2       
        </Button>
        <Button onClick={() => makeMove({playerId: 2, column: 2})}>
        Blue 3       
        </Button>
        <Button onClick={() => makeMove({playerId: 2, column: 3})}>
        Blue 4       
        </Button>
        <Button onClick={() => makeMove({playerId: 2, column: 4})}>
        Blue 5      
        </Button>
        <Button onClick={() => makeMove({playerId: 2, column: 5})}>
        Blue 6       
        </Button>
        <Button onClick={() => makeMove({playerId: 2, column: 6})}>
        Blue 7       
        </Button>
        <Button onClick={() => makeMove({playerId: 2, column: 7})}>
        Blue 8      
        </Button>
        <Button onClick={newGame}>
            Reset game
        </Button>
        </>
    )
}