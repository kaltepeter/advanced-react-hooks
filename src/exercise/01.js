// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

// const countReducer = (state, action) => {
//   return {...state, ...(typeof action === 'function' ? action(state) : action)}
// }

// const countReducer = (state, action) => {
//   return {...state, ...action}
// }

// const countReducer = (count, step) => {
//   return count + step
// }

// const countReducer = (state, newState) => {
//   return newState
// }

function Counter({initialCount = 0, step = 1}) {

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  const {count} = state
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useReducer(countReducer, initialCount)

  const increment = () => dispatch({type: 'INCREMENT', step})
  // const increment = () => setState(currentState => ({count: count + step}))
  // const increment = () => setState({count: count + step})
  // const increment = () => changeCount(step)
  // const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
