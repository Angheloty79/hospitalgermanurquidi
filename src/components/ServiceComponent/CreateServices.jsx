
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useService } from "../../context/servicesContext";

export default function CreateServices() {
  const { AddServices } = useService();
  const navigate = useNavigate(); // Inicializar useNavigate

  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [images, setImages] = useState([]);
  const [serviceCode, setServiceCode] = useState("");
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);

  const generateServiceCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 14; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setServiceCode(result);
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).slice(0, 3); // Limitar a 3 imágenes
      setImages((prevImages) => [...prevImages, ...newImages].slice(0, 3));
    }
  };

  const handleDeleteImage = (index) => {
    const deletedImage = images[index];
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));

    // Si la imagen eliminada era la portada seleccionada, reiniciar selección
    if (selectedCoverImage === deletedImage) {
      setSelectedCoverImage(null);
    }
  };

  const handleSelectCoverImage = (image) => {
    setSelectedCoverImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Crear un FormData para enviar datos y archivos
    const formData = new FormData();
    formData.append("serviceName", serviceName);
    formData.append("serviceDescription", serviceDescription);
    formData.append("serviceType", serviceType);
    formData.append("serviceCode", serviceCode);

    // Agregar las imágenes al FormData
    images.forEach((image, index) => {
      formData.append("image", image, `image-${index}`);
    });

    // Agregar la imagen de portada al FormData
    if (selectedCoverImage) {
      formData.append("coverImage", selectedCoverImage, "coverImage");
    }
    // Enviar datos al backend
    await AddServices(formData);

    // Redirigir al usuario a /servicios
    navigate("/servicios");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-gray-800 mb-8 text-center"
      >
        Agregar Nuevo Servicio
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
                  className="relative w-full aspect-square group"
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Vista previa ${index + 1}`}
                    className="rounded-lg object-cover w-full h-full shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  >
                    <X size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            {[...Array(3 - images.length)].map((_, index) => (
              <div
                key={`empty-${index}`}
                className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-dashed border-2 border-gray-300"
              >
                <span className="text-gray-400">Imagen {images.length + index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Seleccionar Imagen de Portada
          </label>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative w-full aspect-square group cursor-pointer ${
                  selectedCoverImage === image
                    ? "ring-4 ring-black"
                    : "hover:ring-4 hover:ring-gray-400"
                }`}
                onClick={() => handleSelectCoverImage(image)}
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Seleccionar portada ${index + 1}`}
                  className="rounded-lg object-cover w-full h-full shadow-md"
                />
                {selectedCoverImage === image && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
                    Portada
                  </div>
                )}
              </div>
            ))}
          </div>
          {selectedCoverImage && (
            <p className="mt-4 text-center text-gray-700">
              Imagen seleccionada como portada.
            </p>
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
            Código del Servicio
          </label>
          <div className="mt-2 flex items-center">
            <input
              type="text"
              value={serviceCode}
              readOnly
              className="block w-full p-4 rounded-lg border border-gray-300 shadow-md focus:border-gray-900 focus:ring focus:ring-gray-300"
            />
            <button
              type="button"
              onClick={generateServiceCode}
              className="ml-2 bg-black text-white py-2 px-4 rounded-lg font-bold hover:bg-gray-800 focus:ring focus:ring-gray-500 focus:ring-opacity-50 shadow-lg transition-all duration-150"
            >
              Generar Código
            </button>
          </div>
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
          Agregar Servicio
        </motion.button>
      </form>
    </div>
  );
}