import React, {  useState, useRef, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GetHoroscope from  "../src/services/GetHoroscope";


function App() {
  const [sign, setSign] = useState(null);
  const myRef = useRef(null);
  const[ allData, setallData] = useState(Array);
  const [Loading, setLoading] = useState(true)

  
  const handleClick = (sign) => {
    setSign(sign)
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start',  offset: { top: 10 } });

  };


  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get("https://gethoroscope.onrender.com/", {
          mode: 'no-cors'
        })
        const jsonData = await response.data;
        setallData(jsonData)
        setLoading(false)
        }

     catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  });

 if(Loading){
  return(<div> Loading... </div>)
 } 
else{
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
          <GetHoroscope sign = {sign} allData = {allData}/>
        </div>
      
    </div>
  );
}}

export default App;
