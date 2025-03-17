import React, { useEffect, useState, useMemo } from "react";
import { FaBox, FaTruck, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import "../styles/components/TrackingStatus.css";

const TrackingStatus = ({ estado }) => {
  const estados = useMemo(() => ["Deposito", "En Ruta", "Camino a Destino", "Entregado"], []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = estados.indexOf(estado);
    setActiveIndex(index);
  }, [estado, estados]);

  const obtenerClaseIcono = (index) => {
    return index <= activeIndex ? "activo" : "inactivo";
  };

  return (
    <div className="tracking-status">
      {estados.map((estadoActual, index) => (
        <React.Fragment key={estadoActual}>
          <div
            className={`estado ${obtenerClaseIcono(index)}`}
            style={{
              animationDelay: `${index * 1}s`,
              animationDuration: "1s",
            }}
          >
            {index === 0 && <FaBox className="icono" />}
            {index === 1 && <FaTruck className="icono" />}
            {index === 2 && <FaMapMarkerAlt className="icono" />}
            {index === 3 && <FaCheck className="icono" />}
            <h5>{estadoActual}</h5>
          </div>
          {index < estados.length - 1 && (
            <div
              className={`linea ${obtenerClaseIcono(index + 1)}`}
              style={{
                animationDelay: `${index * 1}s`,
                animationDuration: "2s",
              }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TrackingStatus;
