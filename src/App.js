
import Block from "./components/block/Block";
import Header from "./components/header/Header";
import "./app.scss"
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);
  const APICall = async() =>{
    const link ="https://data.covid19india.org/data.json";
    const res = await fetch(link);
    const data = await res.json();
  
  setState(data.statewise[0]);
   
  
  }
  useEffect(() => {
    APICall()
 
  },[])
  

  return (
        
    <div className="app">
    
    <Header />
    <div className="container"  >
    <Block color="#E0C097" p="OUR" head="COUNTRY" data="INDIA"/>
    <Block color="#BD1616" p="TOTAL" head="RECOVERED" data={state.recovered}/>
    <Block color="#BD4B4B" p="TOTAL" head="CONFIRMED" data={state.confirmed}/>
    <Block color="#0A81AB" p="TOTAL" head="DEATHS" data={state.deaths}/>
    <Block color="#BA135D" p="TOTAL" head="ACTIVE" data={state.active}/>
    <Block color="#D8AC9C" p="LAST" head="UPDATED" data={state.lastupdatedtime}/>
    </div>
    </div>
  );
}

export default App;
