import { useForm } from "react-hook-form";
import { useActivity } from "../../context/activityContext";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ActivityUpdate() {
  const { FetchActivities, activities, UpdateActivities } = useActivity();
  const { id } = useParams(); // Obtener ID de la URL
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
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
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [existingFile, setExistingFile] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        setLoading(true);

        // Asegurarse de que las actividades estén cargadas
        if (activities.length === 0) {
          await FetchActivities();
        }

        const activity = activities.find((a) => a.activityId === parseInt(id));

        if (activity) {
          // Cargar datos en el formulario
          setValue("title", activity.title);
          setValue("esMultiDia", activity.multiDay);
          setValue("dateStart", activity.dateStart.split("T")[0]);
          setValue("timeStart", activity.dateStart.split("T")[1]?.substring(0, 5) || "");

          if (activity.multiDay) {
            setValue("dateEnd", activity.dateEnd.split("T")[0]);
            setValue("timeEnd", activity.dateEnd.split("T")[1]?.substring(0, 5) || "");
          }

          setExistingImage(activity.imageAddress); // Imagen existente
          setExistingFile(activity.fileAddress); // Archivo existente
        } else {
          console.error("Actividad no encontrada");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la actividad:", error);
        setLoading(false);
      }
    };

    fetchActivity();
  }, [FetchActivities, activities, id, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
  
      // Campos obligatorios
      formData.append("title", data.title);
      formData.append("multiDay", esMultiDia ? "true" : "false");
      formData.append("dateStart", data.dateStart);
      formData.append("timeStart", data.timeStart);
  
      // Campos opcionales
      if (esMultiDia && data.dateEnd) {
        formData.append("dateEnd", data.dateEnd);
      }
      if (esMultiDia && data.timeEnd) {
        formData.append("timeEnd", data.timeEnd);
      }
  
      // Validar y agregar imagen o archivo seleccionado
      if (selectedImage || selectedFile) {
        const file = selectedImage || selectedFile;
  
        if (file.size > 0) {
          formData.append("file", file);
        } else {
          alert("El archivo seleccionado no es válido.");
          return;
        }
      }
  
      // Llamar a la función de actualización de la actividad
      await UpdateActivities(id, formData);
  
      // Mensaje de confirmación y redirección
      alert("Actividad actualizada con éxito");
      navigate("/actividades");
    } catch (error) {
      console.error("Error al actualizar la actividad:", error);
  
      // Manejo de errores
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("Hubo un error al actualizar la actividad. Por favor, revisa los datos e intenta de nuevo.");
      }
    }
  };  

  if (loading) {
    return <div className="text-center py-12">Cargando actividad...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="py-8 px-6 sm:px-10">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Actualizar Actividad
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

            {/* Evento de varios días */}
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
                  Fecha de inicio
                </label>
                <input
                  type="date"
                  id="dateStart"
                  {...register("dateStart", { required: "Este campo es requerido" })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

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
            </div>

            {esMultiDia && (
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
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
              </div>
            )}

            {/* Imagen existente */}
            {existingImage && (
              <div>
                <p className="text-sm text-gray-500 mb-2">Imagen actual:</p>
                <img
                  src={`/uploads/${existingImage}`}
                  alt="Imagen actual"
                  className="max-w-full h-auto"
                />
              </div>
            )}

            {/* Subir nueva imagen */}
            <div>
              <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
                Actualizar Imagen (opcional)
              </label>
              <input
                id="imagen"
                type="file"
                accept="image/*"
                className="mt-2 block w-full"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </div>

            {/* Archivo existente */}
            {existingFile && (
              <div>
                <p className="text-sm text-gray-500 mb-2">Archivo actual:</p>
                <a
                  href={`/uploads/${existingFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Descargar archivo
                </a>
              </div>
            )}

            {/* Subir nuevo archivo */}
            <div>
              <label htmlFor="archivo" className="block text-sm font-medium text-gray-700">
                Actualizar Archivo (opcional)
              </label>
              <input
                id="archivo"
                type="file"
                accept=".pdf,.doc,.docx"
                className="mt-2 block w-full"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Actualizar Actividad
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}