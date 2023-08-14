import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
// import satData from "./components/satData";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { useState } from 'react';

// What's the difference between from/as : "Import useState from "react". & Import satData.js as satData." ???? 
const satData = ReactDOM.createSatData(document.getElementById('satData'));

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  // code continues ...
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };
  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType} // why is this variable not bluet like the others 8/14 8:57
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}




export default App;
