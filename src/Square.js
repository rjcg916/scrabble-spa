import React from "react";
import PropTypes from "prop-types";


export function Square(props) {
  //  if (props.tile ) {
        return <td> <div onClick={(e) => props.setSelectedSquare(e, props.type, props.tile.letter, props.r, props.c)}>{props.tile.letter}</div> </td>
   //  } else { 
    //    return <td><div onClick={(e) => props.setSelectedSquare(e, props.type, "", props.r, props.c)}>&nbsp;</div></td>
   // }
}

Square.defaultProps = {
    tile : {letter: "", value : -1}
}

Square.propTypes = {
    setSelectedSquare : PropTypes.func,
    tile : PropTypes.object,
    type: PropTypes.number,
    r : PropTypes.number,
    c : PropTypes.number

}