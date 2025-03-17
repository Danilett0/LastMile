import React from "react";
import "../styles/components/Loading.css";

function Loading() {
  return (
    <div className="loading">
      <img className="ImgLoading" src="/images/Logo_LastMile.jpg" alt="Cargando Contenido" />
      <div className="loading-text">
        Cargando<span className="loading-dot"> .</span><span className="loading-dot"> .</span><span className="loading-dot"> .</span>
      </div>
    </div>
  );
}

export default Loading;
