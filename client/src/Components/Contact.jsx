import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "El nombre es requerido.";
    }

    if (!formData.email) {
      newErrors.email = "El email es requerido.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El email no es válido.";
    }

    if (!formData.message) {
      newErrors.message = "La consulta es requerida.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_qmkn4ew", // Reemplaza con tu Service ID
        "template_28297x4", // Reemplaza con tu Template ID
        form.current,
        "dcjVGu91GmziWQ1wA" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado correctamente.");
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setErrors({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <div className="p-4">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contáctanos
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-md">
              Cualquier problema que necesite resolver, rellene los datos y nos
              pondremos en contacto lo antes posible
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-md text-gray-600"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-100 bg-opacity-50 rounded border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-md text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-100 bg-opacity-50 rounded border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-md text-gray-600"
                    >
                      Consulta
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-100 bg-opacity-50 rounded border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="mx-auto w-full flex items-center justify-center text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg transition duration-200 ease-in-out"
                  >
                    Enviar consulta
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">
                    nosenseindumentaria@gmail.com
                  </a>
                  <p className="leading-normal my-5">
                    San Rafael, Mendoza Argentina
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
