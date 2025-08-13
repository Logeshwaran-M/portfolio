import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0q4jed", // from EmailJS
        "template_qbtsnea", // from EmailJS
        form.current,
        "GagsbTDn7e50G8zL_" // from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
      <section
        className="bg-gray-950 text-white py-12 px-8"
        id="contact"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
    
        {/* Flex container for two columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-6xl mx-auto">
    
          {/* Left side - Social Links */}
          <div className="flex-1 space-y-6">
            <ul className="space-y-4">
              <li>
              <i className="fab fa-linkedin text-2xl"></i> LinkedIn
                <a
                  href="https://www.linkedin.com/in/logesh-waran-mca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-green-400 transition"
                >https://www.linkedin.com/in/logesh-waran-mca/
                 
                </a>
              </li>
              <li>
              <i className="fab fa-github text-2xl"></i> GitHub  <a
                  href="https://github.com/Logeshwaran-M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-green-400 transition"
                >
                  https://github.com/Logeshwaran-M
                </a>
              </li>
              <li>
              <i className="fas fa-envelope text-2xl"></i> Email
                <a
                  href="mailto:logeshwaran83563@gmail.com"
                  className="flex items-center gap-3 text-green-400 transition"
                >logeshwaran83563@gmail.com

                </a>
              </li>
            </ul>
          </div>
    
          {/* Right side - Contact Form */}
          <div className="flex-1">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
            >
              <div>
                <label className="block mb-1 text-gray-300">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  
}

export default Contact;








