import React from 'react';
import Collapsible from '../Collapsible/Collapsible';
import './DataBody.css';

const DataBody = () => (
  <div className="DataBody">
    <div>
      <Collapsible title="Courses" values={ ['Amuse-Bouche', 'Water', 'Starter', 'Main', 'Side', 'Drink', 'Dessert'] }></Collapsible>
      <Collapsible title="Cultures" values={ ['Indian', 'French', 'Italian', 'American'] }></Collapsible>
      <Collapsible title="Graph" values={ ['Bar', 'Pie', 'Dot'] }></Collapsible>
    </div>
  </div>
);

export default DataBody;
