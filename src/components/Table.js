// import satData from "./satData.js"; // why is this grayed out at 13:51 8/14? 
import './styling.css';

const Table = ( props ) => {
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
          {props.sat.map((data, id) => {
            return (
              <tr key={id}> 
                <td>{data.name}</td> 
                <td>{data.type}</td> 
                <td>{data.launchDate}</td> 
                <td>{data.operational ? "Active" : "Inactive"}</td> 
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};



export default Table;