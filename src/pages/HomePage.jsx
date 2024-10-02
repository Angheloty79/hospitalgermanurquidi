import { useEffect, useState } from "react";
import CarsServise from "../components/HomeComponent/CardServiceComponent";
import InfoCardHospital from "../components/HomeComponent/InfoHospitalComponent";
import Portada from "../components/HomeComponent/PortadaComponent";
import portadaimg from "../Imgs/Portada/P1.JPG";
import { motion, AnimatePresence } from "framer-motion";
import PortadaHome from "../components/HomeComponent/PortadaHome";

import p1 from "../Imgs/Portada/P1.JPG";
import p2 from "../Imgs/Portada/P2.JPG";
import p3 from "../Imgs/Portada/P3.JPG";
import p4 from "../Imgs/Portada/P4.JPG";

import s1 from "../Imgs/ServiciosInfo/s1.JPG";
import s2 from "../Imgs/ServiciosInfo/s2.JPG";
import s3 from "../Imgs/ServiciosInfo/s3.JPG";
import s4 from "../Imgs/ServiciosInfo/s4.JPG";

import n1 from "../Imgs/NosotrosInfo/n1.JPG";
import n2 from "../Imgs/NosotrosInfo/n2.JPG";
import n3 from "../Imgs/NosotrosInfo/n3.JPG";
import n4 from "../Imgs/NosotrosInfo/n4.JPG";

const nuetrosServiso = [
  {
    name: "Servicios Gratuitos",
    description:
      "Todos los procesos de atención en el Hospital Materno Infantil Germán Urquidi (H.M.I.G.U.) son gratuitos para la población registrada en el Sistema Único de Salud (SUS).",
  },
  {
    name: "Requisitos",
    description:
      "Para ser atendido, se necesita el registro previo en el SUS presentando la cédula de identidad en un servicio de salud cercano.",
  },
  {
    name: "Emergencias",
    description:
      "Las emergencias pueden ser atendidas directamente en establecimientos de tercer nivel, sin necesidad de referencia.",
  },
  {
    name: "Equipo Médico",
    description:
      "El hospital cuenta con médicos especializados y subespecializados que brindan atención integral y de alta calidad a mujeres, embarazadas, fetos y recién nacidos.",
  },
  {
    name: "Apoyo Técnico",
    description:
      "Un equipo técnico gestiona y coordina las atenciones y descargos ante establecimientos intermunicipales y departamentales.",
  },
  {
    name: "Financiamiento",
    description:
      "El hospital genera entre 300.000 y 350.000 bolivianos mensuales, destinados a mejorar equipamiento e infraestructura para la población cochabambina.",
  },
];

const sobreNosotros = [
  {
    name: "Red de Servicios y Dependencia Gubernamental",
    description:
      "El hospital forma parte de la Red de Servicios de Salud del departamento de Cochabamba y está bajo la jurisdicción del Servicio Departamental de Salud (SEDES). Esto implica que depende administrativamente de la Gobernación de Cochabamba, según la normativa vigente.",
  },
  {
    name: "Reconocimiento Nacional",
    description:
      "El hospital es reconocido como el principal Hospital Materno del país debido a su historia, desarrollo y prestigio. Aunque está ubicado en Cochabamba, recibe pacientes referidos de todo el país, siendo el centro de referencia en materna y ginecológica a nivel nacional.",
  },
  {
    name: "Historia y Formación de Especialistas",
    description:
      "Con una trayectoria de 65 años, el hospital ha sido un pilar en la formación de especialistas. Hace 42 años que se dedica a formar ginecoobstetras y sub-especialistas en neonatología. Además, muchos de sus ex residentes forman parte de su actual equipo médico.",
  },
  {
    name: "Integración con la Universidad",
    description:
      "El hospital está incluido en el Convenio de Integración Docente Asistencial, colaborando con la Universidad Mayor de San Simón para la formación de estudiantes de pregrado y posgrado. Esto refuerza su compromiso con la educación médica, siendo un centro de formación tanto para futuros médicos como especialistas.",
  },
];
const slides = [
  {
    img: p1,
    title: "Atención las 24 horas",
    description: "Atendemos día y noche para tu seguridad.",
  },
  {
    img: p2,
    title: "Equipos Médicos",
    description: "Equipos de última tecnología a tu servicio.",
  },
  {
    img: p3,
    title: "Cuidados Intensivos",
    description: "Estamos contigo en los momentos más críticos.",
  },
  {
    img: p4,
    title: "Inovacion En Cuidados Medicos",
    description: "Estamos contigo en los momentos más críticos.",
  },
];

const SeveInfimg = [{ img: s1 }, { img: s2 }, { img: s3 }, { img: s4 }];
const JobInfimg = [{ img:  n1 }, { img: n2 }, { img: n3 }, { img: n4 }];
export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar la diapositiva automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Cambia la duración aquí (3000ms = 3 segundos)

    return () => clearInterval(interval); // Limpiar intervalo cuando el componente se desmonta
  }, []);

  return (
    <>
      <PortadaHome />
      <div className="relative   overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            <Portada
              img={slides[currentIndex].img}
              title={slides[currentIndex].title}
              Description={slides[currentIndex].description}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <InfoCardHospital
        features={nuetrosServiso}
        info="Nuestro Sevicios"
        dataimg={SeveInfimg}
        parafo="Todos los procesos de atención son totalmente gratuitos para la población registrada en el SUS, siendo los siguientes los requisitos para ser atendidos:"
      />
      <InfoCardHospital
        features={sobreNosotros}
        info="Nuestro Trabajo"
        dataimg={JobInfimg}
        parafo="El Hospital Materno Infantil “Germán Urquidi” es un centro de salud de tercer nivel especializado en Ginecología y Obstetricia. Su enfoque está dirigido a mujeres mayores de 19 años, brindando atención en áreas de alta complejidad. Desarrolla actividades de promoción, prevención, atención ambulatoria y hospitalización, así como curación, rehabilitación e investigación."
      />
    </>
  );
}
