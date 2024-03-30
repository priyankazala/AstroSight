import React, { useEffect, useState } from 'react';
import ('./GetHoroscope.css')


const GetHoroscope = ({ sign, allData}) => {
    const [horoscopeData, setHoroscopeData] = useState(null);
    const [Loading, setLoading] = useState(true)

    
  useEffect( ()=>{
    
    allData.forEach(item => {
      const ss = item.sunsign;
      const hh = item.horoscope;
      if (sign != null && sign.toLowerCase() === ss.toLowerCase()){
        setHoroscopeData(hh);
        setLoading(false);
      }});}

  , [sign, allData])

    return (
      <div>
         {Loading ? <div><h1>Loading.....</h1></div> : 
        <div className='container'>
            {horoscopeData && (
                <div>
                  <h3>Horoscope for {sign}</h3>
                  <p>{horoscopeData}</p> {/* Accessing horoscope text from response */}
                </div>
            )}
        </div>}
      </div>
     
    );
};

export default GetHoroscope;
