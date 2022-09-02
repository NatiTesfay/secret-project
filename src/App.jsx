import CounterProvider from "./components/contexts/CounterContext";
import Counter from "./components/features/Counter/Counter";



function App() {
  return(
   <>
     <CounterProvider>
     <Counter />
     </CounterProvider>
   </>
  );
};
export default App

