import satData from "./satData.js";
import './styling.css';
// Pass the props created from the App() function: filterByType, setSat, and displaySats.

/* INCORRECT // to pass in properties, you need it in the () after the variable to get it to render in function
import  {
  filterByType, 
  setSat, 
  displaySats
} from './App' */ 

// the first div is to have : className={"flex-container"} but not working
const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={(setSat)} key={satData}>
          All Orbits  
      </button>
  </div>
  );
};
        // code continues
        // Inside the button tag, create an onClick function that points to setSat. Pass satData to setSat.




export default Buttons;