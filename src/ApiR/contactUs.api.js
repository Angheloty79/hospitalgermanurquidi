import axios from "axios";

// Crear un nuevo registro de contacto
export const createContactUs = async (dataContactUs) => {
  try {
    const response = await axios.post("http://localhost:1022/api/postContactUsRegister", dataContactUs);
    return response.data;
  } catch (error) {
    console.error("Error al crear el contacto:", error);
    throw error; // Lanza el error para que pueda ser manejado en el lugar donde se llame la función
  }
};