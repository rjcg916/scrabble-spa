import React, { Component } from "react";
import { Slot } from "./Slot";
import PropTypes from "prop-types";
import RestDataSource from "./webservices/RestDataSource";

function fillSlots(tiles, setSelectedSlot) {
    tiles = tiles || [];
    const numSlots = 7;
    let slots = [];

    // handle initial, empty rack
    if (tiles.length === 0) {
        slots.push(<tr></tr>);
        return slots;
    }


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
            selectedSlot: { letter: "", loc: -1 },
            tiles: []
        }
        this.datasource = new RestDataSource(`${props.scrabbleAPIUrl}/Games/${props.game}/${props.player}/Rack `);

    }

    setSelectedSlot = (event, letter, loc) => {
        this.setState({ selectedSlot: { letter, loc } });
    }

    render() {
        return (
            <div>
                <div>Current selection {this.state.selectedSlot.letter} {this.state.selectedSlot.loc} </div>
                <table class="table table-sm table-bordered mt-1 text-dark">
                    {fillSlots(this.state.tiles, this.setSelectedSlot)}
                </table>
            </div>
        )
    }

    componentDidMount() {
        this.datasource.GetData(data => this.setState({ tiles: data }));
    }

    static defaultProps = {
        scrabbleAPIUrl: "https://localhost:44361/api"
    }

    static propTypes = {
        scrabbleAPIUrl: PropTypes.string,
        game: PropTypes.number,
        tiles: PropTypes.array,
        setSelectedSlot: PropTypes.func,
        player: PropTypes.number
    }
}

