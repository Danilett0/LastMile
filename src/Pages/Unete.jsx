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
            <title>
              Únete a Last Mile | Oportunidades laborales en logística
            </title>
            <meta
              name="description"
              content="Forma parte del equipo de Last Mile, empresa líder en logística en Bogotá. Descubre nuestras vacantes y oportunidades de crecimiento profesional."
            />
            <meta
              name="keywords"
              content="trabajo en logística, empleo Bogotá, vacantes Last Mile, oportunidades laborales, únete al equipo, logística Colombia, talento logístico, bolsa de empleo"
            />
            <link rel="canonical" href="https://www.lastmile.com.co/Unete" />

            {/* Etiquetas Open Graph */}
            <meta
              property="og:title"
              content="Únete a Last Mile | Trabaja con nosotros"
            />
            <meta
              property="og:description"
              content="Explora oportunidades laborales en Last Mile y sé parte de una empresa innovadora en logística."
            />
            <meta
              property="og:image"
              content="https://www.lastmile.com.co/assets/img/unete-og.jpg"
            />
            <meta
              property="og:url"
              content="https://www.lastmile.com.co/Unete"
            />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Únete a Last Mile | Oportunidades laborales en logística"
            />
            <meta
              name="twitter:description"
              content="Descubre cómo formar parte del equipo de Last Mile en Bogotá."
            />
            <meta
              name="twitter:image"
              content="https://www.lastmile.com.co/assets/img/unete-og.jpg"
            />
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
                  <>
                    <FormUnete />

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
                              href="https://www.google.com/maps/place/Cl.+18a+%2368D+40,+Bogot%C3%A1"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              Cl. 18a # 68D 40, Bogotá{" "}
                            </a>{" "}
                          </h5>
                        </div>

                        <div>
                          <img src="/images/Unete/email.png" alt="" />
                          <h5>
                            {" "}
                            <a href="mailto:admin3@lastmile.com.co">
                              {" "}
                              admin3@lastmile.com.co{" "}
                            </a>
                          </h5>
                        </div>
                        <div>
                          <img src="/images/Unete/phone.png" alt="" />
                          <h5>
                            <a href="tel:+573126955920"> 312 695 5920 </a>{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </>
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
                              href="https://www.google.com/maps/place/Cl.+18a+%2368D+40,+Bogot%C3%A1"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              Cl. 18a # 68D 40, Bogotá{" "}
                            </a>{" "}
                          </h5>
                        </div>

                        <div>
                          <img src="/images/Unete/email.png" alt="" />
                          <h5>
                            {" "}
                            <a href="mailto:admin1@lastmile.com.co">
                              {" "}
                              admin1@lastmile.com.co{" "}
                            </a>
                          </h5>
                        </div>
                        <div>
                          <img src="/images/Unete/phone.png" alt="" />
                          <h5>
                            <a href="tel:+573108105989"> 310 810 5989</a>{" "}
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
