import { useForm } from "react-hook-form";
import { useActivity } from "../../context/activityContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Activity() {
  const navigate = useNavigate();
  const { AddActivity } = useActivity();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      esMultiDia: false,
      dateStart: "",
      timeStart: "",
      dateEnd: "",
      timeEnd: "",
    },
  });

  const esMultiDia = watch("esMultiDia");

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
  
      // Campos obligatorios
      formData.append("title", data.title);
      formData.append("multiDay", esMultiDia ? "true" : "false");
      formData.append("dateStart", data.dateStart);
      formData.append("timeStart", data.timeStart);
  
      // Campos opcionales
      if (esMultiDia) {
        formData.append("dateEnd", data.dateEnd || null);
        formData.append("timeEnd", data.timeEnd || null);
      }
  
      // Verifica que los archivos existan antes de adjuntarlos
      if (selectedImage) {
        formData.append("file", selectedImage);
      } else {
        console.warn("No se seleccionó ninguna imagen.");
      }
  
      if (selectedFile) {
        formData.append("file", selectedFile);
      } else {
        console.warn("No se seleccionó ningún archivo adicional.");
      }
  
      // Log para verificar los datos que se están enviando
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
  
      const response = await AddActivity(formData);
      console.log("Actividad registrada exitosamente:", response);
      alert("Actividad registrada con éxito");
      navigate("/actividadesLista")
    } catch (error) {
      console.error("Error al registrar la actividad:", error);
      alert("Hubo un error al registrar la actividad.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="py-8 px-6 sm:px-10">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Formulario de Actividades
          </h2>

          <div className="space-y-6">
            {/* Título */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <input
                id="title"
                {...register("title", { required: "Este campo es requerido" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>}
            </div>

            {/* Checkbox de evento de varios días */}
            <div className="flex items-center">
              <input
                id="esMultiDia"
                type="checkbox"
                {...register("esMultiDia")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="esMultiDia" className="ml-2 block text-sm text-gray-900">
                Evento de varios días
              </label>
            </div>

            {/* Fechas y horarios */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="dateStart" className="block text-sm font-medium text-gray-700">
                  {esMultiDia ? "Fecha de inicio" : "Fecha del evento"}
                </label>
                <input
                  type="date"
                  id="dateStart"
                  {...register("dateStart", { required: "Este campo es requerido" })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.dateStart && (
                  <p className="mt-2 text-sm text-red-600">{errors.dateStart.message}</p>
                )}
              </div>

              {esMultiDia && (
                <div>
                  <label htmlFor="dateEnd" className="block text-sm font-medium text-gray-700">
                    Fecha de fin
                  </label>
                  <input
                    type="date"
                    id="dateEnd"
                    {...register("dateEnd")}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="timeStart" className="block text-sm font-medium text-gray-700">
                  Hora de inicio
                </label>
                <input
                  type="time"
                  id="timeStart"
                  {...register("timeStart", { required: "Este campo es requerido" })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {esMultiDia && (
                <div>
                  <label htmlFor="timeEnd" className="block text-sm font-medium text-gray-700">
                    Hora de fin
                  </label>
                  <input
                    type="time"
                    id="timeEnd"
                    {...register("timeEnd")}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              )}
            </div>

            {/* Subir archivos */}
            <div>
              <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
                Imagen
              </label>
              <input
                id="imagen"
                type="file"
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </div>

            <div>
              <label htmlFor="archivo" className="block text-sm font-medium text-gray-700">
                Archivo
              </label>
              <input
                id="archivo"
                type="file"
                accept=".pdf,.doc,.docx"
                className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </div>
          </div>

          {/* Botón de enviar */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </div>
          <br/>
          {/* Botón "Agregar Servicio" */}
          <button
            onClick={() => navigate("/actividadesLista")}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Ver Lista
          </button>
        </div>
      </form>
    </div>
  );
}