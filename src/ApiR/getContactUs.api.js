import axios from "axios";

// Obtener todos los registros de contacto
export const getContactUs = async () => {
  try {
    const response = await axios.get("http://localhost:1022/api/getContactUs");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los contactos:", error);
    throw error; // Lanza el error para que sea manejado donde se llame esta función
  }
};