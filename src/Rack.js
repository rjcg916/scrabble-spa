import React, { Component } from "react";
import { Slot } from "./Slot";


function fillSlots(tiles, setSelectedSlot) {
    tiles = tiles || [];
    const numSlots = 7;
    let slots = [];

    if (tiles.length > numSlots) {
        return <div> Number of tiles ({tiles.length}) exceeds Rack capacity of ({numSlots}) </div>
    }

    for (let i = 0; i < tiles.length; i++) {
        slots.push(<Slot setSelectedSlot={setSelectedSlot} loc={i} letter={tiles[i].letter} value={tiles[i].value} />);
    }
    for (let i = tiles.length; i < numSlots; i++) {
        slots.push(<Slot setSelectedSlot={setSelectedSlot} loc={i} letter="" value={-1} />);
    }
    return <tr> {slots} </tr>;
}


export class Rack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSlot : {letter: "", loc: -1}
        }
    }

    setSelectedSlot = (event, letter, loc) => {
        this.setState({selectedSlot : {letter, loc}});
    }

    render() {
        return (
            <div>
                <div>This is a rack</div>
                <div>Current selection {this.state.selectedSlot.letter} {this.state.selectedSlot.loc} </div>
                <table class="table table-sm table-bordered mt-1 text-dark">
                    {fillSlots(this.props.tiles, this.setSelectedSlot )}
                </table>
            </div>
        )
    }
}