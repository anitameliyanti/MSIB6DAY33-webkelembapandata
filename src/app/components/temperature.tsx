"use client";
import React, { useState, useEffect } from "react";

const Temperature: React.FC = () => {
  const [cuacaData, setCuacaData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCuaca, setShowCuaca] = useState<boolean>(false); // state untuk mengontrol tampilan data cuaca

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
        );
        const data = await response.json();
        setCuacaData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cuaca data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleShowCuaca = () => {
    setShowCuaca(true);
  };

  return (
    <section id="data">
      <div className="container mx-auto px-4">
        <div className="py-8">
          <h1 className="text-2xl font-bold mb-4">
            Data Cuaca April 2024
          </h1>
          <button
            onClick={handleShowCuaca}
            className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Tampilkan Data
          </button>
          {showCuaca && (
            <div className="mt-4">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {cuacaData &&
                    cuacaData.hourly.time.map(
                      (time: string, index: number) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-md shadow-md"
                        >
                          <p>
                            Time: {time}
                          </p>
                          <p>Temperature: {cuacaData.hourly.temperature_2m[index]} °C</p>
                          <p>Relative Humidity: {cuacaData.hourly.relative_humidity_2m[index]} %</p>
                          <p>Wind Speed: {cuacaData.hourly.wind_speed_10m[index]} km/h</p>
                        </div>
                      )
                    )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Temperature;
