import axios from "axios";

// Función para crear actividades
export const createActivities = async (dataActivities) => {
  try {
    const response = await axios.post("http://localhost:1022/api/postActivitiesRegister", dataActivities);
    return response.data; // Devolver solo los datos relevantes
  } catch (error) {
    console.error("Error al crear actividades:", error.response?.data || error.message);
    throw error;
  }
};

// Función para subir imágenes
export const uploadImage = async (articleId, file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(`http://localhost:1022/api/articles/${articleId}/images`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Aseguramos que se envíe como formulario
      },
    });

    return response.data; // Devolver solo los datos relevantes
  } catch (error) {
    console.error("Error al subir la imagen:", error.response?.data || error.message);
    throw error;
  }
};