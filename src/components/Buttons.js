import satData from "./satData";
// Pass the props created from the App() function: filterByType, setSat, and displaySats.

/* INCORRECT
import  {
  filterByType, 
  setSat, 
  displaySats
} from './App' */ 


const Buttons = ({filterByType, setSat, displaySats}) => {
  {displaySats.map((sat, id) => {
    return (
      <div>
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
        //code continues
        <button>All Orbits</button>
      </div>
    );
  })};
};



export default Buttons;