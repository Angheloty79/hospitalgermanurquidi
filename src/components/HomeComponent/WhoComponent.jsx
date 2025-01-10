import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};
import s1 from "../../Imgs/Portada/P1.JPG";


export default function HospitalPage() {
  return (
    <div className="bg-stone-100 min-h-screen">
      

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Quienes Somos
          </h2>
          <div className="bg-stone-50 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-slate-600">
              Antecedentes
            </h3>
            <div className="md:flex items-start">
              <img
                src={s1}
                alt="Hospital Materno Infantil en sus inicios"
                className="w-full md:w-1/3 rounded-lg mb-4 md:mr-4"
              />
              <div>
                <p className="text-slate-700 mb-4">
                  El Hospital Materno Infantil "Germán Urquidi" fue fundado en
                  1923 por el Dr. Germán Urquidi, inicialmente con una
                  infraestructura modesta que consistía en dos salas pequeñas
                  para la recepción de pacientes y una sala grande conocida como
                  "Galpón" destinada a la internación de madres. En sus primeros
                  años, el hospital ofrecía servicios básicos de sala de partos,
                  atención clínica y cuidado prenatal, cumpliendo un rol
                  fundamental en la atención materna de la comunidad durante 16
                  años.
                </p>
                <p className="text-slate-700 mb-4">
                  A medida que la demanda de servicios creció, el Dr. Germán
                  Urquidi impulsó la construcción de un nuevo hospital materno
                  independiente del Hospital Viedma, enfrentando numerosas
                  dificultades para obtener los fondos necesarios. Finalmente,
                  logró la autorización del poder ejecutivo el 6 de diciembre de
                  1948, gracias a la Ley del 20 de mayo de 1947 destinada a la
                  construcción de hospitales. El Banco Central de Bolivia
                  desembolsó 200 millones de bolivianos para este proyecto,
                  permitiendo el inicio de las obras ese mismo año.
                </p>
                <p className="text-slate-700 mb-4">
                  Tras el fallecimiento del Dr. Urquidi en 1953, el gobierno,
                  reconociendo su incansable labor, firmó una resolución suprema
                  para que la maternidad llevara su nombre. El 27 de mayo de ese
                  año, en conmemoración del Día de la Madre, se oficializó la
                  nominación del hospital como "Materno Infantil Germán Urquidi"
                  con la colocación de una placa en su honor.
                </p>
                <p className="text-slate-700 mb-4">
                  El crecimiento poblacional y la alta demanda de servicios
                  materno-infantiles llevaron a la construcción de un nuevo
                  hospital moderno, inaugurado el 18 de diciembre de 2004, con
                  financiamiento del gobierno de Japón. Este nuevo edificio
                  reemplazó a la antigua infraestructura que ya resultaba
                  insuficiente para atender a la creciente cantidad de
                  pacientes.
                </p>
                <p className="text-slate-700">
                  Hoy en día, el Hospital Materno Infantil "Germán Urquidi" es
                  una institución de tercer nivel especializada en Ginecología y
                  Obstetricia, con capacidad para resolver casos de alta
                  complejidad. Ofrece servicios que van desde la promoción y
                  prevención hasta la atención ambulatoria, hospitalización,
                  curación y rehabilitación, además de contribuir a la
                  investigación médica. Es el hospital materno más importante de
                  Bolivia, atendiendo a pacientes de todo el país, y forma parte
                  de la Red de Servicios de Salud de Cochabamba bajo la
                  administración del Servicio Departamental de Salud (SEDES).
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-600">
                Visión
              </h3>
              <img
                src={s1}
                alt="Representación de la visión del hospital"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-slate-700">
                El Hospital Materno Infantil "Germán Urquidi" tiene la visión de
                alcanzar el mayor nivel de excelencia en la atención Obstétrica,
                Neonatal y Ginecológica, constituyéndose en un Hospital piloto,
                en la aplicación de los programas de salud e implementación de
                políticas tendientes a obtener la seguridad y confiabilidad
                plena de la población.
              </p>
            </div>
            <div className="bg-stone-50 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-600">
                Misión
              </h3>
              <img
               src={s1}
                alt="Representación de la misión del hospital"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-slate-700">
                El Hospital Materno Infantil Germán Urquidi brinda una atención
                oportuna, eficiente y eficaz con calidad, calidez y respeto
                dentro del marco de la interculturalidad derecho a la salud,
                para el vivir bien de las madres, adolescentes y sus recién
                nacidos, procurando la recuperación y rehabilitación, con
                disminución de la morbilidad y mortalidad materna y neonatal.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" animate="visible" variants={slideIn}>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Personal del H.M.I.G.U.
          </h2>
          <div className="bg-stone-50 shadow-lg rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <img
                src={s1}
                alt="Doctor del Hospital"
                className="w-full rounded-lg"
              />
              <img
                src={s1}
                alt="Enfermera del Hospital"
                className="w-full rounded-lg"
              />
              <img
                src={s1}
                alt="Equipo médico del Hospital"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <p className="text-slate-700 mb-4">
                El Hospital Materno Infantil Germán Urquidi cuenta con un equipo
                altamente capacitado de profesionales médicos especializados y
                subespecializados, dedicados a ofrecer atención integral y de
                alta calidad a mujeres, embarazadas, fetos en desarrollo y
                recién nacidos. La atención se centra en garantizar el bienestar
                de las pacientes durante todo el proceso de gestación, parto y
                postparto.
              </p>
              <p className="text-slate-700 mb-4">
                Además, el hospital dispone de un sólido equipo técnico que
                respalda las atenciones médicas, asegurando que cada servicio se
                realice de manera eficiente y se cumplan con los procedimientos
                administrativos necesarios. Este equipo también se encarga de
                coordinar con otros establecimientos intermunicipales y
                departamentales para garantizar la continuidad de la atención.
              </p>
              <p className="text-slate-700">
                El Hospital Materno Infantil Germán Urquidi genera ingresos
                mensuales promedio de entre 300.000 y 350.000 bolivianos, los
                cuales son destinados a la mejora continua del equipamiento e
                infraestructura. Estos recursos permiten fortalecer la capacidad
                del hospital para atender a la creciente población cochabambina,
                asegurando que el hospital se mantenga como un referente en la
                atención materno-infantil a nivel departamental y nacional.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
