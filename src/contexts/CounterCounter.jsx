import { createContext, useReducer } from "react";
import { reducer } from "../store/reducers/counter-reducer";

export const COUNTERCONTEXT = createContext();

export default function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <COUNTERCONTEXT.Provider value={{ state, dispatch }}>
      {children}
    </COUNTERCONTEXT.Provider>
  );
}