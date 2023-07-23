import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}
function HooksUseReducer() {
const stateIntiate = 0
const [state, dispatch] = useReducer(reducer,  stateIntiate)

  return (
    <>
        <div>HooksUseReducer</div>
        <p>My Counter Value: {state}</p>
        <button type="button" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button type="button" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </>
  )
}

export default HooksUseReducer