import { createContext, useContext } from "react";
import { createServices } from "../ApiR/services.api";
import { getServices } from "../ApiR/getServices.api";

export const AuthContext = createContext();

export const useService = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("El contexto de servicios no está disponible");
  return context;
};

export const ServiceProvider = ({ children }) => {
  // Función para agregar un nuevo servicio
  const AddServices = async (data) => {
    try {
      const response = await createServices(data);
      if (response.status === 200) {
        console.log("Servicio agregado exitosamente");
      } else {
        console.error("Error al agregar servicio");
      }
    } catch (error) {
      console.error("Error en AddServices:", error);
    }
  };

  // Función para obtener todos los servicios
  const FetchServices = async () => {
    try {
      const response = await getServices();
      if (response.status === 200) {
        console.log("Servicios obtenidos exitosamente:", response.data);
        return response.data; // Devolver los datos al frontend
      } else {
        console.error("Error al obtener servicios");
      }
    } catch (error) {
      console.error("Error en FetchServices:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ AddServices, FetchServices }}>
      {children}
    </AuthContext.Provider>
  );
};