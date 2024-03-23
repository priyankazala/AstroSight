import React, {  useState, useRef, useEffect } from 'react';
import './App.css';
import GetHoroscope from  "../src/services/GetHoroscope";
import axios from 'axios';


function App() {
  const [sign, setSign] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const myRef = useRef(null);

   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gethoroscope.onrender.com/", {
          mode: 'cors',
          credentials: 'include'
        })
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const handleClick = (sign) => {
    setSign(sign)
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start',  offset: { top: 10 } });

  };
  

  return (
    <div className="App">
      <div className="main"></div>
      <h1>Know Your Horoscope</h1>
      <h2>Select Your Sign</h2>
      <div className = "button-div">
      {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'].map((sign) => (
        <button className ="key-button" key={sign} onClick={() => handleClick(sign)}>{sign}</button>
      ))}
      </div>
      
        <div ref={myRef}>
          <GetHoroscope sign ={sign}/>
        </div>
      
    </div>
  );
}

export default App;
