import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import FormUnete from "../Components/FormularioContacto/FormUnete";
import FormAliado from "../Components/FormularioContacto/FormAliado";
import "../App.css";
import "../styles/pages/Unete.css";

function Unete() {
  const loadingPage = useLoading("Unete", 300);

  const [Form, SetForm] = useState({ unete: true, aliado: false });
  const CambioForm = () => {
    SetForm((prevForm) => ({
      unete: !prevForm.unete,
      aliado: !prevForm.aliado,
    }));
  };

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Last Mile -  Unete</title>
            <meta
              name="description"
              content="una corta description de la pagina"
            />
            <meta name="keywords" content="palabras clave para esta pagina" />
            <link rel="canonical" href="https://www.dominio.com/Unete" />

            {/* Etiquetas Open Graph */}
            <meta property="og:title" content="titulo de la pagina" />
            <meta
              property="og:description"
              content="description corta de la pagina"
            />
            <meta property="og:image" content="<URL>" />
            <meta property="og:url" content="<URL>" />
          </Helmet>

          <main className="Unete">
            <div className="BoxCabecera">
              <div className="Contenido">
                <motion.div
                  className="Text"
                  animate={{
                    opacity: [0.4, 0.7, 0.6, 0.8, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    ease: "easeOut",
                    times: [0.1, 0.5, 1],
                    repeat: 0,
                  }}
                >
                  <h1>
                    Únete al Equipo de{" "}
                    <b>
                      <span className="AmarilloScuro Mayus">Last</span>{" "}
                      <span className=" Mayus"> Mile</span>
                    </b>
                  </h1>
                  <p>
                    ¿Buscas un lugar donde tu talento marque la diferencia?,
                    valoramos la pasión, la innovación y el compromiso de cada
                    uno de nuestros colaboradores.{" "}
                  </p>{" "}
                  <p>
                    Sé parte de un equipo dinámico que redefine la logística con
                    cada paso. Construye tu futuro con{" "}
                    <b>
                      <span className="AmarilloScuro Mayus">Last</span>{" "}
                      <span className=" Mayus"> Mile.</span>
                    </b>
                  </p>
                </motion.div>
                <motion.div
                  className="Img"
                  animate={{
                    scale: [1, 1.1, 1, 1],
                    rotate: [-10, 0, 2, 0, 5],
                    opacity: [1, 0.5, 0, 0.5, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    ease: "easeOut",
                    times: [0.1, 0.5, 1],
                    opacity: 1,
                    repeat: 0,
                    delay: 0.5,
                  }}
                >
                  <motion.img
                    src="/images/Unete/mujer.png"
                    alt=""
                    initial={{ scale: 0.8 }}
                    whileInView={{
                      transition: { duration: 2 },
                      scale: 1,
                    }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="BoxDivisor">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <div className="BoxFormulario">
              <h2>Explora Nuestras Oportunidades</h2>
              <p>
                Descubre cómo puedes formar parte de{" "}
                <b>
                  <span className="AmarilloScuro Mayus">Last</span>{" "}
                  <span className=" Mayus"> Mile</span>
                </b>{" "}
                y contribuir a nuestro éxito.
              </p>

              <div className="CardSeleccionForm">
                <div className="MenuSeleccion">
                  <h3
                    className={Form.unete ? "active" : ""}
                    onClick={CambioForm}
                  >
                    Trabaja con nosotros
                  </h3>
                  <h3
                    className={Form.aliado ? "active" : ""}
                    onClick={CambioForm}
                  >
                    Ser Aliado estratégico
                  </h3>
                </div>

                {Form.unete ? (
                  <FormUnete />
                ) : (
                  <>
                    <FormAliado />
                    <div className="ContactoAlternativo">
                      <h3>
                        ¿Prefieres otros métodos de contacto? Aquí te ofrecemos
                        algunas alternativas
                      </h3>
                      <div className="Medios">
                        <div>
                          <img src="/images/Unete/build.png" alt="" />
                          <h5>
                            <a
                              href="https://www.google.com/maps/search/?api=1&query=Calle+2+%23+89-35+Bogota"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              calle 2 # 89 - 35 san francisco{" "}
                            </a>{" "}
                          </h5>
                        </div>

                        <div>
                          <img src="/images/Unete/email.png" alt="" />
                          <h5>
                            {" "}
                            <a href="mailto:contacto@lastmile.com">
                              {" "}
                              contacto@lastmile.com{" "}
                            </a>
                          </h5>
                        </div>
                        <div>
                          <img src="/images/Unete/phone.png" alt="" />
                          <h5>
                            <a href="tel:+576017500500">
                              {" "}
                              Bogota ( 601 7500 500 ){" "}
                            </a>{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Unete;
