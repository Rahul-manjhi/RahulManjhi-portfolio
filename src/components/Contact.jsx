// import React from "react";

// function Contact() {
//   return (
//     <section id="contact" className="p-10 bg-gray-900 text-white text-center">
//       <h2 className="text-3xl font-bold mb-6">Contact</h2>
//       <p>Email: <a href="mailto:Rahul1322rahul@gmail.com" className="text-blue-400">Rahul1322rahul@gmail.com</a></p>
//       <p>Phone: <a href="tel:+917836997866" className="text-blue-400">+91-7836-99-7866</a></p>
//       <p>GitHub: <a href="https://github.com/Rahul-manjhi" target="_blank" rel="noopener noreferrer" className="text-blue-400">Rahul-manjhi</a></p>
//     </section>
//   );
// }

// export default Contact;


import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3blhwqe",   // e.g. service_3blhwqe
      "template_70yboqt",  // e.g. template_abcd123
      form.current,
      "Syc-g1XHe4aoM8XIB"    // e.g. XyZ123abc456
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Try again!");
      }
    );
  };

  return (
    <section id="contact" className="p-10 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      
      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-2 rounded-md text-black"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-2 rounded-md text-black"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 rounded-md text-black"
          rows="5"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
        >
          Send Message
        </button>
      </form>

      {/* Static Info (optional, keep if you want) */}
      <div className="mt-8 space-y-2">
        <p>Email: <a href="mailto:Rahul1322rahul@gmail.com" className="text-blue-400">Rahul1322rahul@gmail.com</a></p>
        <p>Phone: <a href="tel:+917836997866" className="text-blue-400">+91-7836-99-7866</a></p>
        <p>GitHub: <a href="https://github.com/Rahul-manjhi" target="_blank" rel="noopener noreferrer" className="text-blue-400">Rahul-manjhi</a></p>
      </div>
    </section>
  );
}

export default Contact;
