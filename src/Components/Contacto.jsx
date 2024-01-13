import React, { useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import { useForm } from 'react-hook-form';

export const Contacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [mensaje, setMensaje] = useState(null);

  const enviar = (data) => {
    console.log(data);
    setMensaje("¡Datos enviados con éxito! Nos estaremos contactando a la brevedad");
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      {mensaje && (
          <div className="mb-4 text-green-600">
            <p>{mensaje}</p>
          </div>
        )}
        <form onSubmit={handleSubmit(enviar)}>
          <div className="mb-4">
            <input
              type="text"
              className={`w-full px-3 py-2 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="Ingresa tu nombre y apellido"
              {...register("nombre", { required: true })}
            />
            {errors.nombre && <p className="text-red-500 text-xs mt-1">Nombre es requerido</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="Ingresa tu email"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "El formato de email ingresado no es correcto",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">Email es requerido</p>}
          </div>  
          <div className="mb-4">
            <input
              type="tel"
              className={`w-full px-3 py-2 border ${errors.celular ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="Ingresa tu celular"
              {...register("celular", {
                required: true,
                pattern: /^[0-9]+$/,
                maxLength: 13,
                minLength: 10,
                message: "Ingresa un número de celular válido",
              })}
            />
            {errors.celular && <p className="text-red-500 text-xs mt-1">{errors.celular.message} Ingresa un número de celular válido</p>}
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600" type="submit">Enviar</button>
        </form>
        <h2 className="mt-4 flex items-center justify-center">
          <ImWhatsapp className="mr-2 text-green-500" /> +54111111111
        </h2>
      </div>
    </div>
  );
};
