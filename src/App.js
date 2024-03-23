import React, {  useState, useRef} from 'react';
import './App.css';
import GetHoroscope from  "../src/services/GetHoroscope";


function App() {
  const [sign, setSign] = useState(null);
  const myRef = useRef(null);

  
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
