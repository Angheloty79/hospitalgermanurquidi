import { createContext, useContext } from "react";
import { crateArticle } from "../ApiR/article.api.js"; // Asegúrate de tener una función para subir imágenes

export const AuthContext = createContext();

export const useArticle = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("no hay servicio");
  return context;
};

export const ArticleProvider = ({ children }) => {



  const AddArticle = async (dataArticle) => {
    try {
      // Enviar los datos del artículo
      const responseArticle = await crateArticle(dataArticle);

      const MessageE = responseArticle.data.message;

      // Validar la respuesta
      if (responseArticle.status === 200) {
        return { success: true ,MessageE};
      } else {
        return { success: false, MessageE};
      }
    } catch (error) {
      return { success: false, error: error };
    }
  };

  return (
    <AuthContext.Provider value={{ AddArticle }}>
      {children}
    </AuthContext.Provider>
  );
};
