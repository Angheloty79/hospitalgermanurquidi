import { useActivity } from "../../context/activityContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ActivityList() {
  const { FetchActivities, activities } = useActivity();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        await FetchActivities(); // Llama a FetchActivities una vez
        setLoading(false);
      } catch (error) {
        console.error("Error fetching activities:", error);
        setLoading(false);
      }
    };

    fetchActivities();
  }, [FetchActivities]);

  const handleEdit = (id) => {
    navigate(`/actividadesActualizacion/${id}`); // Navegar a la ruta con el ID
  };

  const handleAddActivity = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    navigate("/actividades"); // Navegar a la ruta de agregar actividad
  };

  if (loading) {
    return <div className="text-center py-12">Cargando actividades...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="py-8 px-6 sm:px-10">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Lista de Actividades
          </h2>

          {activities.length === 0 ? (
            <p className="text-center text-gray-500">No hay actividades registradas.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {activities.map((activity) => (
                <li key={activity.activityId} className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(activity.dateStart).toLocaleDateString()} 
                        {activity.multiDay ? ` - ${new Date(activity.dateEnd).toLocaleDateString()}` : ""}
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleEdit(activity.activityId)} // Navegar al editar con el ID
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 cursor-pointer"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => console.log(`Eliminar actividad con ID: ${activity.activityId}`)}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">
            <form onSubmit={handleAddActivity}>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
              >
                Agregar Nueva Actividad
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}