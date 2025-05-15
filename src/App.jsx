import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";

const projects = [
  {
    title: "Project One",
    description: "Landing Page for an educational institute",
    link: "https://vigyanpathonline.com",
  },
  {
    title: "Project Two",
    description: "Weather App",
    link: "https://weather-app-akhilesh.netlify.app/",
  },
];

const skills = [
  "HTML-5",
  "CSS-3",
  "Javascript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
  "REST APIs",
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    emailjs
      .send(
        "service_sv4qcf8",
        "template_6sx7uas",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "bqTEIYK9xia5W7B_W"
      )
      .then(
        (result) => {
          setSending(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setSending(false);
          setError("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl"
              onClick={() => {
                setModalOpen(false);
                setSent(false);
                setError("");
              }}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center">Contact Me</h3>
            {sent ? (
              <div className="text-green-400 text-center py-8">Thank you! Your message has been sent.</div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSend}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleInput}
                  required
                  className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleInput}
                  required
                  className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleInput}
                  required
                  rows={4}
                  className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
                />
                {error && <div className="text-red-400 text-sm text-center">{error}</div>}
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow-lg transition-all disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text select-none">
            Akhilesh
          </div>
          {/* Nav Links */}
          <div className="flex gap-8 text-lg font-medium">
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      <div className="pt-20 flex-1 flex flex-col">
        {/* Hero/About Section */}
        <section className="flex flex-col justify-center items-center min-h-screen w-full px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
          >
            Hi, I'm Akhilesh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mb-8 text-gray-300"
          >
            I'm a passionate web developer specializing in building beautiful, performant, and accessible web applications.
          </motion.p>
          <div className="flex gap-6 justify-center mb-8">
            <a
              href="https://www.linkedin.com/in/akhilesh-agashe-0ab145260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:akhilesh.agashe05@gmail.com"
              className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-blue-500/25"
          >
            View My Work
          </motion.a>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto w-full scroll-mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
          >
            Projects
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50 min-w-[300px] max-w-[350px] w-full"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-400 font-medium hover:text-blue-300 transition-colors inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
          >
            Skills
          </motion.h2>
          <motion.ul className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, idx) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-gray-800/50 backdrop-blur-sm text-blue-400 px-6 py-3 rounded-full font-medium shadow-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 max-w-3xl mx-auto w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-lg text-gray-300"
          >
            Interested in working together or have a question? Reach out!
          </motion.p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-blue-500/25"
            onClick={e => { e.preventDefault(); setModalOpen(true); }}
          >
            Say Hello
          </motion.a>
        </section>
      </div>
      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4">
          &copy; {new Date().getFullYear()} Akhilesh. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
