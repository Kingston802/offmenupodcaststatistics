import React from 'react';
// import PropTypes from 'prop-types';
import './DataBody.css';

const DataBody = () => (
  <div className="DataBody">
      <input type="radio" name="amusebouche"></input>
      <label htmlFor="amusebouche"> Amuse-bouche</label>
      <br></br>
      <input type="radio" name="water"></input>
      <label htmlFor="water"> Water</label>
      <br></br>
      <input type="radio" name="starter"></input>
      <label htmlFor="starter"> Starter</label>
      <br></br>
      <input type="radio" name="main"></input>
      <label htmlFor="main"> Main</label>
      <br></br>
      <input type="radio" name="side"></input>
      <label htmlFor="side"> Side</label>
      <br></br>
      <input type="radio" name="drink"></input>
      <label for="drink"> Drink</label>
      <br></br>
      <input type="radio" name="dessert"></input>
      <label htmlFor="dessert"> Dessert</label>
      <br></br>
  </div>
);

DataBody.propTypes = {};

DataBody.defaultProps = {};

export default DataBody;
