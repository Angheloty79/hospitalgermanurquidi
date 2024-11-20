import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../../context/servicesContext";

const Services = () => {
  const { FetchServices } = useService(); // Usa el contexto para obtener los servicios
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  // Obtener los servicios dinámicamente desde el backend
  useEffect(() => {
    const fetchAllServices = async () => {
      const data = await FetchServices(); // Llama al método del contexto
      setServices(data); // Guarda los datos en el estado
    };

    fetchAllServices();
  }, [FetchServices]);

  const itemsPerPage = 3; // Elementos por página
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.floor(services.length / itemsPerPage) * itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= services.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const translateValue = -(currentIndex * (100 / itemsPerPage));

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>

      {/* Carrusel dinámico */}
      <div className="relative w-full max-w-6xl mx-auto mb-8 mt-16">
        <div className="overflow-hidden relative">
          {/* Flecha izquierda */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 h-12 w-12 bg-transparent text-white rounded-full shadow-lg hover:bg-opacity-80 hover:scale-110 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800 opacity-70 hover:opacity-100 transition-opacity"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="w-full flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(${translateValue}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-1 p-4 flex flex-col items-center"
                style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
              >
                <div className="w-64 h-64 overflow-hidden rounded-md shadow-lg bg-white transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={`http://localhost:1022/Imgs/ImgServices/${service.serviceImage}`} // Mostrar portada específica
                    alt={service.serviceName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-800 mt-4">{service.serviceName}</h2>
                <p className="text-sm text-gray-600 text-center max-w-xs mt-2">
                  {service.serviceDescription}
                </p>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 h-12 w-12 bg-transparent text-white rounded-full shadow-lg hover:bg-opacity-80 hover:scale-110 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800 opacity-70 hover:opacity-100 transition-opacity"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Botón "Agregar Servicio" */}
      <button
        onClick={() => navigate("/crearServicios")} // Redirige a CreateServices
        className="mt-8 px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Agregar Servicio
      </button>
    </div>
  );
};

export default Services;