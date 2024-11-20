import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Save } from 'lucide-react';
import { useArticle } from '../../context/articuleContext';

export default function RegistroArticulo() {
  const { AddArticle } = useArticle();
  const [imagenes, setImagenes] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      titulo: '',
      autores: '',
      resumen: '',
      contenido: ''
    }
  });

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files) {
      const newImagenes = Array.from(files); // Mantener objetos File
      setImagenes(prev => [...prev, ...newImagenes]); // Usar objetos File directamente
    }
  };

  const removeImage = (index) => {
    setImagenes(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    AddArticle(data,imagenes)
    
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Registro de Artículo Científico</h1>
        <p className="text-gray-500 mb-6">Ingresa los detalles de tu artículo y añade imágenes relevantes.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">Título</label>
            <input
              id="titulo"
              type="text"
              {...register("titulo", { required: "El título es requerido" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ingresa el título de tu artículo"
            />
            {errors.titulo && <p className="mt-1 text-sm text-red-600">{errors.titulo.message}</p>}
          </div>
          <div>
            <label htmlFor="autores" className="block text-sm font-medium text-gray-700 mb-1">Autores</label>
            <input
              id="autores"
              type="text"
              {...register("autores", { required: "Los autores son requeridos" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Nombres de los autores, separados por comas"
            />
            {errors.autores && <p className="mt-1 text-sm text-red-600">{errors.autores.message}</p>}
          </div>
          <div>
            <label htmlFor="resumen" className="block text-sm font-medium text-gray-700 mb-1">Resumen</label>
            <textarea
              id="resumen"
              {...register("resumen", { required: "El resumen es requerido" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
              placeholder="Escribe un breve resumen de tu artículo"
            ></textarea>
            {errors.resumen && <p className="mt-1 text-sm text-red-600">{errors.resumen.message}</p>}
          </div>
          <div>
            <label htmlFor="contenido" className="block text-sm font-medium text-gray-700 mb-1">Contenido Principal</label>
            <textarea
              id="contenido"
              {...register("contenido", { required: "El contenido es requerido" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows="10"
              placeholder="Desarrolla el contenido principal de tu artículo"
            ></textarea>
            {errors.contenido && <p className="mt-1 text-sm text-red-600">{errors.contenido.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Imágenes</label>
            <div className="flex flex-wrap gap-4">
              <AnimatePresence>
                {imagenes.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="relative group"
                  >
                    <img src={URL.createObjectURL(img)} alt={`Imagen ${index + 1}`} className="w-32 h-32 object-cover rounded-lg shadow-md" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              <label htmlFor="upload-image" className="w-32 h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Añadir imagen</span>
                <input
                  id="upload-image"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Save className="mr-2 h-5 w-5" /> Registrar Artículo
          </button>
        </form>
      </div>
    </div>
  );
}
