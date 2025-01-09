import axios from "axios";

// Obtener actividades
export const getActivities = async (params = {}) => {
  try {
    const response = await axios.get("http://localhost:1022/api/getActivities", {
      params, // Se envían los parámetros opcionales aquí
    });
    return response.data; // Retornar solo los datos relevantes
  } catch (error) {
    console.error("Error al obtener las actividades:", error.response?.data || error.message);
    throw error;
  }
};

// Subir imágenes
export const uploadImage = async (articleId, file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(`http://localhost:1022/api/articles/${articleId}/images`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Asegura el encabezado correcto
      },
    });

    return response.data; // Retornar solo los datos relevantes
  } catch (error) {
    console.error("Error al subir la imagen:", error.response?.data || error.message);
    throw error;
  }
};