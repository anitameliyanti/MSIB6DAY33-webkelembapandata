import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Informasi Lebih Lanjut</h3>
            <p className="mt-2">Temukan informasi terbaru tentang kelembapan udara di situs web BMKG.</p>
          </div>
          <div>
            <a href="https://www.bmkg.go.id/" className="text-blue-400 hover:text-blue-200">Kunjungi BMKG</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
