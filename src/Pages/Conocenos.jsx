import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import PrincipiosAccordion from "../Components/AcordionPrinsipios";
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
              Last Mile - Conócenos | Expertos en logística en Bogotá
            </title>
            <meta
              name="description"
              content="Conoce a Last Mile, empresa líder en logística de última milla en Bogotá. Nuestro equipo está comprometido con la eficiencia, la innovación y la confianza en cada entrega."
            />
            <meta
              name="keywords"
              content="Last Mile, empresa logística Bogotá, equipo de logística, distribución urbana, logística Colombia, conocenos, quienes somos, logística de última milla"
            />
            <link
              rel="canonical"
              href="https://www.lastmile.com.co/conocenos"
            />

            {/* Etiquetas Open Graph */}
            <meta
              property="og:title"
              content="Conócenos - Last Mile | Líderes en logística en Bogotá"
            />
            <meta
              property="og:description"
              content="Descubre quiénes somos en Last Mile, expertos en soluciones logísticas para Bogotá y Colombia."
            />
            <meta
              property="og:image"
              content="https://www.lastmile.com.co/assets/img/team-og.jpg"
            />
            <meta
              property="og:url"
              content="https://www.lastmile.com.co/conocenos"
            />
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
                    <b>
                      <span className="AmarilloScuro Mayus">Last</span>{" "}
                      <span className=" Mayus"> Mile </span>
                    </b>
                    una empresa con una marca joven, pero con un detrás que
                    brinda respaldo, de más de 25 años de experiencia de su
                    equipo directivo en operaciones que cubren toda la cadena
                    logística
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="BoxEquipo">
              <h2>Descubre al equipo que hace la diferencia</h2>

              <div className="BoxColaboradores">
                <motion.div
                  className="CardColaborador clara"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>CLARA ROMERO</h3>
                  <p>Directora Financiera y Administrativa</p>
                </motion.div>

                <motion.div
                  className="CardColaborador julian"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>JULIÁN ALARCÓN</h3>
                  <p>Director De Proyectos</p>
                </motion.div>

                <motion.div
                  className="CardColaborador martin"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>MARTIN RODRÍGUEZ</h3>
                  <p>Director Compras y Calidad</p>
                </motion.div>
              </div>

              <div className="BoxColaboradores">
                <motion.div
                  className="CardColaborador german"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>GERMAN ROMERO</h3>
                  <p>Director Operaciones</p>
                </motion.div>

                <motion.div
                  className="CardColaborador fernando"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>FERNANDO MURILLO</h3>
                  <p>Director Tecnología e innovación</p>
                </motion.div>
                <motion.div
                  className="CardColaborador lideres"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { duration: 2 },
                    opacity: 1,
                  }}
                >
                  <h3>LIDERES DE ÁREAS</h3>
                  <p>`</p>
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
                    transition: {
                      duration: 1,
                      delay: 0.6,
                      ease: "easeOut",
                    },
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
                    transition: {
                      duration: 1,
                      delay: 1.2,
                      ease: "easeOut",
                    },
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <img src="./images/Conocenos/customer-care.png" alt="" />
                  <h3>PQRS</h3>
                </motion.div>
              </div>
            </div>

            <div className="MisionVision">
              <div className="BoxMision">
                <h2>Misión</h2>
                <p>
                  Nuestra misión es proporcionar soluciones de transporte de
                  última milla que sean rápidas, seguras y personalizadas,
                  satisfaciendo las necesidades de nuestros clientes con el más
                  alto nivel de servicio. Nos dedicamos a optimizar cada entrega
                  a través de tecnología avanzada, una red logística eficiente y
                  un equipo comprometido, mientras promovemos prácticas
                  sostenibles que beneficien a la comunidad y al medio ambiente.
                </p>
              </div>
              <div className="BoxVision">
                <h2>Visión</h2>
                <p>
                  Last Mile Company sas será la empresa líder en soluciones de
                  transporte de última milla, revolucionando la forma en que el
                  mundo recibe y distribuye productos a través de un enfoque
                  innovador, sostenible y centrado en el cliente. Nos
                  comprometemos a ofrecer una experiencia de entrega rápida,
                  eficiente y confiable, impulsada por tecnología avanzada y
                  prácticas ecológicas, para conectar a las personas con lo que
                  necesitan, cuando lo necesitan.
                </p>
              </div>
            </div>

            <div className="BoxPrincipios">
              <PrincipiosAccordion />
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
                href="https://api.whatsapp.com/send?phone=573123779020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/Logos/whatsapp.png" alt="Escudo" />
              </a>

              <a
                href="https://www.linkedin.com/company/last-mile-company/"
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
