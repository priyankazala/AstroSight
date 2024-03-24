import React, { useEffect, useState } from 'react';
import ('./GetHoroscope.css')


const GetHoroscope = ({ sign, allData}) => {
    const [horoscopeData, setHoroscopeData] = useState(null);
    
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
