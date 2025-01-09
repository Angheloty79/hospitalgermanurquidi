import axios from "axios";

/**
 * Actualiza los datos de una actividad específica.
 * @param {number} id - ID de la actividad a actualizar.
 * @param {FormData} dataActivities - Datos de la actividad en formato FormData.
 * @returns {Promise<object>} Respuesta del servidor.
 * @throws {Error} Error con detalles de la respuesta si la solicitud falla.
 */
export const updateActivities = async (id, dataActivities) => {
  try {
    const response = await axios.patch(
      `http://localhost:1022/api/updateActivities/${id}`,
      dataActivities,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data; // Retornar los datos de la respuesta del servidor
  } catch (error) {
    console.error("Error al actualizar la actividad:", error.response?.data || error.message);
    throw error; // Lanza el error para que sea manejado en el componente llamador
  }
};