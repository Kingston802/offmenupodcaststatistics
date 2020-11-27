import React from 'react';
import './Collapsible.css';

function Collapsible(props) {
  let values = props.values.map((value, i) => {
    return (
      <div key={i}>
        <input type="radio" name={value.toLowerCase()}></input>
        {/* add space for some spacing   */}
        <label htmlFor={value.toLowerCase()}>{' ' + value}</label>
        <br></br>
      </div>
    ) 
  })
  return (
    <div className="Collapsible">
      <p>{props.title}</p>
      { values }
    </div>
  ) 
};

export default Collapsible;
