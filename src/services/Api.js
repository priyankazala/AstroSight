import React, { useEffect, useState } from 'react';

const GetHoroscope = ({ sign }) => {
  const [horoscopeData, setHoroscopeData] = useState(null);
  
  useEffect(() => {
    
      const fetchData = async () => {
        const url = `https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/?zodiacSign=${sign}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f358ddcd4dmsh6d5e410ffaaf0b2p19d50fjsnd305faf037ef',
                'X-RapidAPI-Host': 'best-daily-astrology-and-horoscope-api.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setHoroscopeData(result)
        } catch (error) {
            console.error(error);
        }
      }
      fetchData();}
  , [sign]);

  return (
    <div>
      {horoscopeData && (
        <div>
          <p>{(horoscopeData)}</p>
        </div>
      )}
    </div>
  );
};

export default GetHoroscope;