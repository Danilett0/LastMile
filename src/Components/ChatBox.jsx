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
                <h6>¿Estas interesado en alguno de nuestros servicios?</h6>
              </div>
              <div className="FaqItem" onClick={() => toggleFaq(2)}>
                <h6>¿Como puedo contactar con un asesor?</h6>
              </div>
              <div className="FaqItem" onClick={() => toggleFaq(3)}>
                <h6>¿Necesitas información de tu envío?</h6>
              </div>
              <div className="FaqItem" onClick={() => toggleFaq(4)}>
                <h6>¿Tienes aluna novedad con tu envío?</h6>
              </div>
              <div className="FaqItem" onClick={() => toggleFaq(4)}>
                <h6>¿Como puedo rastrear mi envío?</h6>
              </div>
            </div>
          </div>

          <div className="LinkWhatsapp">
            <FaSquareWhatsapp />

            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=573123779020"
              rel="noreferrer"
            >
              Comunícate con nosotros
            </a>
          </div>

          <button onClick={toggleChat}>x</button>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
