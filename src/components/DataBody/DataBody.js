import React from 'react';
import Collapsible from '../Collapsible/Collapsible';
import './DataBody.css';

const refreshData = () => {
  // let target = 'https://en.wikipedia.org/wiki/Off_Menu_with_Ed_Gamble_and_James_Acaster';
  let target = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Off%20Menu%20with%20Ed%20Gamble%20and%20James%20Acaster'
  let proxy = 'https://cors-anywhere.herokuapp.com/'

  fetch(proxy+target)
    .then(function(response) {
      return response.json();
    })
    .then(function(response){
      let html_code = response["parse"]["text"]["*"];
      let parser = new DOMParser();
      let html = parser.parseFromString(html_code, "text/html");
      let tables = html.querySelectorAll(".wikitable");

      let data = [];
      tables.forEach((table) => {
        // make HTMLCollection into array (from stack overflow)
        let arr = Array.prototype.slice.call( table.rows);
        let dataRow = [];

        arr.forEach((item) => {
          // remove html elements from innerHTML text
          dataRow.push(item.innerHTML.replace(/(&nbsp;|<([^>]+)>)/ig, ""));
        });
        data.push(dataRow);
      });

      return data;
    })
    .catch(e => {
      console.error(e);
      return e;
    })
}

function DataBody() { 
  let data = refreshData();
  console.log(data);
  // let table = data.map((value,i) => {
  //     return (
  //       <div key={i}>
  //         {value}
  //       </div>
  //     ) 
  //   })

  return (
  <div className="DataBody">
    <div>
      <Collapsible title="Courses" values={ ['Amuse-Bouche', 'Water', 'Starter', 'Main', 'Side', 'Drink', 'Dessert'] }></Collapsible>
      <Collapsible title="Cultures" values={ ['Indian', 'French', 'Italian', 'American'] }></Collapsible>
      <Collapsible title="Graph" values={ ['Bar', 'Pie', 'Dot'] }></Collapsible>
    </div>
    { data }
  </div>
  )
};

export default DataBody;
