import React from "react";

export function Square(props) {
    if (props.letter) {
        return <td> <div onClick={(e) => props.setSelectedSquare(e, props.letter, props.r, props.c)}>{props.letter} </div> </td>
     } else { 
        return <td><div onClick={(e) => props.setSelectedSquare(e, props.letter, props.r, props.c)}>_</div></td>
    }

}