import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { clientes, settingsCarrusel, AccionesPortal } from "../Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/CarruselClientes.css";

function CarruselClientes({ Data = {} }) {
  let datos = {};
  let EsCliente = false;

  if (Data === "Clientes") {
    datos = clientes;
    settingsCarrusel.slidesToShow = 4;
    EsCliente = true;
    settingsCarrusel.dots = true;
  } else {
    datos = AccionesPortal;
    settingsCarrusel.dots = false;
    settingsCarrusel.slidesToShow = 1;
  }

  return (
    <motion.div
      className={Data === "Clientes" ? "BoxClientes" : "BoxAcciones"}
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 1, delay: "0.5" } }}
    >
      {EsCliente && <h2>Nuestros Clientes</h2>}
      <Slider
        {...settingsCarrusel}
        className={Data === "Clientes" ? "BoxLogos" : "BoxIconos"}
      >
        {Array.isArray(datos) &&
          datos.length > 0 &&
          datos.map((dato) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { duration: 0.5, delay: "0.5" },
              }}
              // whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={dato.id}
              className={Data === "Clientes" ? "BoxCliente" : "BoxAccion"}
            >
              <img src={dato.src} alt={dato.alt} />
              {EsCliente ? <p>{dato.alt}</p> : <p>{dato.accion}</p>}
            </motion.div>
          ))}
      </Slider>
    </motion.div>
  );
}

export default CarruselClientes;
