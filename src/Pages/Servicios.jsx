import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
import ScrollProgres from "../Components/ScrollProgres";
import useLoading from "../Hooks/useLoading";
import "../App.css";
import "../styles/pages/Servicios.css";

function Servicios() {
  const loadingPage = useLoading("Servicios", 300);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Last Mile - Servicios</title>
            <meta
              name="description"
              content="una corta description de la pagina"
            />
            <meta name="keywords" content="palabras clave para esta pagina" />
            <link rel="canonical" href="https://www.dominio.com/Servicios" />

            {/* Etiquetas Open Graph */}
            <meta property="og:title" content="titulo de la pagina" />
            <meta
              property="og:description"
              content="description corta de la pagina"
            />
            <meta property="og:image" content="<URL>" />
            <meta property="og:url" content="<URL>" />
          </Helmet>

          <main className="Servicios">
            <div className="BoxEncabezado">
              <motion.div
                className="BoxIntro"
                initial={{ opacity: 0, left: -1000 }}
                animate={{
                  opacity: 1,
                  left: 0,
                  transition: { duration: 1.5, delay: 0 },
                }}
              >
                <motion.img
                  className="BackGround2"
                  src="images/servicios/asset3.svg"
                  alt=""
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "250px",
                    left: -110,
                    top: -90,
                    transform: "rotate(90deg)",
                    transition: { duration: 1, delay: 2.5 },
                  }}
                />

                <h1>Nuestros Servicios</h1>
                <p>
                  En{" "}
                  <b>
                    <motion.span
                      className="Mayus"
                      animate={{
                        color: "var(--amarillo-oscuro)",
                        transition: { duration: 0.8, delay: 1 },
                      }}
                    >
                      {" "}
                      Last{" "}
                    </motion.span>{" "}
                    <span className=" Mayus"> Mile</span>
                  </b>
                  , ofrecemos servicios logísticos variados y personalizados
                  para cumplir tus necesidades, con un enfoque en proporcionar
                  un servicio excepcional y eficiente. Nos dedicamos a ayudarte
                  a llevar tu negocio al siguiente nivel.
                </p>
              </motion.div>
              <motion.div
                className="BoxVideo"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.6 },
                  x: [0, 100, 0],
                }}
              >
                <motion.img
                  src="/images/Servicios/exp.jpg"
                  alt=""
                  animate={{
                    scale: [1, 1.1, 1, 1],
                    rotate: [0, 0, 6, 3, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 1],
                    repeat: 1,
                    delay: 1.5,
                  }}
                />
              </motion.div>
            </div>

            <div className="BoxServicios">
              <div className="Servicio">
                <motion.div
                  className="Imagen"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: -80,
                    transition: { duration: 1.3 },
                    opacity: 1,
                    scale: 1,
                  }}
                ></motion.div>

                <motion.div
                  className="Contenido ContPaddingLeft"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    transition: { duration: 0.1 },
                    opacity: 1,
                  }}
                >
                  <motion.img
                    className="BackGround"
                    src="images/servicios/asset.svg"
                    alt=""
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "350px",
                      transition: { duration: 1, delay: 2 },
                    }}
                  />

                  <h2>Picking</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </motion.div>
              </div>

              <div className="Servicio Revert">
                <motion.div
                  className="Imagen"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: -80,
                    transition: { duration: 1.3 },
                    opacity: 1,
                    scale: 1,
                  }}
                ></motion.div>

                <motion.div
                  className="Contenido"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <motion.img
                    className="BackGround2"
                    src="images/servicios/asset2.svg"
                    alt=""
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "500px",
                      transition: { duration: 1, delay: 2 },
                    }}
                  />
                  <h2>Packing</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </motion.div>
              </div>

              <div className="Servicio">
                <motion.div
                  className="Imagen"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: -80,
                    transition: { duration: 1.3 },
                    opacity: 1,
                    scale: 1,
                  }}
                ></motion.div>

                <motion.div
                  className="Contenido ContPaddingLeft"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <motion.img
                    className="BackGround"
                    src="images/servicios/asset.svg"
                    alt=""
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "400px",
                      transform: "rotate(-30deg)",
                      transition: { duration: 1, delay: 2 },
                    }}
                  />
                  <h2>Tracking</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </motion.div>
              </div>

              <div className="Servicio Revert">
                <motion.div
                  className="Imagen"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: -80,
                    transition: { duration: 1.3 },
                    opacity: 1,
                    scale: 1,
                  }}
                ></motion.div>

                <motion.div
                  className="Contenido"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <motion.img
                    className="BackGround2"
                    src="images/servicios/asset2.svg"
                    alt=""
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "500px",
                      transition: { duration: 1, delay: 2 },
                    }}
                  />
                  <h2>Fullfilment</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </motion.div>
              </div>

              <div className="Servicio">
                <motion.div
                  className="Imagen"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: -80,
                    transition: { duration: 1.3 },
                    opacity: 1,
                    scale: 1,
                  }}
                ></motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                  className="Contenido ContPaddingLeft"
                >
                  <motion.img
                    className="BackGround"
                    src="images/servicios/asset.svg"
                    alt=""
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "400px",
                      transform: "rotate(-30deg)",
                      transition: { duration: 1, delay: 2 },
                    }}
                  />
                  <h2>Last Mile</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </motion.div>
              </div>
            </div>
            <ScrollProgres></ScrollProgres>
          </main>
        </>
      )}
    </>
  );
}

export default Servicios;
