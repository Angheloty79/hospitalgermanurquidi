import axios from "axios";

export const crateArticle = async (formData) =>
  await axios.post("http://localhost:1022/api/postArticleRegister", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
