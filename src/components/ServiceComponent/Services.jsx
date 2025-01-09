import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../../context/servicesContext";

const Services = () => {
  const { FetchServices, DeleteService } = useService();
  const [services, setServices] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const data = await FetchServices();
        setServices(data);
      } catch (error) {
        console.error("Error al obtener los servicios:", error.message || error);
      }
    };

    fetchAllServices();
  }, [FetchServices]);

  const handleDelete = (serviceId) => {
    setServiceToDelete(serviceId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await DeleteService(serviceToDelete);
      setServices((prev) => prev.filter((service) => service.serviceId !== serviceToDelete));
      setShowDeleteModal(false);
      setServiceToDelete(null);

      // Ajustar el índice si el servicio eliminado es el último visible
      if (currentIndex >= services.length - 1) {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    } catch (error) {
      console.error("Error al eliminar el servicio:", error.message || error);
    }
  };

  const prevSlide = () => {
    if (services.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    }
  };

  const nextSlide = () => {
    if (services.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center">
      {/* Encabezado */}
      <header className="w-full bg-transparent text-black py-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Nuestros Servicios
        </h1>
        <p className="mt-2 text-lg font-medium">
          Explora nuestra variedad de servicios diseñados para ti.
        </p>
      </header>

      {/* Carrusel */}
      <section className="w-full max-w-4xl mt-8 relative h-96 flex items-center justify-center">
      {/* Botón de navegación arriba */}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white text-indigo-600 rounded-full p-1 shadow-lg hover:scale-110 transition-all z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Contenedor del carrusel */}
      <div className="overflow-hidden w-full h-full relative">
          {services.length > 0 ? (
            <div
              className="flex flex-col transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateY(-${currentIndex * 100}%)`,
                height: `${services.length * 100}%`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.serviceId}
                  className="w-full h-full flex-shrink-0 flex flex-col items-center bg-indigo-50 rounded-xl p-6"
                >
                  {/* Imagen del servicio */}
                  <div className="relative w-full h-44 max-w-md rounded-xl shadow-lg overflow-hidden bg-white">
                    <img
                      src={`http://localhost:1022/Imgs/ImgServices/${service.serviceImage}`}
                      alt={service.serviceName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => navigate(`/actualizarServicios/${service.serviceId}`)}
                        aria-label="Editar"
                        className="bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700 transition"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(service.serviceId)}
                        aria-label="Eliminar"
                        className="bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600 transition"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                  {/* Nombre y descripción */}
                  <div className="w-full max-w-md text-center mt-4">
                    <h2 className="text-xl font-semibold text-indigo-700 truncate">
                      {service.serviceName}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {service.serviceDescription}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No hay servicios disponibles.</p>
        )}
      </div>


      {/* Botón de navegación abajo */}
      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-indigo-600 rounded-full p-1 shadow-lg hover:scale-110 transition-all z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>


      {/* Botón "Agregar Servicio" */}
      <button
        onClick={() => navigate("/crearServicios")}
        className="mt-12 px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
      >
        Agregar Servicio
      </button>

      {/* Modal de confirmación */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 animate-fadeIn">
            <h2 className="text-xl font-semibold text-red-600 text-center mb-4">
              ¿Deseas eliminar este servicio?
            </h2>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;