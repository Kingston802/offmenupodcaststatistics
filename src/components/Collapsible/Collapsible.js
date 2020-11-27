import React from 'react';
import './Collapsible.css';

function Collapsible(props) {
  let toggleCollapsed = (e) => {
    let options = document.querySelector('.'+props.title.toLowerCase()+' .options');
    options.classList.toggle('open');
  }

  let values = props.values.map((value, i) => {
    return (
      <div key={i}>
        <input type="checkbox" name={value.toLowerCase()}></input>
        {/* add space for some spacing   */}
        <label htmlFor={value.toLowerCase()}>{' ' + value}</label>
        <br></br>
      </div>
    ) 
  })
  return (
    <div className={props.title.toLowerCase()}>
      <p onClick={toggleCollapsed}>{props.title}</p>
      <div className="options">
        { values }
      </div>
    </div>
  ) 
};

export default Collapsible;
