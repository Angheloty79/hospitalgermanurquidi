import axios from "axios";

export const getServices = async (dataServices) => 
    await axios.get("http://localhost:1022/api/getServices", dataServices );


    export const uploadImage  = async (id,file) => {
    const formData = new FormData();
    formData.append("image", file);
  const response = await axios.post(`YOUR_API_ENDPOINT/articles/${articleId}/images`, {
    body: formData,
  });

  return response; 
};