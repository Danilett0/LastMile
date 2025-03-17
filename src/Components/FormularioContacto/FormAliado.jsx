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

const FormAliado = () => {
  const Navigate = useNavigate();
  const [Cargando, setCargando] = useState(false);
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCargando(true);

    // realizo el llamado al servicio para enviar correo
    enviarCorreo(form.current, setCargando, Navigate, toast);
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
          <input
            placeholder="Nombre de la Empresa"
            {...register("Nombre_Empresa", {
              required: "Nombre es requerido",
            })}
          />
          {errors.Nombre_Empresa && (
            <span>{errors.Nombre_Empresa.message}</span>
          )}
        </div>

        <div className="Col-1">
          <input
            type="number"
            placeholder="Telefono"
            {...register("Telefono_Empresa", {
              required: "Teléfono requerido",
            })}
          />
          {errors.Telefono_Empresa && (
            <span>{errors.Telefono_Empresa.message}</span>
          )}
        </div>
      </div>

      <div className="Colx2">
        <div className="Col-1">
          <input
            placeholder="Email"
            {...register("Email_Empresa", {
              required: "Email es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email no válido",
              },
            })}
          />
          {errors.Email_Empresa && <span>{errors.Email_Empresa.message}</span>}
        </div>

        <div className="Col-2">
          <input
            placeholder="Direccion"
            {...register("Direccion_Empresa", {
              required: "Direccion es requerida",
            })}
          />
          {errors.Direccion_Empresa && (
            <span>{errors.Direccion_Empresa.message}</span>
          )}
        </div>
      </div>

      <div className="Colx1">
        <textarea
          placeholder="Mensaje"
          name="mensaje"
          cols="5"
          rows="5"
          {...register("Mensaje_Empresa", {
            required: "No olvides incluir un mensaje",
            minLength: {
              value: 30,
              message: "El mensaje debe tener al menos 30 caracteres",
            },
          })}
        />
        {errors.Mensaje_Empresa && (
          <span>{errors.Mensaje_Empresa.message}</span>
        )}
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

export default FormAliado;
