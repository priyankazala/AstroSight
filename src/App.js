import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GetHoroscope from "../src/services/GetHoroscope";

function App() {
  const [sign, setSign] = useState(null);
  const myRef = useRef(null);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gethoroscope.onrender.com/");
        const jsonData = await response.data;
        setAllData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  const handleClick = (sign) => {
    setSign(sign);
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      offset: { top: 10 },
    });
  };

  return (
    <div className="App">
      <div className="main"></div>
      <h1>Know Your Horoscope</h1>
      <h2>Select Your Sign</h2>
      <p>
        Hey User! The server is hosted on a similar free hosting service which
        spins down when inactive. Hence there might be a delay of about 50
        seconds when you first load. Thanks for your patience!
      </p>
      {loading ? (
        <p>Loading your horoscopes...</p>
      ) : (
        <>
          <div className="button-div">
            {signs.map((sign) => (
              <button
                key={sign}
                onClick={() => handleClick(sign)}
                className="key-button"
              >
                {sign}
              </button>
            ))}
          </div>
          <div ref={myRef}>
            <GetHoroscope sign={sign} allData={allData} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
