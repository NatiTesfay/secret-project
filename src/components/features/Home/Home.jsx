import "./Home.css";
import React from "react";
import Counter from "../Counter/Counter/";
import CounterProvider from "../../../contexts/counter-context";

function Home() {
  return (
    <div className="home">
   <CounterProvider>
    <Counter/>
   </CounterProvider>            
    </div>
  );
};

export default Home;