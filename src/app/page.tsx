import Header from "./components/header";
import Humidity from "./components/humidity";
import Informasi from "./components/informasi";
import Cuaca from "./components/cuaca";
import PanduanKesehatan from "./components/panduan";
import Footer from "./components/footer";

const Pages: React.FC = () => {
  return (
    <div>
      <Header />
      <Informasi /> 
      <Humidity />
      <Cuaca />
      <PanduanKesehatan />
      <Footer />
    </div>
  );
};

export default Pages;
