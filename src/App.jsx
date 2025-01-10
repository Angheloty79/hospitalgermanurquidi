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
import ActivityList from "./components/ActivityComponent/ActivityList";
import ActivityUpdate from "./components/ActivityComponent/ActivityUpdate";
import WhoPage from "./pages/WhoPage";

// Contextos para compartir los datos
import { ArticleProvider } from "./context/articuleContext";
import { ServiceProvider } from "./context/servicesContext";
import { ContactUsProvider } from "./context/contactUsContext";
import { ActivityProvider } from "./context/activityContext";

function App() {
  return (
    <ActivityProvider>
      <ServiceProvider>
        <ArticleProvider>
          <ContactUsProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contactanos" element={<ContactUs />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/actividades" element={<Activity />} />
              <Route path="/actividadesLista" element={<ActivityList/>} />
              <Route path="/actividadesActualizacion/:id" element={<ActivityUpdate/>} />
              <Route path="/crearServicios" element={<CreateServices />} />
              <Route path="/actualizarServicios/:id" element={<UpdateServices />} />
              <Route path="/articulo" element={<ArticulePage />} />
              <Route path="/quienesSomos" element={<WhoPage/>}/>
            </Routes>
          </ContactUsProvider>
        </ArticleProvider>
      </ServiceProvider>
      <Footer />
    </ActivityProvider>

  );
}

export default App;