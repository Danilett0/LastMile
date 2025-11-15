import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components/PrincipiosAccordion.css";

const PrincipiosAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const principios = [
    {
      titulo: "Orientación al Cliente",
      descripcion:
        "Colocamos a nuestros clientes en el centro de todo lo que hacemos. Escuchamos sus necesidades, anticipamos sus expectativas y nos esforzamos por superar sus expectativas en cada interacción y entrega.",
    },
    {
      titulo: "Eficiencia y Puntualidad",
      descripcion:
        "Nos comprometemos a ofrecer entregas rápidas y precisas. Utilizamos tecnología avanzada y procesos optimizados para garantizar que cada paquete llegue a su destino a tiempo y en perfectas condiciones.",
    },
    {
      titulo: "Innovación Continua",
      descripcion:
        "Fomentamos una cultura de innovación y mejora continua. Buscamos constantemente nuevas formas de mejorar nuestros procesos, adoptar tecnologías emergentes y ofrecer soluciones más efectivas y eficientes.",
    },
    {
      titulo: "Sostenibilidad y Responsabilidad Ambiental",
      descripcion:
        "Adoptamos prácticas sostenibles para minimizar nuestro impacto ambiental. Desde el uso de vehículos ecológicos hasta la optimización de rutas, nos esforzamos por ser responsables con el medio ambiente y apoyar el desarrollo sostenible.",
    },
    {
      titulo: "Integridad y Transparencia",
      descripcion:
        "Operamos con honestidad y transparencia en todas nuestras acciones. Nos aseguramos de que nuestros clientes, empleados y socios conozcan claramente nuestras políticas, prácticas y el estado de sus entregas.",
    },
    {
      titulo: "Compromiso con el Equipo",
      descripcion:
        "Valoramos a nuestro equipo y promovemos un ambiente de trabajo inclusivo y respetuoso. Invertimos en el desarrollo profesional y el bienestar de nuestros empleados, reconociendo que su éxito es el nuestro.",
    },
    {
      titulo: "Seguridad y Calidad",
      descripcion:
        "Garantizamos la seguridad de nuestros envíos y la calidad de nuestros servicios. Implementamos rigurosas medidas de seguridad y control de calidad para proteger tanto a nuestros clientes como a nuestros empleados.",
    },
    {
      titulo: "Colaboración y Trabajo en Equipo",
      descripcion:
        "Fomentamos un espíritu de colaboración y trabajo en equipo dentro de la empresa y con nuestros socios externos. Creemos que el éxito se logra mejorando juntos y compartiendo conocimientos y recursos.",
    },
    {
      titulo: "Adaptabilidad y Flexibilidad",
      descripcion:
        "Nos adaptamos a los cambios del mercado y a las necesidades de nuestros clientes con flexibilidad y rapidez. Estamos preparados para enfrentar desafíos y aprovechar oportunidades para ofrecer el mejor servicio posible.",
    },
    {
      titulo: "Responsabilidad Social",
      descripcion:
        "Nos comprometemos a contribuir positivamente a nuestras comunidades y a actuar con responsabilidad social. Apoyamos iniciativas locales y participamos en actividades que beneficien a la sociedad.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="principios-accordion">
      <h2>Nuestros Principios</h2>
      <div className="accordion-container">
        {principios.map((principio, index) => (
          <motion.div
            key={index}
            className="accordion-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: index * 0.1 },
            }}
            viewport={{ once: true }}
          >
            <button
              className={`accordion-header ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-number">{index + 1}</span>
              <h3>{principio.titulo}</h3>
              <motion.span
                className="accordion-icon"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{principio.descripcion}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrincipiosAccordion;