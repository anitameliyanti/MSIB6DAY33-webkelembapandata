import React from "react";
import Image from "next/image";

const Informasi: React.FC = () => {
  const informasiCuaca = [
    {
      title: "Hujan Deras sebabkan Jalan Tergenang",
      imageUrl: "/img/berita1.png",
      link: "https://metro.sindonews.com/read/1353321/170/bpbd-dki-hujan-deras-sebabkan-4-rt-dan-5-ruas-jalan-di-jakarta-tergenang-1712138642",
    },
    {
      title: "Prediksi Cuaca saat Mudik",
      imageUrl: "/img/berita2.png",
      link: "https://sains.sindonews.com/read/1353123/766/ingin-tahu-prediksi-cuaca-saat-mudik-cek-layanan-dwt-bmkg-1712124284",
    },
    {
      title: "Potensi Gelombang Tinggi",
      imageUrl: "/img/berita3.png",
      link: "https://nasional.sindonews.com/read/1350477/15/warning-bmkg-potensi-gelombang-tinggi-hingga-4-meter-di-selatan-perairan-indonesia-1711767832",
    },
    {
      title: "Mengapa panas melebih Prakiraan?",
      imageUrl: "/img/berita4a.png",
      link: "https://www.detik.com/edu/detikpedia/d-6966184/mengapa-kita-bisa-lebih-kepanasan-dari-suhu-prakiraan-ini-penjelasan-bmkg",
    },
  ];

  return (
    <section id="informasi">
      <div className="container mx-auto px-4 mb-20 mt-10">
        <h1 className="text-2xl font-bold mb-4">Informasi Cuaca</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {informasiCuaca.map((info, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-4">
              <div className="mb-4">
                <Image
                  src={info.imageUrl}
                  alt={info.title}
                  width={250}
                  height={150}
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">{info.title}</h2>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
              >
                Lihat Berita
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Informasi;
