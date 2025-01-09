import { createContext, useContext, useState, useCallback } from "react";
import { createActivities } from "../ApiR/activity.api";
import { getActivities } from "../ApiR/getActivities.api";
import { updateActivities } from "../ApiR/updateActivities.api";

export const ActivityContext = createContext();

// Hook personalizado para consumir el contexto
export const useActivity = () => {
  const context = useContext(ActivityContext);
  if (!context) throw new Error("El contexto de actividades no está disponible");
  return context;
};

// Proveedor del contexto
export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]); // Estado para almacenar actividades

  // Función para agregar una nueva actividad
  const AddActivity = useCallback(async (data) => {
    try {
      const response = await createActivities(data);
      console.log("Actividad agregada exitosamente:", response);
      return response; // Devolver la respuesta al componente llamador
    } catch (error) {
      console.error("Error al agregar la actividad:", error.response?.data || error.message);
      throw error;
    }
  }, []);

  // Función para obtener todas las actividades
  const FetchActivities = useCallback(async () => {
    try {
      const response = await getActivities();
      setActivities(response); // Actualizar el estado local con las actividades obtenidas
      console.log("Actividades obtenidas:", response);
      return response;
    } catch (error) {
      console.error("Error al obtener las actividades:", error.response?.data || error.message);
      throw error;
    }
  }, []); // Sin dependencias para evitar recreaciones innecesarias

  // Función para actualizar una actividad
  const UpdateActivities = useCallback(async (id, data) => {
    try {
      const response = await updateActivities(id, data);
      console.log(`Actividad con ID ${id} actualizada exitosamente:`, response);

      // Actualizar el estado local después de la actualización
      setActivities((prev) =>
        prev.map((activity) =>
          activity.activityId === id ? { ...activity, ...data } : activity
        )
      );

      return response; // Devolver la respuesta al componente llamador
    } catch (error) {
      console.error("Error al actualizar la actividad:", error.response?.data || error.message);
      throw error;
    }
  }, []);

  return (
    <ActivityContext.Provider
      value={{ AddActivity, FetchActivities, UpdateActivities, activities }}
    >
      {children}
    </ActivityContext.Provider>
  );
};