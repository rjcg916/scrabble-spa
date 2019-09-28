module.exports = function () {
    let data = {
        squares: [
            [{ type: 1, tile: { letter: "A", value: 1 } },
            { type: 1, tile: { letter: "B", value: 1 } }],
            [{ type: 1, tile: null },
            { type: 1, tile: { letter: "C", value: 2 } }]
        ],
        colNames: ["A", "B"],
        rowNames: ["1", "2"],
        board: [ 
                 { r: 0, rowName : "1",  squares: [[{c: 0, colName: "A", type:1} ], [{colIndex: 1, colName: "B", type:1} ]]}, 
                 { r: 1, rowName : "2",  squares: [[{c: 0, colName: "A", type:1} ], [{colIndex: 1, colName: "B", type:1} ]]} 
                ]
    }
    return data;
}