import { createContext, useContext, useState } from "react";

import { createServices } from "../ApiR/services.api";

export const AuthContext = createContext();
export const useService = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("no hay servicio");
  return context;
};

export const ServiceProvider = ({ children }) => {
  /// vrear la funciones de CRUD
  /// fucion Crear servisio

  const AddServices = async (data) => {
    const servicesRows = await createServices(data);
    if (servicesRows.status === 200) {

      console.log("inccersion exitosa");
    } else {
      console.log("Erro en agrgar sevicios");
    }

  }

  return (
    <AuthContext.Provider value={{ AddServices }}>
      {children}
    </AuthContext.Provider>
  );
};
