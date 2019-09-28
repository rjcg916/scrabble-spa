import React, { Component } from "react";
import { Square } from "./Square";


function compareEntries(a, b) {

    const entryA = a.i;
    const entryB = b.i;

    let comparison = 0;
    if (entryA > entryB) {
        comparison = 1;
    } else if (entryA < entryB) {
        comparison = -1;
    }
    return comparison;
}


function displayBoard(board, setSelectedSquare) {
    let rows = [];

    // sort rows 
    let boardRows = [...board].sort(compareEntries);

    // use first row col names as column labels

    let colLabels = boardRows[0].squares.map((col) => <th>{col.colName}</th>);

    
    rows.push(<tr><th></th> {colLabels}<th></th></tr>);

    for (let r = 0; r < boardRows.length; r++) {

        let row = [];

        // row label on left
        row.push(<th>{boardRows[r].rowName}</th>);

        // sort columns
        let rowCols = [...boardRows[r].squares].sort(compareEntries);

        for (let c = 0; c < rowCols.length; c++) {
            row.push(<Square setSelectedSquare={setSelectedSquare} type={rowCols[c].type} r={r} c={c} />);
        }

        // row label on right
        row.push(<th>{boardRows[r].rowName}</th>);

        rows.push(<tr>{row}</tr>);
    }

    rows.push(<tr><th></th> {colLabels}<th></th></tr>);    
    return rows;
}

export class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSquare: { type: 0, letter: "", row: -1, col: -1 },
            board: [
                { i: 0, rowName: "1", squares: [{ i: 0, colName: "A", type: 1 }, { i: 1, colName: "B", type: 1 }] },
                { i: 1, rowName: "2", squares: [{ i: 0, colName: "A", type: 1 }, { i: 1, colName: "B", type: 1 }] }
            ]
        }
   }

    setSelectedSquare = (event, type, letter, row, col) => {
        this.setState({ selectedSquare: { type, letter, row, col } });
    }

    render(props) {
        return <div>
            <div>Current selection {this.state.selectedSquare.letter} @ {this.state.selectedSquare.row}, {this.state.selectedSquare.col} </div>
            <table class="table table-sm table-bordered mt-1 text-dark">
                {displayBoard(this.state.board, this.setSelectedSquare)}
            </table>
        </div>
    }

}