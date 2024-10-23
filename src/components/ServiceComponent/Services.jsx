import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

// Importa las imágenes
import ginecologiaImg from '../../Imgs/ImgServices/IMG_6017.JPG';
import obstetriciaImg from '../../Imgs/ImgServices/IMG_6411.JPG';
import oncologiaImg from '../../Imgs/ImgServices/IMG_6713.JPG';
import maternoFetalImg from '../../Imgs/ImgServices/IMG_6410.JPG';
import neonatologiaImg from '../../Imgs/ImgServices/IMG_6209.JPG';
import cardiologiaImg from '../../Imgs/ImgServices/IMG_6585.JPG';
import medicinaDolorImg from '../../Imgs/ImgServices/IMG_6570.JPG';
import odontologiaImg from '../../Imgs/ImgServices/IMG_6192.JPG';
import fisioterapiaImg from '../../Imgs/ImgServices/IMG_6540.JPG';
import nutricionImg from '../../Imgs/ImgServices/IMG_6826.JPG';
import psicologiaImg from '../../Imgs/ImgServices/IMG_6600.JPG';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Inicializa useNavigate

  const slides = [
    { title: 'Ginecología', description: 'Atención integral a la mujer con patologías relacionadas con los órganos femeninos como el útero, la vagina y los ovarios, además de la prevención de enfermedades futuras.', image: ginecologiaImg },
    { title: 'Obstetricia', description: 'Atención integral a la mujer durante el parto y el puerperio, incluidas las situaciones de riesgo que requieren intervención quirúrgica.', image: obstetriciaImg },
    { title: 'Oncología', description: 'Diagnóstico y tratamiento del cáncer identificado en la mujer. Las acciones incluyen tratamiento en base a quimioterapia y cirugía referencia de pacientes para Radioterapia a la cuidad de La Paz.', image: oncologiaImg },
    { title: 'Materno Fetal', description: 'Subespecialidad que se encarga del manejo de los problemas de salud de la madre y el feto en el útero durante el embarazo, apoyados por ecografías de alta calidad.', image: maternoFetalImg },
    { title: 'Neonatología', description: 'Subespecialidad que se ocupa del Diagnóstico y tratamiento de recién nacidos con afecciones tales como trastornos respiratorios, infecciones y defectos congénitos entre otros', image: neonatologiaImg },
    { title: 'Cardiología Neonatal', description: 'Subespecialidad que busca el bienestar del RN con enfermedades del corazón', image: cardiologiaImg },
    { title: 'Medicina del dolor', description: 'Subespecialidad que busca el bienestar y cuidados de los enfermos con problemas de dolor por enfermedades como el cáncer y otros.', image: medicinaDolorImg },
    { title: 'Odontología', description: 'El HMIGU pone al servicio de la población en general prestaciones odontológicas integrales para el cuidado de la salud Oral.', image: odontologiaImg },
    { title: 'Fisioterapia', description: 'Ofrece tratamiento y rehabilitación física para diagnosticar, prevenir y tratar síntomas de múltiples patologías, tanto agudas como crónicas.', image: fisioterapiaImg },
    { title: 'Nutrición', description: 'Brinda soporte nutricional a pacientes internados', image: nutricionImg },
    { title: 'Psicología', description: 'Las acciones se centran en ayudar a las pacientes a expresarse y normalizar las reacciones emocionales frente al diagnóstico hasta al alta.', image: psicologiaImg },
  ];

  const itemsPerPage = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.floor(slides.length / itemsPerPage) * itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= slides.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const translateValue = -(currentIndex * (100 / itemsPerPage));

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Carrusel */}
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
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-1 p-4 flex flex-col items-center"
                style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
              >
                <div className="w-64 h-64 overflow-hidden rounded-md shadow-lg bg-white transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-800 mt-4">{slide.title}</h2>
                <p className="text-sm text-gray-600 text-center max-w-xs mt-2">{slide.description}</p>
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
        onClick={() => navigate('/crearServicios')} // Redirige a CreateServices
        className="mt-8 px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
      Agregar Servicio
      </button>

    </div>
  );
};

export default Services;