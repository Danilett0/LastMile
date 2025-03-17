import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../Loading";
import { enviarCorreo } from "./services";
import { toast, ToastContainer } from "react-toastify";
import { FaCircleCheck } from "react-icons/fa6";

import "react-toastify/dist/ReactToastify.css";
import "../../App.css";
import "../../styles/components/FormularioContacto.css";

const FormUnete = () => {
  const Navigate = useNavigate();
  const [Cargando, setCargando] = useState(false);
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    if (
      data.tipoDocumento === "Tipo de Identificación" ||
      data.Ciudad === "Ciudad" ||
      data.Estudios === "¿Cuál es su nivel académico?"
    ) {
      if (data.Ciudad === "Ciudad") {
        setError("Ciudad", { type: "manual", message: "Ciudad es requerida" });
      }

      if (data.Estudios === "¿Cuál es su nivel académico?") {
        setError("Estudios", {
          type: "manual",
          message: "Nivel académico es requerido",
        });
      }

      if (data.tipoDocumento === "Tipo de Identificación") {
        setError("tipoDocumento", {
          type: "manual",
          message: "Tipo de Identificación es requerido",
        });
      }
    } else {
      setCargando(true);

      // realizo el llamado al servicio para enviar correo
      enviarCorreo(form.current, setCargando, Navigate, toast);
    }
  };

  return (
    <motion.form
      ref={form}
      style={{ position: "relative" }}
      className="FormContact"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8 },
      }}
    >
      <div className="Colx2">
        <div className="Col-1">
          <select
            {...register("tipoDocumento", {
              required: "Tipo de documento es requerido",
            })}
          >
            {" "}
            <option>Tipo de Identificación</option>{" "}
            <option value="CC">Cedula de Ciudadania</option>{" "}
            <option value="CE">Cedula de Extranjeria</option>{" "}
            <option value="TI">Tarjeta de Identidad</option>{" "}
            <option value="NIT">NIT</option>{" "}
          </select>
          {errors.tipoDocumento && <span>{errors.tipoDocumento.message}</span>}
        </div>

        <div className="Col-2">
          <input
            type="number"
            placeholder="Documento"
            {...register("Documento", {
              required: "Documento es requerido",
            })}
          />
          {errors.Documento && <span>{errors.Documento.message}</span>}
        </div>
      </div>

      <div className="Colx2">
        <div className="Col-1">
          <input
            placeholder="Nombre"
            {...register("Nombre", {
              required: "Nombre es requerido",
              pattern: {
                value: /^[a-z\s]+$/i,
                message: "El nombre sólo puede contener letras",
              },
            })}
          />
          {errors.Nombre && <span>{errors.Nombre.message}</span>}
        </div>

        <div className="Col-2">
          <select
            id="Ciudad"
            {...register("Ciudad", {
              required: "Ciudad es requerida",
            })}
          >
            {" "}
            <option>Ciudad</option> <option value="Bogota">Bogotá</option>{" "}
          </select>
          {errors.Ciudad && <span>{errors.Ciudad.message}</span>}
        </div>
      </div>

      <div className="Colx2">
        <div className="Col-1">
          <input
            type="number"
            placeholder="Telefono"
            {...register("Telefono", {
              required: "Teléfono requerido",
              minLength: {
                value: 10,
                message: "Teléfono debe tener exactamente 10 números",
              },
              maxLength: {
                value: 10,
                message: "TYeléfono no puede tener mas de 10 números",
              },
            })}
          />
          {errors.Telefono && <span>{errors.Telefono.message}</span>}
        </div>

        <div className="Col-2">
          <input
            placeholder="Direccion"
            {...register("Direccion", {
              required: "Direccion es requerida",
            })}
          />
          {errors.Direccion && <span>{errors.Direccion.message}</span>}
        </div>
      </div>

      <div className="Colx2">
        <div className="Col-1">
          <input
            placeholder="Email"
            {...register("Email", {
              required: "Email es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email no válido",
              },
            })}
          />
          {errors.Email && <span>{errors.Email.message}</span>}
        </div>

        <div className="Col-2">
          <select
            {...register("Estudios", {
              required: "Nivel academico es requerido",
            })}
          >
            {" "}
            <option>¿Cuál es su nivel académico?</option>{" "}
            <option value="Bachiller">Bachiller</option>{" "}
            <option value="Tecnico">Técnico</option>{" "}
            <option value="Tecnologo">Tecnólogo</option>{" "}
            <option value="Universitario">Carrera Universitaria </option>{" "}
          </select>
          {errors.Estudios && <span>{errors.Estudios.message}</span>}
        </div>
      </div>

      <div className="Colx1">
        <textarea
          placeholder="Mensaje"
          name="mensaje"
          cols="5"
          rows="5"
          {...register("Mensaje", {
            required: "No olvides incluir un mensaje",
            minLength: {
              value: 30,
              message: "El mensaje debe tener al menos 30 caracteres",
            },
          })}
        />
        {errors.Mensaje && <span>{errors.Mensaje.message}</span>}
      </div>

      <div className="BoxButton">
        <button className="BtnEnviar" type="submit">
          <FaCircleCheck />
        </button>
      </div>

      {Cargando && <Loading />}
      <ToastContainer />
    </motion.form>
  );
};

export default FormUnete;
