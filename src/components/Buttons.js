import satData from "./satData";
import './styling.css';
// Pass the props created from the App() function: filterByType, setSat, and displaySats.

/* INCORRECT // to pass in properties, you need it in the () after the variable to get it to render in function
import  {
  filterByType, 
  setSat, 
  displaySats
} from './App' */ 


const Buttons = ({filterByType, setSat, displaySats}) => {
  {displaySats.map((sat, id) => {
    return (
      <div className={"flex-container"}>
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
        // code continues
        // Inside the button tag, create an onClick function that points to setSat. Pass satData to setSat.
        <button onClick={() => filterByType(satData)} key={setSat}>
          All Orbits
        </button>
      </div>
    );
  })};
};



export default Buttons;