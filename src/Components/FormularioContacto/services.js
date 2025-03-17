import emailjs from "@emailjs/browser";

export const enviarCorreo = (form, setCargando, Navigate, toast) => {
  emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form,
      {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log("Mensaje enviado al correo");
        toast.success("Urra! Mensaje enviado correctamente");
        setTimeout(() => {
          setCargando(false);
          Navigate("/gracias");
        }, 2500);
      },
      (error) => {
        console.log("Error: " + error);
        toast.error("Ops!  Ocurrio un error al intentar enviar el corro");
        setTimeout(() => {
          setCargando(false);
          Navigate("/");
        }, 2500);
      }
    );
};
