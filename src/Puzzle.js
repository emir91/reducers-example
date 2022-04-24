import React, { useReducer } from "react"
import reducer from "./reducer"
import "./assets/styles/puzzle.css"

const Puzzle = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: ["4", "1", "2", "7", "6", "3", null, "5", "8"],
  })
  return (
    <div className='puzzle'>
      <div className='puzzle-squares'>
        {state.items.map((s, i) => {
          return (
            <div
              className={`puzzle-square ${s ? "" : "puzzle-square-empty"}`}
              key={i}
              onClick={() => dispatch({ type: "move", payload: i })}
            >
              {s}
            </div>
          )
        })}
      </div>
      <div className='puzzle-controls'>
        <button
          className='puzzle-shuffle'
          onClick={() => dispatch({ type: "shuffle" })}
        >
          Shuffle
        </button>
        <button
          className='puzzle-reset'
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      {state.complete && <div className='puzzle-complete'>Complete!</div>}
    </div>
  )
}

export default Puzzle
