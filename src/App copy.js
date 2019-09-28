import React from 'react';
import {Rack} from './Rack';
import {Board} from './Board';

export default function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-6">
      <h1>Board</h1>
      <Board  colNames={["A", "B"]} squares={[

              [ {type: 1, tile: {letter: "A", value: 1}}, 
                {type: 1, tile: {letter: "B", value: 1}}],
                                               
              [ {type: 1, tile: null},
                {type: 1, tile: {letter: "C", value: 2}}]
                                                ]}  />      
      </div>
      <div className="col-6">
      <h1>Rack</h1>
      <Rack  tiles={[
              {letter: "A", value: 1}, 
              {letter: "B", value: 1}, 
              {letter: "C", value: 3}]} />
      </div>
    </div>
    </div>
  )
}

