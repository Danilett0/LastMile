import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import "../App.css";
import "../styles/pages/Conocenos.css";

function Portafolio() {
  const loadingPage = useLoading("conocenos", 300);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>
              Last Mile - Conocenos
            </title>
            <meta
              name="description"
              content="descripcion corta general del la pagina"
            />
            <meta
              name="keywords"
              content="descripcion corta del la pagina para metadata palabras clave"
            />
            <link rel="canonical" href="https://www.dominio.com/conocenos" />
          </Helmet>

          <main className="Conocenos">
            <motion.div
              className="BoxCabecera"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
              <motion.div
                initial={{ right: -700, opacity: 0, scale: 0 }}
                animate={{
                  right: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.2, delay: 0.5 },
                }}
              >
                <div className="BoxIntroCabecera">
                  <h1>
                    Nuestro Equipo de Excelencia en{" "}
                    <span className="AmarilloScuro Mayus">Last</span>
                    <span className=" Mayus"> Mile</span>
                  </h1>
                  <p>
                    En{" "}
                    <b>
                      <span className="AmarilloScuro Mayus">Last</span>{" "}
                      <span className=" Mayus"> Mile</span>
                    </b>
                    , nos especializamos en ofrecer servicios logísticos
                    rápidos, eficientes y de confianza. Nuestra experiencia
                    garantiza que tus envíos lleguen a su destino de manera
                    segura y puntual.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="BoxEquipo">
              <h2>Descubre al equipo que hace la diferencia</h2>

              <div className="BoxColaboradores">
                <motion.div
                  className="CardColaborador"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>Tom Adams</h3>
                  <p>Gerente Financiero</p>
                </motion.div>

                <motion.div
                  className="CardColaborador"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>Tom Adams</h3>
                  <p>Gerente Financiero</p>
                </motion.div>

                <motion.div
                  className="CardColaborador"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>Tom Adams</h3>
                  <p>Gerente Financiero</p>
                </motion.div>
              </div>

              <div className="BoxColaboradores">
                <motion.div
                  className="CardColaborador"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>Tom Adams</h3>
                  <p>Gerente Financiero</p>
                </motion.div>

                <motion.div
                  className="CardColaborador"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>Tom Adams</h3>
                  <p>Gerente Financiero</p>
                </motion.div>
                <motion.div
                  className="CardColaborador"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>Tom Adams</h3>
                  <p>Gerente Financiero</p>
                </motion.div>
              </div>
            </div>

            <div className="BoxPoliticas">
              <h2>Comprometidos con la Excelencia</h2>
              <p>
                Nos enorgullece implementar políticas que garantizan la calidad
                y seguridad en todos nuestros procesos. Descubre nuestras
                principales políticas
              </p>

              <div className="CardsPoliticas">
                <motion.div
                  className="Card"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    transition: { duration: 0.3, delay: 0.5 },
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <img src="./images/Conocenos/badge.png" alt="" />
                  <h3>Politica de Calidad</h3>
                </motion.div>
                <motion.div
                  className="Card"
                  initial={{ opacity: 0, scale: 0.2 }}
                  whileInView={{
                    transition: { duration: 0.3 },
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <img src="./images/Conocenos/shield.png" alt="" />
                  <h3>Politica SST</h3>
                </motion.div>
                <motion.div
                  className="Card"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    transition: { duration: 0.3, delay: 0.5 },
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <img src="./images/Conocenos/safety-barrier.png" alt="" />
                  <h3>Politica de seguridad Vial</h3>
                </motion.div>
              </div>

              <div className="CardsPoliticas">
                <motion.div
                  className="Card"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    transition: { duration: 0.3, delay: 1 },
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <img src="./images/Conocenos/employee.png" alt="" />
                  <h3>Politica protección datos Personales</h3>
                </motion.div>
                <motion.div
                  className="Card"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    transition: { duration: 0.3, delay: 1 },
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <img src="./images/Conocenos/customer-care.png" alt="" />
                  <h3>PQRS</h3>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="BoxRedes"
              initial={{ left: -50, scale: 0 }}
              animate={{
                left: 0,
                scale: 1,
                transition: { duration: 0.8, delay: 0.5 },
              }}
            >
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/Logos/facebook.png" alt="Escudo" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/Logos/instagram.png" alt="Escudo" />
              </a>

              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/Logos/whatsapp.png" alt="Escudo" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/Logos/linkedin.png" alt="Escudo" />
              </a>
            </motion.div>
          </main>
        </>
      )}
    </>
  );
}

export default Portafolio;
