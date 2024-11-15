export default function Contact() {
  return (
    <section id="contact" className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>
        If you’d like to connect, please reach out via the contact form or
        email.
      </p>
      <a
        href="mailto:your-email@example.com"
        className="text-blue-500 hover:underline"
      >
        your-email@example.com
      </a>
    </section>
  );
}
