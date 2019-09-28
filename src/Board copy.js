import React, { Component } from "react";
import {Square} from "./Square";

function displayColNames(names) {
    names = names || [];
    let cols = [];
    cols.push(<th>_</th>);
    for (let i = 0; i < names.length; i++) {
        cols.push(<th>{names[i]}</th>);
    }
    return <tr> {cols} </tr>;

}


function displaySquares(squares, setSelectedSquare) {

    let rows = [];

    for (let r = 0; r < squares.length; r++) {

        let row = [];
        row.push(<th>{r}</th>);
        for (let c = 0; c < squares[r].length; c++) {
            let square = squares[r][c];
            row.push(<td><div> <Square setSelectedSquare={setSelectedSquare} type={square.type} tile={square.tile} r={r} c={c} /></div></td>)
        }
        row.push(<th>{r}</th>);

        rows.push(<tr>{row}</tr>);
    }


    return rows;
}

export class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSquare : {type: 0, letter: "", row: -1, col: -1}
        }
    }

    setSelectedSquare = (event, type, letter, row, col) => {
        this.setState({selectedSquare : {type, letter, row, col}});
    } 

    render(props) {
        return <div>
            <div>Current selection {this.state.selectedSquare.letter} @ {this.state.selectedSquare.row}, {this.state.selectedSquare.col} </div>
            <table class="table table-sm table-bordered mt-1 text-dark">
                {displayColNames(this.props.colNames)}
                {displaySquares(this.props.squares, this.setSelectedSquare)}
                {displayColNames(this.props.colNames)}
            </table>
        </div>
    }
}