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
            <title>Last Mile - Servicios logísticos en Bogotá</title>
            <meta
              name="description"
              content="Explora los servicios de Last Mile: distribución urbana, logística de última milla, fulfillment, logística inversa y recaudo contra entrega en Bogotá."
            />
            <meta
              name="keywords"
              content="servicios logísticos Bogotá, distribución urbana, última milla, fulfillment, logística inversa, recaudo contra entrega, transporte de paquetes, soluciones logísticas Colombia"
            />
            <link
              rel="canonical"
              href="https://www.lastmile.com.co/Servicios"
            />

            {/* Etiquetas Open Graph */}
            <meta
              property="og:title"
              content="Servicios logísticos - Last Mile Bogotá"
            />
            <meta
              property="og:description"
              content="Conoce los servicios de Last Mile: expertos en logística de última milla y distribución urbana en Bogotá."
            />
            <meta
              property="og:image"
              content="https://www.lastmile.com.co/assets/img/services-og.jpg"
            />
            <meta
              property="og:url"
              content="https://www.lastmile.com.co/Servicios"
            />
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
                  Servicio integral de logística para garantizar que la
                  mercancía salga de un centro de producción o de un centro de
                  distribución y cubra de forma correcta todas las etapas
                  requeridas hasta llegar al consumidor final, en modelos B2B y
                  B2C.
                </p>
                <p>
                  Brindando tecnológicamente información clara y estatus real,
                  en cada proceso.
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
                  src="/images/Servicios/cabecera_servicios.png"
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
                  className="Imagen FULFILLMENT"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: 10,
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

                  <h2>FULFILLMENT (Administración de Inventarios)</h2>
                  <p>
                    <b>La Solución Logística Integral para tu Negocio</b>
                  </p>
                  <p>
                    Somos especialistas en fulfillment, el socio estratégico que
                    tu e-commerce necesita para escalar. Nos integramos con tu
                    plataforma de ventas para gestionar tu operación logística
                    de punta a punta. Desde el almacenamiento inteligente de tu
                    mercancía y el control de inventario, hasta la preparación
                    meticulosa de cada pedido y el despacho eficiente, nos
                    convertimos en una extensión de tu marca.
                  </p>
                  <p>
                    Garantiza una experiencia de compra excepcional para tus
                    clientes con entregas puntuales y precisas, mientras tú te
                    liberas de las complejidades del almacenaje y los envíos.
                  </p>
                </motion.div>
              </div>

              <div className="Servicio Revert">
                <motion.div
                  className="Imagen distribucion"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: 10,
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
                  <h2>Distribución Urbana Y Nacional</h2>
                  <p>
                    <b>
                      Tu Solución Integral de Transporte: Rápido en la Ciudad,
                      Sólido en el País
                    </b>
                    <br />
                  </p>

                  <p>
                    Conecta tu negocio con cada rincón del territorio. Nuestro
                    servicio de distribución resuelve toda tu logística de
                    salida: <br />
                    <br />• Distribución Urbana (Última Milla): Entregas ágiles
                    y eficientes dentro de la ciudad, asegurando la rapidez que
                    tus clientes esperan (entregas mismo día o día siguiente).{" "}
                    <br />
                    <br />• Distribución Nacional: Una red logística robusta
                    para llevar tus productos a todas las provincias y regiones,
                    optimizando costos y tiempos de tránsito. <br />
                    <br /> Ya sea un paquete al otro lado de la ciudad o un
                    palet al otro extremo del país, nosotros lo entregamos.
                  </p>
                </motion.div>
              </div>

              <div className="Servicio">
                <motion.div
                  className="Imagen vehiculo"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: 10,
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
                  <h2>Carga Masiva y Vehículos Dedicados</h2>
                  <p>
                    <b>
                      Maximizando tu Capacidad Logística: Carga Masiva y
                      Transporte Dedicado
                    </b>
                  </p>
                  <p>
                    Para las operaciones más exigentes, ofrecemos soluciones de
                    transporte de alta capacidad diseñadas para la eficiencia y
                    el control total.
                  </p>
                  <p>
                    • Gestión de Carga Masiva: Nos especializamos en el
                    movimiento de carga completa (FTL), asegurando que tus
                    grandes volúmenes de producción o inventario lleguen a su
                    destino de forma directa, segura y rentable. También
                    manejamos carga consolidada (LTL) de gran volumen.
                  </p>
                  <p>
                    • Servicio de Vehículos Dedicados: Te proporcionamos una
                    flota externalizada. Asignamos vehículos y personal
                    exclusivamente a tu cuenta, funcionando como una extensión
                    de tu propia empresa. Esto garantiza máxima flexibilidad en
                    horarios, rutas personalizadas y un manejo prioritario y
                    seguro de tu mercancía, eliminando paradas innecesarias o el
                    riesgo de compartir espacio.
                  </p>
                  <p>
                    Es la solución perfecta para centros de distribución,
                    plantas de producción y clientes B2B que requieren una
                    logística predecible y robusta.
                  </p>
                </motion.div>
              </div>

              <div className="Servicio Revert">
                <motion.div
                  className="Imagen operaciones"
                  initial={{ marginTop: 0, opacity: 0, scale: 0 }}
                  whileInView={{
                    marginTop: 10,
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
                  <h2>Operaciones Cash On Delivery</h2>
                  <p>
                    pulsa las ventas de tu negocio y genera máxima credibilidad
                    con nuestro robusto servicio de Operaciones Cash On Delivery
                    (COD).
                  </p>
                  <h4 style={{ textAlign: "left" }}>Para el Cliente:</h4>
                  <p>
                    <b>• Confianza Garantizada:</b> Permite a tus clientes pagar
                    sus pedidos solo una vez que los tienen físicamente en sus
                    manos, eliminando la principal barrera de la desconfianza en
                    el e-commerce.
                  </p>

                  <p>
                    <b>• Comodidad Total:</b> Ofrece una opción de pago
                    preferida por un gran segmento del mercado.
                  </p>

                  <h4 style={{ textAlign: "left" }}>Para Tu Negocio:</h4>

                  <p>
                    <b>• Aumento de la Tasa de Conversión:</b> La opción COD ha
                    demostrado ser un motor clave para aumentar las ventas y
                    reducir los carritos abandonados.
                  </p>

                  <p>
                    <b>• Gestión de Recaudo Eficiente:</b> Nos encargamos de la
                    gestión, recolección y transferencia segura de los fondos
                    recaudados, garantizando la liquidación de tus ventas de
                    manera rápida y transparente.
                  </p>

                  <p>
                    <b>
                      Convierte la confianza en ventas. Confía tus operaciones
                      de Pago Contra Entrega a LAST MILE COMPANY.
                    </b>
                  </p>
                </motion.div>
              </div>
              <br />
            </div>
            <ScrollProgres></ScrollProgres>
          </main>
        </>
      )}
    </>
  );
}

export default Servicios;
