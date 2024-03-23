import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ('./GetHoroscope.css')


const GetHoroscope = ({ sign }) => {
    const [horoscopeData, setHoroscopeData] = useState(null);
    const[ allData, setallData] = useState(Array);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get("https://gethoroscope.onrender.com/", {
          mode: 'no-cors'
        })
        const jsonData = await response.data;
        setallData(jsonData)
        }

     catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  });


  useEffect( ()=>{
    
    allData.forEach(item => {
      const ss = item.sunsign;
      const hh = item.horoscope;
      if (sign.toLowerCase() === ss.toLowerCase()){
        setHoroscopeData(hh)
      }});}
  , [sign, allData])

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
