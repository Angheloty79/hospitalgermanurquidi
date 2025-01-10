import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const articulos = [
  {
    id: 1,
    titulo: "Avances en la Inteligencia Artificial Aplicada a la Medicina",
    autores: "Dr. Juan Pérez, Dra. María González",
    resumen: "Este estudio explora las últimas aplicaciones de la IA en el diagnóstico médico...",
    fechaPublicacion: "2023-05-15",
    imagen: "https://example.com/ia-medicina.jpg"
  },
  {
    id: 2,
    titulo: "Descubrimiento de un Nuevo Exoplaneta Potencialmente Habitable",
    autores: "Dra. Ana Martínez, Dr. Carlos Rodríguez",
    resumen: "Investigadores han identificado un nuevo exoplaneta en la zona habitable de su estrella.asdasdasdasdsadasdasasdasd..",
    fechaPublicacion: "2023-06-22",
    imagen: "https://example.com/exoplaneta.jpg"
  },
  {
    id: 3,
    titulo: "Impacto del Cambio Climático en los Ecosistemas Marinos",
    autores: "Dr. Luis Sánchez, Dra. Elena Torres",
    resumen: "Un estudio exhaustivo sobre cómo el calentamiento global está afectando la biodiversidad marina...",
    fechaPublicacion: "2023-07-10",
    imagen: "https://example.com/ecosistemas-marinos.jpg"
  },
  // Puedes agregar más artículos aquí
];

export default function VistaArticulos() {
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articulos.filter(articulo =>
    articulo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    articulo.autores.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Artículos Científicos</h1>
      
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Buscar artículos..."
          className="w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {filteredArticles.map((articulo) => (
        <motion.div
          key={articulo.id}
          className="bg-white shadow-md rounded-lg mb-4 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{articulo.titulo}</h2>
                <p className="text-gray-600 mb-2">{articulo.autores}</p>
                <p className="text-sm text-gray-500">Publicado el: {articulo.fechaPublicacion}</p>
              </div>
              <img
                src={articulo.imagen}
                alt={articulo.titulo}
                className="w-24 h-24 object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-gray-700">
              {expandedArticle === articulo.id
                ? articulo.resumen
                : `${articulo.resumen.substring(0, 100)}...`}
            </p>
            <button
              className="mt-2 text-indigo-600 hover:text-indigo-800 flex items-center"
              onClick={() => setExpandedArticle(expandedArticle === articulo.id ? null : articulo.id)}
            >
              {expandedArticle === articulo.id ? (
                <>
                  <span>Ver menos</span>
                  <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  <span>Ver más</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}