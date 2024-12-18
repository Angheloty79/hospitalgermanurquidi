import { useState, useEffect } from "react";
import { useContactUs } from "../../context/contactUsContext";

const ContactUs = () => {
  const { AddContactUs, fetchContacts, contacts } = useContactUs();
  const [formData, setFormData] = useState({
    nameContact: "",
    email: "",
    phoneNumber: "",
    gender: "",
    message: "",
  });

  // Ejecutar fetchContacts al montar el componente
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  // Maneja cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AddContactUs(formData);
      alert("Mensaje enviado exitosamente");

      // Refresca la lista de contactos después de agregar uno nuevo
      fetchContacts();

      setFormData({
        nameContact: "",
        email: "",
        phoneNumber: "",
        gender: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error al enviar tu mensaje");
    }
  };

  return (
    <section className="contact-us py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Google Maps */}
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.792204168839!2d-66.14839!3d-17.38647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373d0b1b1b1b1%3A0x8f71f6578ee17b77!2sHospital%20Materno%20Infantil%20Germ%C3%A1n%20Urquidi!5e0!3m2!1ses!2sbo!4v1683471190656!5m2!1ses!2sbo"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          {/* Formulario de contacto */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
            <div className="contact-us-form bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Contáctanos
              </h2>
              <form className="form space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="nameContact"
                    placeholder="Nombre"
                    value={formData.nameContact}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Teléfono"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="gender"
                    placeholder="Género"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tu Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 h-40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
                <button
                  className="btn bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                  type="submit"
                >
                  Enviar Tu Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="contact-info mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="single-info bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
              <i className="icofont-ui-call text-5xl text-blue-500"></i>
              <div className="content">
                <h3 className="text-xl font-bold text-gray-800">
                  +(000) 1234 56789
                </h3>
                <p className="text-gray-600">info@company.com</p>
              </div>
            </div>
            <div className="single-info bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
              <i className="icofont-google-map text-5xl text-blue-500"></i>
              <div className="content">
                <h3 className="text-xl font-bold text-gray-800">
                  2 Fire Brigade Road
                </h3>
                <p className="text-gray-600">Chittagong, Lakshmipur</p>
              </div>
            </div>
            <div className="single-info bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
              <i className="icofont-wall-clock text-5xl text-blue-500"></i>
              <div className="content">
                <h3 className="text-xl font-bold text-gray-800">
                  Mon - Sat: 8am - 5pm
                </h3>
                <p className="text-gray-600">Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de contactos registrados */}
        <RegisteredContacts contacts={contacts} />
      </div>
    </section>
  );
};

// Componente para mostrar contactos registrados
const RegisteredContacts = ({ contacts }) => (
  <div className="registered-contacts mt-16">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      Contactos Registrados
    </h3>
    {contacts && contacts.length > 0 ? (
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li
            key={contact.contactId}
            className="p-4 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <p>
              <strong>Nombre:</strong> {contact.contactName}
            </p>
            <p>
              <strong>Email:</strong> {contact.contactEmail}
            </p>
            <p>
              <strong>Teléfono:</strong> {contact.contactPhone}
            </p>
            <p>
              <strong>Género:</strong> {contact.contactGender}
            </p>
            <p>
              <strong>Mensaje:</strong> {contact.contactMessage}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600">No hay contactos registrados aún.</p>
    )}
  </div>
);

export default ContactUs;