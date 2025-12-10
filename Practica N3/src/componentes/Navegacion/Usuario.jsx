import React, { useState } from "react";

const Usuario = () => {
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("usuario")) || null
  );
  const [form, setForm] = useState({
    nombre: "",
    contraseña: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simulación de login solo con nombre y contraseña
  const login = (e) => {
    e.preventDefault();

    // Aquí puedes validar con datos "dummy" o desde tu backend
    if (form.nombre === "cliente1" && form.contraseña === "1234") {
      const usuarioData = { nombre: form.nombre };
      setUsuario(usuarioData);
      localStorage.setItem("usuario", JSON.stringify(usuarioData));
      setMensaje("");
    } else {
      setMensaje("Nombre o contraseña incorrectos");
    }
  };

  const cerrarSesion = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  if (usuario) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Bienvenido, {usuario.nombre}</h2>
          <button
            onClick={cerrarSesion}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-xl"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <form onSubmit={login} className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-orange-600">
          Iniciar Sesión
        </h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-500"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-1">Contraseña</label>
          <input
            type="password"
            name="contraseña"
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-500"
            placeholder="******"
            required
          />
        </div>

        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl text-lg transition-all">
          Entrar
        </button>

        {mensaje && (
          <p className="text-center mt-4 text-red-500 font-medium">{mensaje}</p>
        )}
      </form>
    </div>
  );
};

export default Usuario;
