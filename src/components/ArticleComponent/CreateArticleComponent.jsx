import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Save, CheckCircle } from 'lucide-react';


import { useArticle } from "../../context/articuleContext";


export default function RegistroArticulo() {
  const { AddArticle } = useArticle();
  const [imagenes, setImagenes] = useState([]);
  const [codigoArticulo, setCodigoArticulo] = useState('');
  const [imagenesError, setImagenesError] = useState('');
  const [notificacion, setNotificacion] = useState({ visible: false, mensaje: '' });
  const fileInputRef = useRef(null);
  const { register, handleSubmit, watch, formState: { errors }, setError, clearErrors, reset } = useForm({
    defaultValues: {
      titulo: '',
      autores: '',
      resumen: '',
      contenido: ''
    }
  });

  const titulo = watch('titulo');
  const autores = watch('autores');

  useEffect(() => {
    if (titulo && autores) {
      const codigo = generarCodigoArticulo(titulo, autores);
      setCodigoArticulo(codigo);
    }
  }, [titulo, autores]);

  useEffect(() => {
    if (imagenes.length === 3) {
      clearErrors('imagenes');
      setImagenesError('');
    } else {
      setImagenesError('Se requieren exactamente 3 imágenes');
    }
  }, [imagenes, clearErrors]);

  const generarCodigoArticulo = (titulo, autores) => {
    const tituloAbreviado = titulo.split(' ').map(word => word[0]).join('').slice(0, 6).toUpperCase();
    const autorAbreviado = autores.split(' ').map(word => word[0]).join('').slice(0, 3).toUpperCase();
    const timestamp = Date.now().toString().slice(-5);
    return `${tituloAbreviado}-${autorAbreviado}-${timestamp}`;
  };

  const limpiarFormulario = () => {
    reset({
      titulo: '',
      autores: '',
      resumen: '',
      contenido: ''
    });
    setImagenes([]);
    setCodigoArticulo('');
    setImagenesError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (data) => {
    if (imagenes.length !== 3) {
      setError('imagenes', { type: 'manual', message: 'Se requieren exactamente 3 imágenes' });
      return;
    }

    const formData = new FormData();
    formData.append('codigoArticulo', codigoArticulo);
    formData.append('titulo', data.titulo);
    formData.append('autores', data.autores);
    formData.append('resumen', data.resumen);
    formData.append('contenido', data.contenido);
    formData.append('lentImge', imagenes.length);

    imagenes.forEach((img, index) => {
      formData.append(`imagen${index + 1}`, img.file);
    });

    console.log('Datos a enviar:', {
      codigoArticulo,
      titulo: data.titulo,
      autores: data.autores,
      resumen: data.resumen,
      contenido: data.contenido,
      numeroDeImagenes: imagenes.length
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const result = await AddArticle(formData);

      if (result.success === true) {
        
        setNotificacion({ visible: true, mensaje: `${result.MessageE}` });
        setTimeout(() => setNotificacion({ visible: false, mensaje: '' }), 7000);
        limpiarFormulario();
      } else {
       
        setNotificacion({ visible: true, mensaje: 'Error al guardar el artículo' });
      }
    } catch (error) {
      console.error('Error de red:', error.message);
      setNotificacion({ visible: true, mensaje: 'Error al guardar el artículo Rvise el Servidor' });
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImagenes = files.map(file => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      file: file
    }));
    setImagenes(prev => {
      const updatedImagenes = [...prev, ...newImagenes].slice(0, 3);
      if (updatedImagenes.length === 3) {
        clearErrors('imagenes');
        setImagenesError('');
      } else {
        setImagenesError('Se requieren exactamente 3 imágenes');
      }
      return updatedImagenes;
    });
  };

  const removeImage = (id) => {
    setImagenes(prev => {
      const updatedImagenes = prev.filter(img => img.id !== id);
      if (updatedImagenes.length !== 3) {
        setImagenesError('Se requieren exactamente 3 imágenes');
      }
      return updatedImagenes;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-1">Registro de Artículo Científico</h1>
        <p className="text-gray-500 mb-6">Ingresa los detalles de tu artículo y añade exactamente 3 imágenes relevantes.</p>
        {codigoArticulo && (
          <div className="mb-6 p-4 bg-gray-100 rounded-md">
            <p className="text-sm font-medium text-gray-700">Código de Artículo: <span className="font-bold">{codigoArticulo}</span></p>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" encType="multipart/form-data">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Imágenes (exactamente 3)</label>
            <div className="flex flex-wrap gap-4">
              <AnimatePresence>
                {imagenes.map((img) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="relative group"
                  >
                    <img src={img.url} alt={`Imagen ${img.id}`} className="w-32 h-32 object-cover rounded-lg shadow-md" />
                    <button
                      type="button"
                      onClick={() => removeImage(img.id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              {imagenes.length < 3 && (
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
                    ref={fileInputRef}
                  />
                </label>
              )}
            </div>
            {imagenesError && <p className="mt-2 text-sm text-red-600">{imagenesError}</p>}
            <p className="mt-2 text-sm text-gray-500">{imagenes.length}/3 imágenes añadidas</p>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Save className="mr-2 h-5 w-5" /> Registrar Artículo
          </button>
        </form>
      </div>
      <AnimatePresence>
        {notificacion.visible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center"
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            {notificacion.mensaje}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}