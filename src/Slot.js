import React from "react";
import PropTypes from "prop-types";

export function Slot(props) {
//    if (props.letter) {
        return <td> <div onClick={(e) => props.setSelectedSlot(e, props.letter, props.loc)}>{props.letter} ({props.value})</div> </td>
//     } else { 
//        return <td><div onClick={(e) => props.setSelectedSlot(e, props.letter, props.loc)}>_</div></td>
//    }

}

Slot.defaultProps = {
    letter : "_"
}

Slot.propTypes = {
    setSelectedSlot : PropTypes.func,
    letter : PropTypes.string,
    value : PropTypes.number,
    loc: PropTypes.number
}