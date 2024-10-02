import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/NavbarComponent/Navigation";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
