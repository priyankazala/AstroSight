import React, { useEffect, useState } from 'react';
const data = require("../assets/horoscope.json")
import ('./GetHoroscope.css')

const GetHoroscope = ({ sign }) => {
    const [horoscopeData, setHoroscopeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Finding the horoscope 
      
        
        data.forEach(item => {
          const ss = item.sunsign;
          const hh = item.horoscope;
          if (sign.toLowerCase() === ss.toLowerCase()){
            setHoroscopeData(hh)
          }

          
        });
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [sign]);

    return (
        <div className='container'>
            {horoscopeData && (
                <div>
                  <h3>Horoscope for {sign}</h3>
                  <p>{horoscopeData}</p> {/* Accessing horoscope text from response */}
                </div>
            )}
        </div>
    );
};

export default GetHoroscope;
