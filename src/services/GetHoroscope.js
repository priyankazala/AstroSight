import React, { useEffect, useState } from "react";
import "./GetHoroscope.css";

const GetHoroscope = ({ sign, allData }) => {
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sign) {
      setHoroscopeData(null);
      setLoading(false);
      return;
    }
    setLoading(true);

    found = allData.find(
      (item) => item.sunsign.toLowerCase() == sign.toLowerCase()
    );

    if (found) {
      setHoroscopeData(found.horoscope);
    } else {
      setHoroscopeData(null);
    }
    setLoading(false);
  }, [sign, allData]);

  return (
    <div>
      {loading ? (
        <div>
          <h1>Asking the Stars</h1>
          <span class="loader"></span>
        </div>
      ) : (
        <div className="container">
          {!sign && <h2>Please select your zodiac sign!</h2>}
          {horoscopeData && (
            <div>
              <h3>Horoscope for {sign}</h3>
              <p>{horoscopeData}</p>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GetHoroscope;
