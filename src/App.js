import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [fetch, setFetch] = useState("");
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    if(counter != 0)
    axios.get("https://swapi.py4e.com/api/people", {
      params: {
        page: counter,
      },
    })
      .then(({ data: { results } }) => {
        setData(results)
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [counter])



  return (
    <div className="App">
      <div className='btn_wrap'>
        <button className='btn' onClick={() => setCounter(1)}>fetch api</button>
      </div>

      <div className='api_cards'>

        {data.map((item) => (
          <div className='api_card'>
            <h2>name: {item.name}</h2>
            <p>created: {item.created}</p>
          </div>
        ))}
      </div>

      <div className='pages'>
        <button className="page_btn" onClick={() => setCounter(1)} >1</button>
        <button className="page_btn" onClick={() => setCounter(2)} >2</button>
        <button className="page_btn" onClick={() => setCounter(3)} >3</button>
        <button className="page_btn" onClick={() => setCounter(4)} >4</button>
        <button className="page_btn" onClick={() => setCounter(5)} >5</button>
        <button className="page_btn" onClick={() => setCounter(6)} >6</button>
        <button className="page_btn" onClick={() => setCounter(7)} >7</button>
        <button className="page_btn" onClick={() => setCounter(8)} >8</button>
      </div>
    </div>
  );
}

export default App;
