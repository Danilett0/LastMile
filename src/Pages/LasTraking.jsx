import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CarruselClientes from "../Components/CarruselClientes";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import "../App.css";
import "../styles/pages/LasTraking.css";

function LasTraking() {
  const loadingPage = useLoading("LasTraking", 300);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>LastTrakin - Rastreo de envíos | Last Mile</title>
            <meta
              name="description"
              content="Consulta el estado de tus envíos en tiempo real con LastTrakin, la plataforma de rastreo de Last Mile en Bogotá. Seguimiento preciso y confiable para tus entregas."
            />
            <meta
              name="keywords"
              content="rastreo de envíos, seguimiento de paquetes, LastTrakin, Last Mile, logística Bogotá, seguimiento en tiempo real, tracking de pedidos, plataforma logística"
            />
            <link
              rel="canonical"
              href="https://www.lastmile.com.co/LasTrakin"
            />

            {/* Etiquetas Open Graph */}
            <meta
              property="og:title"
              content="LastTrakin | Rastrea tus envíos con Last Mile"
            />
            <meta
              property="og:description"
              content="Accede a LastTrakin y sigue tus paquetes en tiempo real con la tecnología de Last Mile."
            />
            <meta
              property="og:image"
              content="https://www.lastmile.com.co/assets/img/lasttrakin-og.jpg"
            />
            <meta
              property="og:url"
              content="https://www.lastmile.com.co/LasTrakin"
            />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="LastTrakin | Rastreo de envíos con Last Mile"
            />
            <meta
              name="twitter:description"
              content="Consulta el estado de tus envíos en tiempo real con Last Mile."
            />
            <meta
              name="twitter:image"
              content="https://www.lastmile.com.co/assets/img/lasttrakin-og.jpg"
            />
          </Helmet>

          <main>
            <div className="BoxLasTraking">
              <video
                className="video"
                autoPlay
                loop
                muted
                poster="/images/lasttrakin-preview.jpg"
                aria-label="Video demostrativo de la plataforma LastTrakin"
              >
                <source src="/videos/last_trakin.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>

              <div className="BoxInfoTraking">
                <h1>Rastrea tus envíos en tiempo real con LastTrakin</h1>

                <CarruselClientes Data={"AccionesPortal"} />

                <Link
                  className="Button Yellow"
                  to="http://tracking.lastmile.com.co/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al portal corporativo
                </Link>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default LasTraking;
