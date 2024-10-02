const ContactUs = () => {
    return (
      <section className="contact-us py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="contact-us-left">
                {/* Start Google-map */}
                <div
                  id="myMap"
                  className="w-full h-96 bg-gray-300 rounded-lg shadow-lg"
                ></div>
                {/* End Google-map */}
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <div className="contact-us-form bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contactanos Con Nosotros</h2>
                <p className="text-gray-600 mb-6">
                  Si tienes alguna consulta, sientete libre de contactarnos, con gusto te ayudaremos
                </p>
                {/* Form */}
                <form className="form space-y-6" method="post" action="mail/mail.php">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Correo"
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Telefono"
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="gender"
                        placeholder="Genero"
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tu Mensaje"
                      required
                      className="w-full p-4 h-40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="btn bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                      type="submit"
                    >
                      Envia Tu Mensaje
                    </button>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="news"
                        className="form-checkbox text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">Subscribe to our Newsletter</span>
                    </div>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
  
          <div className="contact-info mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Single Info */}
              <div className="single-info bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
                <i className="icofont-ui-call text-5xl text-blue-500"></i>
                <div className="content">
                  <h3 className="text-xl font-bold text-gray-800">+(000) 1234 56789</h3>
                  <p className="text-gray-600">info@company.com</p>
                </div>
              </div>
              {/* End Single Info */}
              {/* Single Info */}
              <div className="single-info bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
                <i className="icofont-google-map text-5xl text-blue-500"></i>
                <div className="content">
                  <h3 className="text-xl font-bold text-gray-800">2 Fire Brigade Road</h3>
                  <p className="text-gray-600">Chittagong, Lakshmipur</p>
                </div>
              </div>
              {/* End Single Info */}
              {/* Single Info */}
              <div className="single-info bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
                <i className="icofont-wall-clock text-5xl text-blue-500"></i>
                <div className="content">
                  <h3 className="text-xl font-bold text-gray-800">Mon - Sat: 8am - 5pm</h3>
                  <p className="text-gray-600">Sunday Closed</p>
                </div>
              </div>
              {/* End Single Info */}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;