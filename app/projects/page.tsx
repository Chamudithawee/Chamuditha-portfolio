export default function ProjectsPage() {
  const projects = [
    { title: 'Task Manager API', description: 'ASP.NET Core Web API with JWT auth' },
    { title: 'MVC Blog', description: 'A simple blogging platform built with ASP.NET MVC' },
    { title: 'Real-time Chat', description: 'SignalR powered chat application' },
  ];

  return (
    <section className="space-y-6 py-16 glass p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.title} className="border border-white/40 glass p-4">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
