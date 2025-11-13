import { useState } from "react";
import { Helmet } from "react-helmet";
import Loading from "../Components/Loading";
import useLoading from "../Hooks/useLoading";
import { FaFilePdf } from "react-icons/fa6";
import TrackingStatus from "../Components/TrackingStatus";
import "../App.css";
import "../styles/pages/RastrearGuia.css";

function RastrearGuia(props) {
  const loadingPage = useLoading("RastrearGuia", 300);
  const [guia, setGuia] = useState("");
  const [error, setError] = useState(null);
  const [resultado, setResultado] = useState(null);

  const manejarCambio = (e) => {
    setError(null);
    setGuia(e.target.value);
  };

  const previenirEspacios = (e) => {
  if (e.key === ' ') {
    e.preventDefault();
  }
};

  const buscarGuia = async () => {
    setError("Un momento, por favor...");

    if (!guia.trim()) {
      setError("Por favor ingrese un numero de guia");
      return;
    }

    try {
      const response = await fetch(
        `https://api.tusitio.com/buscar?guia=${guia}`
      );
      const data = await response.json();
      if (data) {
        setResultado(data);
      } else {
        setError("No se ha encontrado informacion de esta guía");
      }
    } catch (error) {
      setError("No se ha encontrado informacion de esta guía");
    }
  };

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Last Mile - Rastrear Guia</title>
            <meta
              name="description"
              content="una corta description de la pagina"
            />
            <meta name="keywords" content="palabras clave para esta pagina" />
            <link
              rel="canonical"
              href="https://www.lastmile.com/RastrearGuia"
            />

            {/* Etiquetas Open Graph */}
            <meta property="og:title" content="Rastrear Guia" />
            <meta
              property="og:description"
              content="description corta de la pagina"
            />
            <meta property="og:image" content="<URL>" />
            <meta property="og:url" content="<URL>" />
          </Helmet>

          <main className="RastrearGuia">
            <div className="BoxSearch">
              <div className="Img">
                <img src="/images/RastrearGuia/rastrear.png" alt="" />
              </div>

              <div className="Search">
                <input
                  type="text"
                  placeholder="Ingrese el numero de su guia"
                  value={guia}
                  onChange={manejarCambio}
                  onKeyDown={previenirEspacios}
                />
                <button className="Button" onClick={buscarGuia}>
                  Buscar
                </button>
              </div>
            </div>

            {resultado && (
              <div className="Resultado">
                <h2 className="">Estado actual de su pedido </h2>

                <div className="Iconos">
                  <TrackingStatus estado={guia} />
                </div>

                <h2 className="Informacion">
                  Obtenga Información detallada de su pedido{" "}
                </h2>

                <div className="UltimoSeguimiento">
                  <div>
                    <span>Ciudad Destino</span>
                    <h2>Bogota</h2>
                    <span>Conductor: Jeferson Castro</span>
                  </div>
                  <div>
                    <span>Direccion</span>
                    <h2>Calle 2 # 89 - 35</h2>
                    <span>
                      Calle 2 # 89 - 35 manzana 13 casa 117 portales en
                      primavera
                    </span>
                  </div>
                  <div>
                    <span>Estado</span>
                    <h2>Entregado</h2>
                    <span>Fecha: 2024-12-16</span>
                  </div>
                  <div className="Imagenes">
                    <span>Evidencia Fotografica</span>
                    <div>
                      <a href="images/Logo_LastMile.jpg" target="_blank">
                        {" "}
                        <img src="images/Logo_LastMile.jpg" alt="" />
                      </a>
                      <a href="images/Logo_LastMile.jpg" target="_blank">
                        {" "}
                        <img src="images/Logo_LastMile.jpg" alt="" />
                      </a>
                      <a href="images/Logo_LastMile.jpg" target="_blank">
                        {" "}
                        <img src="images/Logo_LastMile.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="Adjuntos">
                    <span>Archivos</span>
                    <a href="images/Logo_LastMile.jpg" target="_blank">
                      <FaFilePdf className="PDF" />
                    </a>
                  </div>
                </div>

                <div className="OtrosSeguimientos"></div>
              </div>
            )}

            {error && (
              <div className="Error">
                <h3>{error}</h3>
              </div>
            )}
          </main>
        </>
      )}
    </>
  );
}

export default RastrearGuia;
