import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 border rounded-md shadow-md bg-white">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          ¡404 PÁGINA NO ENCONTRADA!
        </h1>
        <p className="text-lg text-gray-600">
          Parece que te has perdido. Regresa a la página principal.
        </p>
        <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >
            Volver al Home
          </Link>
      </div>
    </div>
  );
};
