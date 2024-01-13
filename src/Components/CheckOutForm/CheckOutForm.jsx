import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { Timestamp,collection, doc,addDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Link  } from "react-router-dom";
import './CheckOutForm.css'; 
export const CheckOutForm = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { cart, valorTotal, clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const comprar = async (data) => {
    const itemsRef = collection(db, 'items');
    const cartItems = cart.map((product) => product.id);
  
    try {
      setIsLoading(true);

      // Valido el stock en la colección de items
      const stockChecks = await Promise.all(
        cartItems.map(async (itemId) => {
          const itemDoc = doc(itemsRef, itemId);
          const itemSnapshot = await getDoc(itemDoc);
  
          if (!itemSnapshot.exists() || itemSnapshot.data().stock < 1) {
            console.log(`No hay stock suficiente para el item con ID ${itemId}`);
            return false;
          }
  
          return true;
        })
      );
  
      // Si hay algún item sin stock, detener la operación
      if (stockChecks.includes(false)) {
        return;
      }
  
      // Resto la cantidad comprada del stock disponible para cada item
      await Promise.all(
        cart.map(async (product) => {
          const itemId = product.id;
          const itemDoc = doc(itemsRef, itemId);
          const itemSnapshot = await getDoc(itemDoc);
          const currentStock = itemSnapshot.data().stock;
  
          // Actualizo el stock restando la cantidad comprada
          await updateDoc(itemDoc, { stock: currentStock - product.quantity });
        })
      );
  
      // Generar la orden
      const pedido = {
        cliente: data,
        productos: cart,
        total: valorTotal,
        date: Timestamp.fromDate(new Date()),
      };
  
      const pedidosRef = collection(db, 'orders');
  
      const docRef = await addDoc(pedidosRef, pedido);
      setPedidoId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al procesar la compra:', error);
    } finally {
      setIsLoading(false); 
    }
  };
  

  // Obtener el valor actual del campo de email
  const emailValue = watch("email", "");

  if (pedidoId) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-8 border rounded-md shadow-md bg-white">
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            ¡Tu compra se ha realizado EXITOSAMENTE!
          </h1>
          <p className="text-lg text-gray-600">Número de Pedido: {pedidoId}</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >
            Volver al Home
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
       {isLoading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="max-w-md w-full p-6 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          Información para finalizar Compra
        </h1>
        <form className="formulario-checkout" onSubmit={handleSubmit(comprar)}>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                className={`w-full px-3 py-2 border ${
                  errors.nombre ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Ingresa tu nombre"
                {...register("nombre")}
              />
              {errors.nombre && (
                <p className="text-red-500 text-xs mt-1">
                  Nombre es requerido
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                className={`w-full px-3 py-2 border ${
                  errors.apellido ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Ingresa tu apellido"
                {...register("apellido")}
              />
              {errors.apellido && (
                <p className="text-red-500 text-xs mt-1">
                  Apellido es requerido
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <input
              type="email"
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Ingresa tu email"
              {...register("email", { required: "Email es requerido" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              className={`w-full px-3 py-2 border ${
                errors.emailConfirm ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Ingresa tu email nuevamente"
              {...register("emailConfirm", {
                validate: (value) =>
                  value === emailValue || "Los emails no coinciden",
              })}
            />
            {errors.emailConfirm && (
              <p className="text-red-500 text-xs mt-1">
                {errors.emailConfirm.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              className={`w-full px-3 py-2 border ${
                errors.tel ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Ingresa tu celular"
              {...register("tel", {
                required: "Número de celular es requerido",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Ingresa solo números en el número de celular",
                },
                maxLength: {
                  value: 11,
                  message:
                    "El número de celular debe tener máximo 11 dígitos",
                },
              })}
            />
            {errors.tel && (
              <p className="text-red-500 text-xs mt-1">{errors.tel.message}</p>
            )}
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600"
            type="submit"
          >
            Comprar
          </button>
        </form>
      </div>
    </div>
  );
};
