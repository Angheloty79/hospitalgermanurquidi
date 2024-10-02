import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/NavbarComponent/Navigation";
import HomePage from "./pages/HomePage";
import ContactUs from "./components/ContactUsComponent/ContactUs";
import Services from "./components/ServiceComponent/Services";
import Footer from "./components/FooterComponent/Footer";
function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contactanos" element={<ContactUs/>} />
        <Route path="/servicios" element={<Services/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
