import { createContext, useContext, useState } from "react";
import { createContactUs } from "../ApiR/contactUs.api";
import { getContactUs } from "../ApiR/getContactUs.api";

export const ContactUsContext = createContext();

export const useContactUs = () => {
  const context = useContext(ContactUsContext);
  if (!context) throw new Error("El contexto de ContactUs no está disponible");
  return context;
};

export const ContactUsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]); // Estado para manejar los contactos

  // Función para agregar un nuevo contacto
  const AddContactUs = async (data) => {
    try {
      const response = await createContactUs(data);
      if (response.status === 200) {
        console.log("Contacto agregado exitosamente");
        fetchContacts(); // Actualiza la lista de contactos después de agregar uno nuevo
      } else {
        console.error("Error al agregar contacto");
      }
    } catch (error) {
      console.error("Error en AddContactUs:", error);
    }
  };

  // Función para obtener todos los contactos
  const fetchContacts = async () => {
    try {
      const data = await getContactUs();
      if (data && Array.isArray(data)) {
        console.log("Contactos obtenidos exitosamente:", data);
        setContacts(data); // Actualiza el estado con los contactos obtenidos
      } else {
        console.error("Formato de datos inválido:", data);
      }
    } catch (error) {
      console.error("Error al obtener los contactos:", error);
    }
  };

  return (
    <ContactUsContext.Provider value={{ AddContactUs, fetchContacts, contacts }}>
      {children}
    </ContactUsContext.Provider>
  );
};