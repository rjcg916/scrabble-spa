import React from 'react';
import {Rack} from './Rack';
import {Board} from './Board';

export default function App() {
  return (
    <div>
      <Rack  tiles={[{letter: "A", value: 1}, {letter: "B", value: 1}, {letter:"C", value: 3}]} />
      <Board  colNames={["A", "B"]} squares={[["A", "B"],["", "C"]]}  />
    </div>
  )
}

