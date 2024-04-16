import React from 'react';

const PanduanKesehatan: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Panduan Kesehatan saat Tingkat Kelembapan Udara Tinggi/Rendah</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4">
          <h3 className="text-xl font-semibold mb-2">Tips saat Kelembapan Udara Tinggi:</h3>
          <ul className="list-disc pl-6">
            <li>Berjemur di pagi hari untuk mendapatkan sinar matahari.</li>
            <li>Minum air putih cukup untuk menjaga tubuh tetap terhidrasi.</li>
            <li>Gunakan perlindungan matahari ketika beraktivitas di luar ruangan.</li>
            <li>Hindari beraktivitas di luar ruangan pada siang hari saat suhu udara sangat tinggi.</li>
            <li>Gunakan pakaian yang nyaman dan berbahan adem.</li>
          </ul>
        </div>
        <div className="lg:w-1/2 lg:pl-4">
          <h3 className="text-xl font-semibold mb-2">Tips saat Kelembapan Udara Rendah:</h3>
          <ul className="list-disc pl-6">
            <li>Hindari paparan langsung terhadap sinar matahari terutama pada siang hari.</li>
            <li>Gunakan pelembap kulit untuk menjaga kelembaban kulit.</li>
            <li>Minum air putih cukup untuk mencegah dehidrasi.</li>
            <li>Berhati-hati saat melakukan aktivitas fisik yang berat.</li>
            <li>Jaga kebersihan lingkungan untuk mencegah timbulnya penyakit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PanduanKesehatan;
