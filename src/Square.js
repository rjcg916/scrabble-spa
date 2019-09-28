import React from "react";

export function Square(props) {
    if (props.tile ) {
        return <td> <div onClick={(e) => props.setSelectedSquare(e, props.type, props.tile.letter, props.r, props.c)}>{props.tile.letter} {props.type}</div> </td>
     } else { 
        return <td><div onClick={(e) => props.setSelectedSquare(e, props.type, "", props.r, props.c)}>_{props.type}</div></td>
    }
}