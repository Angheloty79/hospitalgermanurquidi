import { useActivity } from "../../context/activityContext";
import { useEffect, useState } from "react";
import exampleImage from "../../Imgs/ImgServices/IMG_6595.JPG"; // Importa la imagen correctamente

export default function CardActivityComponent() {
  const { FetchActivities, activities } = useActivity();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activities.length === 0) {
          setLoading(true);
          await FetchActivities();
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching activities:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [FetchActivities, activities]);

  if (loading) {
    return <div className="text-center py-12">Cargando actividades...</div>;
  }

  if (activities.length === 0) {
    return <div className="text-center py-12">No hay actividades registradas.</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full relative">
      <div className="swiper default-carousel">
        <div className="swiper-wrapper">
          {activities.map((activity, index) => {
            const backgroundUrl = activity.imageAddress
              ? `/uploads/${activity.imageAddress}`
              : exampleImage; // Usa la imagen importada como fallback

            return (
              <div
                key={activity.activityId}
                className={`swiper-slide ${
                  index === currentIndex ? "block" : "hidden"
                } transition-opacity duration-500`}
                style={{
                  backgroundImage: `url(${backgroundUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  height: "500px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div className="flex flex-col justify-end items-center text-center text-white h-full p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  {/* Título de la actividad */}
                  <h3 className="text-3xl font-bold drop-shadow-md mb-2">{activity.title}</h3>
                  {/* Fecha */}
                  <p className="text-lg drop-shadow-sm">
                    Fecha: {new Date(activity.dateStart).toLocaleDateString()}
                    {activity.multiDay
                      ? ` - ${new Date(activity.dateEnd).toLocaleDateString()}`
                      : ""}
                  </p>
                  {/* Hora */}
                  <p className="text-lg drop-shadow-sm">
                    Hora de inicio: {activity.timeStart}
                    {activity.timeEnd && ` - Hora de fin: ${activity.timeEnd}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-8 justify-center mt-4">
          <button
            onClick={handlePrev}
            className="swiper-button-prev group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
          >
            <svg
              className="h-5 w-5 text-indigo-600 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="swiper-button-next group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
          >
            <svg
              className="h-5 w-5 text-indigo-600 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}