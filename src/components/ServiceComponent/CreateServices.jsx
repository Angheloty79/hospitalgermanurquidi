import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {useService} from "../../context/servicesContext"

export default function CreateServices() {

  const {AddServices,prueba} = useService();

  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      const newImages = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result);
          if (newImages.length === files.length) {
            setImages((prevImages) => [...prevImages, ...newImages].slice(0, 3));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddServices({ serviceName, serviceDescription, serviceType, images });
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
                    src={image}
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
          Agregar Servicio
        </motion.button>
      </form>
    </div>
  );
}