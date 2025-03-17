import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import FechaActual from "../Components/FechaActual";
import { Noticias } from "../Data/Noticias";
import "../App.css";
import "../styles/pages/News.css";

function News() {
  const loadingPage = useLoading("News", 300);

  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const buscarNoticiaPorId = (id) => {
    for (let noticia of Noticias) {
      if (noticia.principal.id === id) return noticia.principal;
      for (let secundaria of noticia.secundarias) {
        if (secundaria.id === id) return secundaria;
      }
      for (let otra of noticia.otras) {
        if (otra.id === id) return otra;
      }
    }
    return null;
  };

  const abrirPopUp = (id) => {
    const noticia = buscarNoticiaPorId(id);
    if (noticia) {
      setNoticiaSeleccionada(noticia);
      setMostrarPopUp(true);
    }
  };

  const cerrarPopUp = () => {
    setMostrarPopUp(false);
    setNoticiaSeleccionada(null);
  };

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Last Mile -  News</title>
            <meta
              name="description"
              content="Una corta descripción de la página"
            />
            <meta name="keywords" content="palabras clave para esta página" />
            <link rel="canonical" href="https://www.dominio.com/News" />

            {/* Etiquetas Open Graph */}
            <meta property="og:title" content="título de la página" />
            <meta
              property="og:description"
              content="descripción corta de la página"
            />
            <meta property="og:image" content="<URL>" />
            <meta property="og:url" content="<URL>" />
          </Helmet>

          <main className="News">
            <motion.div
              className="BoxCabecera"
              initial={{ opacity: 0 }}
              animate={{
                transition: { duration: 3 },
                opacity: 1,
              }}
            >
              <motion.div
                className="BoxIntroCabecera"
                initial={{ position: "absolute", left: "-50%" }}
                animate={{
                  left: 0,
                  position: "relative",
                  transition: { duration: 1 },
                }}
              >
                <h1>
                  Actualizaciones y Novedades de{" "}
                  <b>
                    <span className="AmarilloScuro Mayus">Last</span>{" "}
                    <span className="Mayus">Mile</span>
                  </b>
                </h1>
                <p>
                  Mantente al día con los últimos eventos y logros de{" "}
                  <b>
                    <span className="AmarilloScuro Mayus">Last</span>{" "}
                    <span className="Mayus">Mile</span>
                  </b>
                  . Descubre nuestras novedades y cómo seguimos innovando en
                  logística.
                </p>
                <dir className="BoxFecha">
                  <img src="./images/News/calendar.png" alt="calendario" />
                  <p>
                    <FechaActual />
                  </p>
                </dir>
              </motion.div>
            </motion.div>

            <div className="BoxNotDestacadas">
              <div className="BoxTitulo">
                <h2>Noticias Destacadas</h2>
                <div className="Line"></div>
              </div>

              <div className="BoxContenido">
                {Noticias.map((noticia) => (
                  <motion.div
                    key={noticia.principal.id}
                    className="NoticiaPrinsipal"
                    initial={{ opacity: 0 }}
                    whileInView={{
                      transition: { duration: 2, delay: 0.1 },
                      opacity: 1,
                    }}
                    style={{
                      backgroundImage: `linear-gradient(rgba(1, 15, 27, 0.301), hsla(0, 0%, 0%, 0.678)), url(${noticia.principal.imagen})`,
                    }}
                    onClick={() => abrirPopUp(noticia.principal.id)}
                  >
                    <h3>{noticia.principal.title}</h3>
                    <p>{noticia.principal.descripcionCorta}</p>
                  </motion.div>
                ))}

                <div className="OtrasNoticias">
                  {Noticias.map((noticia) => {
                    return noticia.secundarias.map((secundaria) => {
                      return (
                        <motion.div
                          key={secundaria.id}
                          className="Noticia"
                          initial={{ opacity: 0 }}
                          whileInView={{
                            transition: { duration: 2, delay: 0.2 },
                            opacity: 1,
                          }}
                          onClick={() => abrirPopUp(secundaria.id)}
                        >
                          <div className="Img">
                            <img src={secundaria.imagen} alt="" />
                          </div>
                          <div className="Text">
                            <h3>{secundaria.title}</h3>
                            <p>{secundaria.descripcionCorta}</p>
                          </div>
                        </motion.div>
                      );
                    });
                  })}
                </div>
              </div>
            </div>

            <div className="BoxOtrasNoticias">
              {Noticias.map((noticia) => {
                return noticia.otras.map((otra) => {
                  return (
                    <motion.div
                      key={otra.id}
                      className="BoxNoticia"
                      initial={{ opacity: 0 }}
                      whileInView={{
                        transition: { duration: 2, delay: 0.2 },
                        opacity: 1,
                      }}
                      style={{
                        backgroundImage: `linear-gradient(rgba(1, 15, 27, 0.301), hsla(0, 0%, 0%, 0.678)), url(${otra.imagen})`,
                      }}
                      onClick={() => abrirPopUp(otra.id)}
                    >
                      <h3>{otra.title}</h3>
                      <p>{otra.descripcionCorta}</p>
                    </motion.div>
                  );
                });
              })}
            </div>

            {mostrarPopUp && noticiaSeleccionada && (
              <div className="pop-up">
                <div className="pop-up-contenido">
                  <span className="cerrar" onClick={cerrarPopUp}>
                    ×
                  </span>

                  <img
                    src={noticiaSeleccionada.imagen}
                    alt={noticiaSeleccionada.title}
                  />

                  <h2>{noticiaSeleccionada.title}</h2>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: noticiaSeleccionada.contenido,
                    }}
                  />
                </div>
              </div>
            )}
          </main>
        </>
      )}
    </>
  );
}

export default News;
