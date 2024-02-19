import React, { useEffect, useState } from 'react';

const GetHoroscope = ({ sign }) => {
  const [horoscopeData, setHoroscopeData] = useState(null);
  
  useEffect(() => {
    
      const fetchData = async () => {
        const url = `https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/?zodiacSign=${sign}`;
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
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