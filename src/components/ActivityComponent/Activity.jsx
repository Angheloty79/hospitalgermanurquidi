import { useForm, Controller } from 'react-hook-form';

export default function Activity() {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    defaultValues: {
      esMultiDia: false,
    }
  });

  const esMultiDia = watch('esMultiDia');

  const onSubmit = (data) => {
    // Aquí puedes manejar el envío del formulario
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="py-8 px-6 sm:px-10">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Formulario de Actividades</h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <input
                id="titulo"
                {...register("titulo", { required: "Este campo es requerido" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.titulo && <p className="mt-2 text-sm text-red-600">{errors.titulo.message}</p>}
            </div>

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

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700">
                  {esMultiDia ? 'Fecha de inicio' : 'Fecha del evento'}
                </label>
                <input
                  type="date"
                  id="fechaInicio"
                  {...register("fechaInicio", { required: "Este campo es requerido" })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.fechaInicio && <p className="mt-2 text-sm text-red-600">{errors.fechaInicio.message}</p>}
              </div>

              {esMultiDia && (
                <div>
                  <label htmlFor="fechaFin" className="block text-sm font-medium text-gray-700">Fecha de fin</label>
                  <input
                    type="date"
                    id="fechaFin"
                    {...register("fechaFin", { required: esMultiDia && "Este campo es requerido" })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.fechaFin && <p className="mt-2 text-sm text-red-600">{errors.fechaFin.message}</p>}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="horaInicio" className="block text-sm font-medium text-gray-700">Hora de inicio</label>
                <input
                  type="time"
                  id="horaInicio"
                  {...register("horaInicio", { required: "Este campo es requerido" })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.horaInicio && <p className="mt-2 text-sm text-red-600">{errors.horaInicio.message}</p>}
              </div>

              {esMultiDia && (
                <div>
                  <label htmlFor="horaFin" className="block text-sm font-medium text-gray-700">Hora de fin</label>
                  <input
                    type="time"
                    id="horaFin"
                    {...register("horaFin", { required: esMultiDia && "Este campo es requerido" })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.horaFin && <p className="mt-2 text-sm text-red-600">{errors.horaFin.message}</p>}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
                Imagen
              </label>
              <Controller
                name="imagen"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Subir una imagen</span>
                          <input
                            id="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => onChange(e.target.files[0])}
                            accept="image/*"
                            {...field}
                          />
                        </label>
                        <p className="pl-1">o arrastrar y soltar</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                    </div>
                  </div>
                )}
              />
            </div>

            <div>
              <label htmlFor="archivo" className="block text-sm font-medium text-gray-700">
                Archivo
              </label>
              <Controller
                name="archivo"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="archivo-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Subir un archivo</span>
                          <input
                            id="archivo-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => onChange(e.target.files[0])}
                            {...field}
                          />
                        </label>
                        <p className="pl-1">o arrastrar y soltar</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX hasta 10MB</p>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}