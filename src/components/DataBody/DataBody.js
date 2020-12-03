import React, { useEffect, useState } from 'react';
import Collapsible from '../Collapsible/Collapsible';
import './DataBody.css';

function DataBody() { 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  const loadGraph = () => {
    console.table(episodes);
    // get info from options 

    // produce graph
  };

  useEffect(() => {
    let target = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Off%20Menu%20with%20Ed%20Gamble%20and%20James%20Acaster'
    let proxy = 'https://cors-anywhere.herokuapp.com/'
    fetch(proxy+target)
      .then(res => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
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
          },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          setEpisodes(data);
      })
  }, []);

  return (
  <div className="DataBody">
    <Collapsible title="Courses" values={ ['Amuse-Bouche', 'Water', 'Starter', 'Main', 'Side', 'Drink', 'Dessert'] }></Collapsible>
    <Collapsible title="Cultures" values={ ['Indian', 'French', 'Italian', 'American'] }></Collapsible>
    <Collapsible title="Graph" values={ ['Bar', 'Pie', 'Dot'] }></Collapsible>
    <button onClick={ loadGraph }>Graph</button>
  </div>
  )
}

export default DataBody;
