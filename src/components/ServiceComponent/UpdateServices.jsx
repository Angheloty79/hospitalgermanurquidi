import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useService } from "../../context/servicesContext";

export default function UpdateServices() {
  const { UpdateService, FetchServices } = useService();
  const navigate = useNavigate();
  const { id } = useParams();

  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [images, setImages] = useState([]);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [existingCoverImage, setExistingCoverImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServiceData = async () => {
      try {
        const services = await FetchServices();
        console.log("Servicios obtenidos:", JSON.stringify(services, null, 2));
        console.log("ID recibido desde la URL:", id);

        const service = services.find((s) => s.serviceId === parseInt(id));
        console.log("Servicio encontrado:", service);

        if (service) {
          setServiceName(service.serviceName || "");
          setServiceDescription(service.serviceDescription || "");
          setServiceType(service.serviceType || "");
          if (service.serviceImage) {
            setExistingCoverImage(service.serviceImage); // Precarga la portada existente
          }
        } else {
          console.error("No se encontró el servicio con el ID especificado");
        }
      } catch (error) {
        console.error("Error al cargar datos del servicio:", error);
      } finally {
        setLoading(false);
      }
    };
    loadServiceData();
  }, [id, FetchServices]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).slice(0, 3);
      setImages((prevImages) => [...prevImages, ...newImages].slice(0, 3));
    }
  };

  const handleDeleteImage = (index) => {
    const deletedImage = images[index];
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    if (selectedCoverImage === deletedImage) {
      setSelectedCoverImage(null);
    }
  };

  const handleSelectCoverImage = (image) => {
    setSelectedCoverImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("serviceName", serviceName);
    formData.append("serviceDescription", serviceDescription);
    formData.append("serviceType", serviceType);

    if (selectedCoverImage) {
      formData.append("coverImage", selectedCoverImage, "coverImage");
    } else if (existingCoverImage) {
      formData.append("existingCoverImage", existingCoverImage);
    }

    images.forEach((image, index) => {
      formData.append("image", image, `image-${index}`);
    });

    try {
      await UpdateService(id, formData);
      navigate("/servicios");
    } catch (error) {
      console.error("Error al actualizar servicio:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-bold text-gray-700">Cargando datos...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-gray-800 mb-8 text-center"
      >
        Actualizar Servicio
      </motion.h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Imágenes del Servicio (Máximo 3)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full mt-2 file:py-3 file:px-6 file:rounded-lg file:bg-black file:text-white file:font-bold hover:file:bg-gray-800 transition-all duration-150"
          />
          <div className="grid grid-cols-3 gap-6 mt-6">
            <AnimatePresence>
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-full aspect-square group cursor-pointer ${
                    selectedCoverImage === image
                      ? "ring-4 ring-black"
                      : "hover:ring-4 hover:ring-gray-400"
                  }`}
                  onClick={() => handleSelectCoverImage(image)}
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Vista previa ${index + 1}`}
                    className="rounded-lg object-cover w-full h-full shadow-md"
                  />
                  {selectedCoverImage === image && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
                      Portada
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteImage(index);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  >
                    <X size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {existingCoverImage && !selectedCoverImage && (
            <div className="mt-6">
              <p className="text-center text-gray-700">
                Imagen de portada actual:
              </p>
              <img
                src={`http://localhost:1022/Imgs/ImgServices/${existingCoverImage}`}
                alt="Portada actual"
                className="rounded-lg object-cover w-full h-64 mx-auto shadow-md"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Nombre del Servicio
          </label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
            className="mt-2 block w-full p-4 rounded-lg border border-gray-300 shadow-md focus:border-gray-900 focus:ring focus:ring-gray-300"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Descripción del Servicio
          </label>
          <textarea
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            required
            rows={4}
            className="mt-2 block w-full p-4 rounded-lg border border-gray-300 shadow-md focus:border-gray-900 focus:ring focus:ring-gray-300"
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Tipo de Servicio
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
            className="mt-2 block w-full p-4 rounded-lg border border-gray-300 shadow-md focus:border-gray-900 focus:ring focus:ring-gray-300"
          >
            <option value="">Seleccione un tipo</option>
            <option value="consulta">Consulta Externa</option>
            <option value="emergencia">Emergencia</option>
            <option value="cirugia">Cirugía</option>
            <option value="laboratorio">Laboratorio</option>
            <option value="imagenologia">Imagenología</option>
          </select>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-50 shadow-lg transition-all duration-150"
        >
          Actualizar Servicio
        </motion.button>
      </form>
    </div>
  );
}