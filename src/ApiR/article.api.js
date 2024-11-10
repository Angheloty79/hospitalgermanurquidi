import axios from "axios";

export const crateArticle = async (dataArticle) => 
  await axios.post("http://localhost:1022/api/postArticleRegister", dataArticle );


export const uploadImage  = async (id,file) => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await axios.post(`YOUR_API_ENDPOINT/articles/${articleId}/images`, {
    body: formData,
  });

  return response; 
};