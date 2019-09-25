import React from "react";

export function Slot(props) {
    if (props.letter) {
        return <td> <div onClick={(e) => props.setSelectedSlot(e, props.letter, props.loc)}>{props.letter} ({props.value})</div> </td>
     } else { 
        return <td><div onClick={(e) => props.setSelectedSlot(e, props.letter, props.loc)}>_</div></td>
    }

}