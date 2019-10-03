import React, { Component } from "react";
import { Board } from "./Board";
import { Rack } from "./Rack";

export class PlayerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTurn : false
        }
    }

    render () {
        return (
            <div>
            <Board />
            <Rack />
            </div>
        )
    }
}