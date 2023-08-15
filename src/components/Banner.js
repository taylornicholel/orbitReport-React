import './styling.css';

function Banner () {
    return (
        <div> 
            <h1>Orbit Report</h1>
            <p>Click on the buttons to see the satellites in that orbit type </p>
        </div>
    )
}; 
// adding head because I needed a parent // needed div not head to group the parent

function Feet () {
    return (
        <div> <p>
        Just like orbits, this footer needs some space!
        </p></div>
    );
};

export {Banner}
export {Feet}