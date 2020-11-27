import React from 'react';
import Collapsible from '../Collapsible/Collapsible';
// import PropTypes from 'prop-types';
import './DataBody.css';

const DataBody = () => (
  <div className="DataBody">
    <div>
      <Collapsible title="Courses" values={ ['Amuse-Bouche', 'Water', 'Starter', 'Main', 'Side', 'Drink', 'Dessert'] }></Collapsible>
    </div>
  </div>
);

DataBody.propTypes = {};

DataBody.defaultProps = {};

export default DataBody;
