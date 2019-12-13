import React from "react";

function SmurfList(props) {
    console.log(props,"list")
  return (
    <div className="smurf-card">
      <p>Smurf name: {props.smurf.name}</p>
      <p>Smurf age: {props.smurf.age}</p>
      <p>Smurf height: {props.smurf.height}</p>
    </div>
  );
}

export default SmurfList;
