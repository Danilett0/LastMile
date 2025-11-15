import { useState } from "react";
import { Helmet } from "react-helmet";
import Loading from "../Components/Loading";
import useLoading from "../Hooks/useLoading";
import { FaFilePdf } from "react-icons/fa6";
import TrackingStatus from "../Components/TrackingStatus";
import "../App.css";
import "../styles/pages/RastrearGuia.css";

function RastrearGuia() {
  const loadingPage = useLoading("RastrearGuia", 300);
  const [guia, setGuia] = useState("");
  const [error, setError] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [Estado, setEstado] = useState("DEPOSITO");

  const manejarCambio = (e) => {
    setError(null);
    setGuia(e.target.value);
  };

  const previenirEspacios = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const buscarGuia = async () => {
    setError("Un momento, por favor...");
    setResultado(null); // Limpiar resultado anterior

    if (!guia.trim()) {
      setError("Por favor ingrese un numero de guia");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("L-APIKEY", process.env.REACT_APP_API_KEY);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      guideNumber: guia.trim(),
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const Estadosextra = {
      approved: "ENTREGADO",
      rejected: "EN CAMINO",
      partial: "ENTREGADO",
      pending: "DEPOSITO",
    };

    fetch("http://tracking.lastmile.com.co/api/guias/buscar", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);

        // Verificar si hay estados ANTES de procesar
        if (!data.estados || data.estados.length === 0) {
          setError("No se encontraron registros para esta guía");
          setResultado(null);
          return;
        }

        data.estados = data.estados.reverse();
        setResultado(data);
        setError(null); // Mover esto DESPUÉS de verificar que hay datos

        const estado0 = data.estados[0];

        console.log("Estado más reciente:", estado0.motivo);
        if (estado0.motivo === "ENTREGADO") {
          setEstado(estado0.motivo);
        } else if (estado0?.cerca === "Si") {
          setEstado("EN CAMINO");
        } else {
          const clave = estado0.estado?.toLowerCase();
          console.log("Clave del estado:", clave);
          if (Estadosextra[clave]) {
            setEstado(Estadosextra[clave]);
          }
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Error al buscar la guía. Por favor intente nuevamente.");
        setResultado(null);
      });
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
            <div
              className={"BoxSearch " + (resultado ? " ResultadoActivo" : "")}
            >
              <div className="Search">
                <input
                  type="text"
                  placeholder="Ingrese numero guia"
                  value={guia}
                  onChange={manejarCambio}
                  onKeyDown={previenirEspacios}
                />
                <button className="Button" onClick={buscarGuia}>
                  Buscar
                </button>
              </div>
            </div>

            {resultado && !error && (
              <div className="Resultado">
                <h2 className="">Estado actual de su pedido </h2>

                <div className="Iconos">
                  <TrackingStatus estado={Estado} />
                </div>

                <h2 className="Informacion">
                  Obtenga Información detallada de su pedido{" "}
                </h2>

                {resultado?.estados?.length > 0 &&
                  resultado.estados.map((estado, index) => (
                    <div className="UltimoSeguimiento" key={index}>
                      <div>
                        <span>Ciudad Destino</span>
                        <h2>{estado.ciudad}</h2>
                        <span>Conductor: {estado.conductor}</span>
                      </div>

                      <div>
                        <span>Direccion</span>
                        <h2>{estado.direccion}</h2>
                        <span>{estado.dir_extra}</span>
                      </div>

                      <div>
                        <span>Estado</span>
                        <h2>
                          {estado.estado === "pending"
                            ? "PENDIENTE"
                            : estado.estado === "approved"
                            ? "ENTREGADO"
                            : estado.estado === "rejected"
                            ? "RECHAZADO"
                            : estado.motivo !== null
                            ? estado.motivo
                            : "SIN ESTADO"}
                        </h2>
                        {estado.estado === "rejected" && estado.motivo && (
                          <span>{estado.motivo}</span>
                        )}
                        <span>Fecha: {estado.llegada}</span>
                      </div>

                      {estado.images?.length > 0 && (
                        <div className="Imagenes">
                          <span>Evidencia Fotográfica</span>
                          <div>
                            {estado.images.map((imgUrl, idx) => (
                              <div key={idx}>
                                <a
                                  href={imgUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src={imgUrl}
                                    alt={`Evidencia ${idx + 1}`}
                                  />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {estado.pdf?.length > 0 && (
                        <div className="Adjuntos">
                          <span>Archivos</span>
                          <div>
                            <a
                              href={estado.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFilePdf className="PDF" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

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
