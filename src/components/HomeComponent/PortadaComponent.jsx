export default function Portada(){
    return (
        <>
          <div>
            <div className="bg-cyan-100 py-10 px-16 rounded-xl">
              <div className="flex flex-col items-start">
                <h2 className="text-4xl font-bold mb-4">London Bridge Hospital</h2>
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371.26.918.967l-1.885 6.038a1 1 0 00.083 1.291l1.125 1.125a1 1 0 001.414 0l1.125-1.125a1 1 0 00.083-1.291l-1.885-6.038c-.453-.707-.04-.967.918-.967h3.462a1 1 0 00.95-.69l1.07-3.292c.3.921 1.603.921 1.902 0l.714 2.141c.376 1.136-.759 2.333-1.964 2.018l-2.772-.884a1 1 0 00-1.071 0l-2.772.884c-1.205.315-2.34-.882-1.964-2.018l.714-2.141z" />
                  </svg>
                  <span className="text-gray-500">4,301 reviews</span>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371.26.918.967l-1.885 6.038a1 1 0 00.083 1.291l1.125 1.125a1 1 0 001.414 0l1.125-1.125a1 1 0 00.083-1.291l-1.885-6.038c-.453-.707-.04-.967.918-.967h3.462a1 1 0 00.95-.69l1.07-3.292c.3.921 1.603.921 1.902 0l.714 2.141c.376 1.136-.759 2.333-1.964 2.018l-2.772-.884a1 1 0 00-1.071 0l-2.772.884c-1.205.315-2.34-.882-1.964-2.018l.714-2.141z" />
                  </svg>
                  <span className="text-gray-500">Verified by: doctify</span>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z" />
                  </svg>
                  <span className="text-gray-500">
                    27 Tooley Street, London, SE1 2PR
                  </span>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Get Directions
                </button>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 20a10 10 0 110-20 10 10 0 010 20z" />
                    <path d="M12.457 12.457l-4-4a1 1 0 00-1.414 1.414L10 14.414l4-4a1 1 0 00-1.414-1.414L10 10.586l-4 4a1 1 0 001.414 1.414L10 12.414l4 4a1 1 0 001.414-1.414L12.457 12.457z" />
                  </svg>
                  <span className="text-gray-500">Monday to Sunday: 24h</span>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Find a consultant
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Call us today
                </button>
                <div className="flex items-center mt-4">
                  <div className="flex items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 20a10 10 0 110-20 10 10 0 010 20z" />
                      <path d="M12.457 12.457l-4-4a1 1 0 00-1.414 1.414L10 14.414l4-4a1 1 0 00-1.414-1.414L10 10.586l-4 4a1 1 0 001.414 1.414L10 12.414l4 4a1 1 0 001.414-1.414L12.457 12.457z" />
                    </svg>
                    <span className="text-gray-500">Care Quality Commission</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-500">Outstanding</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             
              </div>
            </div>
          </div>
        </>
      );
}