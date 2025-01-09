import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/NavbarComponent/Navigation";
import HomePage from "./pages/HomePage";
import ContactUs from "./components/ContactUsComponent/ContactUs";
import Services from "./components/ServiceComponent/Services";
import CreateServices from "./components/ServiceComponent/CreateServices";
import Footer from "./components/FooterComponent/Footer";
import ArticulePage from "./pages/ArticlePage";

/// Contexto para compartir los datos
import { ArticleProvider } from "./context/articuleContext";
import { ServiceProvider } from "./context/servicesContext";
import WhoPage from "./pages/WhoPage";

function App() {
  return (
    <>
    <ServiceProvider>
      <ArticleProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/crearServicios" element={<CreateServices />} />
          <Route path="/ariticulo" element={<ArticulePage />} />
          <Route path="/quienesSomos" element={<WhoPage/>}/>
        </Routes>
      </ArticleProvider>
      </ServiceProvider>
      <Footer />
    </>
  );
}

export default App;
