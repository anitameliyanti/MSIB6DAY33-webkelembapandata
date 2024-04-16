import React from 'react';
import Image from 'next/image';

const Humidity: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="relative w-full h-full">
          <Image
            src="/img/humidity.png" 
            alt="Kelembapan Udara"
            layout="fill"
            objectFit="contain" 
          />
        </div>
        <div className="mt-4 ml-10 mr-10 text-justify">
          <h2 className="text-lg font-semibold">Kelembapan Udara di Indonesia</h2>
          <p className="mt-2">Kelembapan udara di Indonesia cenderung tinggi sepanjang tahun, terutama di daerah yang beriklim tropis. Tingginya kelembapan udara dapat mempengaruhi kenyamanan dan kesehatan manusia, serta memengaruhi kondisi cuaca secara keseluruhan.
          Pemantauan kelembapan udara menjadi penting dalam memahami kondisi lingkungan sekitar dan mempersiapkan diri terhadap potensi dampak yang ditimbulkan.</p>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
