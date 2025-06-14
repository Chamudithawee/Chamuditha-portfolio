export default function ContactPage() {
  return (
    <section className="py-16 space-y-4 bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Get in Touch</h1>
      <p>
        Feel free to reach out if you'd like to discuss a project or just want to connect.
      </p>
      <a
        className="text-blue-600 underline"
        href="mailto:developer@example.com"
      >
        developer@example.com
      </a>
    </section>
  );
}
