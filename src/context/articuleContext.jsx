import { createContext, useContext } from "react";
import { crateArticle, uploadImage } from "../ApiR/article.api.js"; // Asegúrate de tener una función para subir imágenes

export const AuthContext = createContext();

export const useArticle = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("no hay servicio");
  return context;
};

export const ArticleProvider = ({ children }) => {
  const AddArticle = async (dataArticle, DataIMa) => {
    try {
      // Enviar los datos del artículo
      const responseArticle = await crateArticle(dataArticle);
      
      // Validar la respuesta
      if (responseArticle.status === 200) {
        console.log("Artículo creado exitosamente");
        console.log(responseArticle.data.insertId);
        

        // Subir las imágenes
       // const articleId = responseArticle.data.id; // Asume que recibes el ID del artículo creado
       // const uploadPromises = DataIMa.map(image => uploadImage(articleId, image)); // Suponiendo que uploadImage es la función para subir la imagen

        // Esperar que todas las imágenes sean subidas
        //await Promise.all(uploadPromises);
       // console.log("Todas las imágenes subidas exitosamente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ AddArticle }}>
      {children}
    </AuthContext.Provider>
  );
};