import React from 'react';

const FechaActual = () => {
  const obtenerFechaFormateada = () => {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear().toString().slice(-4);
    return `${dia} de ${mes} del ${anio}`;
  };

  return (
    <div>
      {obtenerFechaFormateada()}
    </div>
  );
};

export default FechaActual;
