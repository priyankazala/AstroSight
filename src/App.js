import React, { useEffect, useState } from 'react';
import './App.css';
import GetHoroscope from  "../src/services/Api";

function App() {
  const [sign, setSign] = useState(null);
  const handleButtonClick = (sign) => {
    setSign(sign);
  };

  return (
    <div className="App">
      <div className="main"></div>
      <h1>Know Your Horoscope</h1>
      <h2>Select Your Sign</h2>
      {['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].map((sign) => (
        <button className ="key-button" key={sign} onClick={() => handleButtonClick(sign)}>{sign}</button>
      ))}
      
        <div>
          <h3>Horoscope for {sign}</h3>
          <GetHoroscope sign ={sign}/>
        </div>
      
    </div>
  );
}

export default App;
