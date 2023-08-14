import satData from "./satData"; // why is this grayed out at 13:51 8/14? 
import './styling.css';

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th> 
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data, id) => {
            return (
              <tr key={id}> <td>{data.name}</td> <td>{data.type}</td> <td>{data.launchDate}</td> <td>{data.operational ? "Active" : "Inactive"}</td> </tr>
            );
          })}
        </tbody>
      </table>
  );
};


/* 
function tableDisplay() {
  const ListOfResults = (props) => {
    return props.map((sat) => (
      <td key={props.name}>{sat}</td> <td key={props.launchDate}>{sat}</td> <td key={props.orbitType}>{sat}</td> <td key={props.operational}>{sat}</td> 
    ));
  };
  return <tr>{ListOfResults(satData)}</tr>;
}   */ 


/*         <tbody>
        <tr>
          <td>Row Data TBD</td>          
        </tr>
        </tbody> */ // holding off changing until I know function works



export default Table;