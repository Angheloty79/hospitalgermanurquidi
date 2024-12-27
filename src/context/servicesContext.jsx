import { createContext, useContext } from "react";
import { createServices } from "../ApiR/services.api";
import { getServices } from "../ApiR/getServices.api";
import { updateServices } from "../ApiR/updateServices.api";
import { deleteServices } from "../ApiR/deleteServices.api";

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
        return response.data;
      } else {
        console.error("Error al agregar servicio:", response.data);
        throw new Error("Error al agregar servicio");
      }
    } catch (error) {
      console.error("Error en AddServices:", error);
      throw error;
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
        console.error("Error al obtener servicios:", response.data);
        throw new Error("Error al obtener servicios");
      }
    } catch (error) {
      console.error("Error en FetchServices:", error);
      throw error;
    }
  };

  // Función para actualizar un servicio
  const UpdateService = async (id, data) => {
    try {
      const response = await updateServices(id, data);
      if (response.status === 200) {
        console.log("Servicio actualizado exitosamente");
        return response.data;
      } else {
        console.error("Error al actualizar servicio:", response.data);
        throw new Error("Error al actualizar servicio");
      }
    } catch (error) {
      console.error("Error en UpdateService:", error);
      throw error;
    }
  };

  // Función para eliminar un servicio
  const DeleteService = async (id) => {
    try {
      console.log("Enviando ID para eliminar:", id);
      const response = await deleteServices(id);
      if (response.status === 200) {
        console.log("Servicio eliminado exitosamente:", response.data);
        return response.data;
      } else {
        throw new Error(response.data.message || "Error desconocido al eliminar");
      }
    } catch (error) {
      console.error("Error en DeleteService:", error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ AddServices, FetchServices, UpdateService, DeleteService }}
    >
      {children}
    </AuthContext.Provider>
  );
};