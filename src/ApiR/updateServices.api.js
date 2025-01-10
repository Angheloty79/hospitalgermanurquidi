import axios from "axios";

export const updateServices = async (id, dataServices) => {
    const response = await axios.patch(
      `http://localhost:1022/api/updateServices/${id}`,
      dataServices,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response;
  };