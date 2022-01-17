import React, { useReducer } from "react"

import { StateContext, stateInitial } from "./contexts/useStateContext"
import useReducerState from "./contexts/useReducerState"
import HomeScreen from "./screens/HomeScreen"

function App() {
  const [state, dispatch] = useReducer(useReducerState, stateInitial);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <HomeScreen />
    </StateContext.Provider>
  );
}

export default App;
