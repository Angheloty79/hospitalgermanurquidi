import axios from "axios";

export const deleteServices = async (id) => {
  try {
    console.log("Llamando a DELETE con ID:", id);
    const response = await axios.delete(`http://localhost:1022/api/deleteServices/${id}`);
    return response;
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error.response?.data || error.message);
    throw error;
  }
};