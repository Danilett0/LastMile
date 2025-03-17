import React, { useState } from "react";
import Lottie from "lottie-react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Animation from "./Chat.json";
import "../styles/components/ChatBox.css";

function ChatBox() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleFaq = (faqNumber) => {
    setOpenFaq(openFaq === faqNumber ? null : faqNumber);
  };

  return (
    <div className="ChatContainer">
      <div className="BoxChat" onClick={toggleChat}>
        <Lottie
          className="ImgLasTraking"
          animationData={Animation}
          loop={true}
        />
        <p>Chatea con nosotros</p>
      </div>

      {isChatOpen && (
        <div className="ChatWindow">
          <h3>¡Hola! ¿Cómo podemos ayudarte hoy?</h3>
          <div className="ChatContent">
            <div className="Faq">
              <div className="FaqItem" onClick={() => toggleFaq(1)}>
                <h6>¿Cuál es el tiempo estimado de entrega para mi pedido?</h6>
                {openFaq === 1 && (
                  <p>
                    El tiempo estimado de entrega depende del destino y el
                    método de envío seleccionado. En promedio, los envíos
                    nacionales tardan entre 3 y 7 días hábiles, mientras que los
                    envíos internacionales pueden tardar entre 7 y 21 días
                    hábiles. Te recomendamos verificar el número de seguimiento
                    para obtener información actualizada sobre tu envío.
                  </p>
                )}
              </div>
              <div className="FaqItem" onClick={() => toggleFaq(2)}>
                <h6>¿Cómo puedo rastrear mi pedido?</h6>
                {openFaq === 2 && (
                  <p>
                    Puedes rastrear tu pedido utilizando el número de
                    seguimiento proporcionado en el correo de confirmación de
                    envío. Ingresa este número en la sección de seguimiento de
                    nuestra página web o en el sitio web del transportista para
                    obtener información detallada sobre el estado de tu envío.
                  </p>
                )}
              </div>
              <div className="FaqItem" onClick={() => toggleFaq(3)}>
                <h6>¿Qué debo hacer si mi paquete llega dañado?</h6>
                {openFaq === 3 && (
                  <p>
                    Si tu paquete llega dañado, por favor contacta a nuestro
                    servicio de atención al cliente dentro de las 24 horas
                    posteriores a la recepción. Proporciona fotos del daño y tu
                    número de pedido. Investigaremos el caso y haremos todo lo
                    posible para resolverlo, ya sea mediante el reemplazo del
                    producto o el reembolso de tu compra.
                  </p>
                )}
              </div>
              <div className="FaqItem" onClick={() => toggleFaq(4)}>
                <h6>¿Qué métodos de pago aceptan?</h6>
                {openFaq === 4 && (
                  <p>
                    Aceptamos una variedad de métodos de pago para tu comodidad,
                    incluyendo tarjetas de crédito (Visa, MasterCard, American
                    Express), PayPal, transferencias bancarias y pagos contra
                    reembolso en algunas ubicaciones. Por favor, consulta
                    nuestra sección de métodos de pago para más detalles.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="LinkWhatsapp">
            <FaSquareWhatsapp />

            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=573112878998"
              rel="noreferrer"
            >
              Necesitas ayuda personalizada?
            </a>
          </div>

          <button onClick={toggleChat}>x</button>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
