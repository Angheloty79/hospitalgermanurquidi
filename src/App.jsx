import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/NavbarComponent/Navigation";
import HomePage from "./pages/HomePage";
import ContactUs from "./components/ContactUsComponent/ContactUs";
import Services from "./components/ServiceComponent/Services";
import CreateServices from "./components/ServiceComponent/CreateServices";
import UpdateServices from "./components/ServiceComponent/UpdateServices";
import Footer from "./components/FooterComponent/Footer";
import ArticulePage from "./pages/ArticlePage";
import Activity from "./components/ActivityComponent/Activity";

// Contextos para compartir los datos
import { ArticleProvider } from "./context/articuleContext";
import { ServiceProvider } from "./context/servicesContext";
import { ContactUsProvider } from "./context/contactUsContext";

function App() {
  return (
    <>
      <ServiceProvider>
        <ArticleProvider>
          <ContactUsProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contactanos" element={<ContactUs />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/actividades" element={<Activity />} />
              <Route path="/crearServicios" element={<CreateServices />} />
              <Route path="/actualizarServicios/:id" element={<UpdateServices />} />
              <Route path="/articulo" element={<ArticulePage />} />
            </Routes>
          </ContactUsProvider>
        </ArticleProvider>
      </ServiceProvider>
      <Footer />
    </>
  );
}

export default App;