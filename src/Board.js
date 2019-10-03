import React, { Component } from "react";
import { Square } from "./Square";
import { RestDataSource } from './webservices/RestDataSource';
import PropTypes from "prop-types";


function compareEntries(a, b) {
    const entryArow = a.row;
    const entryBrow = b.row;
    const entryAcol = a.col;
    const entryBcol = b.col;
    let comparison = 0;
    if (entryArow > entryBrow) {
        comparison = 1;
    } else if (entryArow < entryBrow) {
        comparison = -1;
    } else {
        if (entryAcol > entryBcol) {
            comparison = 1
        } else if (entryAcol < entryBcol) {
            comparison = -1
        }
    }
    return comparison;
}

function displayBoard(board, setSelectedSquare) {
    let rows = [];

    // handle initial, empty board
    if (board.length === 0) {
        rows.push(<tr></tr>);
        return rows;
    }
    let boardCells = [...board].sort(compareEntries);

    // use first row col names as column labels
    let colLabels = boardCells.filter(cell => cell.row === 0).map(col => <th> {col.colName} </th>);

    // put col labels at top
    rows.push(<tr><th></th> {colLabels}<th></th></tr>);


    // loop through all board cells

    //  build output row by row
    let currentRow = [];
    for (let c = 0; c < boardCells.length; c++) {

        // if before first col, start new row
        if (boardCells[c].col === 0) {
            currentRow = [];
        }

        currentRow.push(<Square setSelectedSquare={setSelectedSquare}
            tile={boardCells[c].square.tile}
            r={boardCells[c].rowName} c={boardCells[c].colName} />);

        // if after last col, end current row                    
        if (boardCells[c].col === colLabels.length - 1) {
            rows.push(<tr><th>{boardCells[c].rowName}</th>{currentRow}<th>{boardCells[c].rowName}</th></tr>);
        }

    }

    // put col labels at bottom
    rows.push(<tr><th></th>{colLabels}<th></th></tr>);

    return rows;

}


export class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSquare: { type: 0, letter: "", row: -1, col: -1 },
            board: []
        }
        //this.datasource = new RestDataSource("http://localhost:3500/api/board");
           this.datasource = new RestDataSource( `${props.scrabbleAPIUrl}/Games/${props.game}/Board/Squares `);
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
    componentDidMount() {
        this.datasource.GetData(data => this.setState({ board: data }));
    }

    static defaultProps = {
        scrabbleAPIUrl : "https://localhost:44361/api"
    }
    static propTypes = {
        scrabbleAPIUrl : PropTypes.string,
        game : PropTypes.number 
    }
}