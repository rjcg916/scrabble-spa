module.exports = function () {
    let data = {
/*         board: [
            { i: 0, rowName: "1", squares: [{ i: 0, colName: "A", type: 1, tile: { letter: "A"} }, { i: 1, colName: "B", type: 1 }] },
            { i: 1, rowName: "2", squares: [{ i: 0, colName: "A", type: 1 }, { i: 1, colName: "B", type: 1 }] }
        ]; */
        board: [
            {row: 0, rowName: "1", col: 0, colName: "A", 
              square : {squareType: 4,
                        isFinal: false,
                        tile: {letter: "A"},
                        isOccupied: false,
                        letterMultiplier: 1,
                        wordMultiplier: 3}
            },
            {row: 0, rowName: "1", col: 1, colName: "B", 
            square : {squareType: 4,
                      isFinal: false,
                      tile: null,
                      isOccupied: false,
                      letterMultiplier: 1,
                      wordMultiplier: 3}
          } ,       
        {row: 1, rowName: "2", col: 0, colName: "A", 
          square : {squareType: 4,
                    isFinal: false,
                    tile: null,
                    isOccupied: false,
                    letterMultiplier: 1,
                    wordMultiplier: 3}
        },       
        {row: 1, rowName: "2", col: 1, colName: "B", 
        square : {squareType: 4,
                  isFinal: false,
                  tile: null,
                  isOccupied: false,
                  letterMultiplier: 1,
                  wordMultiplier: 3}
          }
        ]       
    }
    return data;
}