export const metadata = {
  title: "Projects",
  description: "A showcase of projects by Esteban Leandro Marin.",
};

const ProjectsPage = () => {
  return (
    <>
      {/* Neon header */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 mt-12">
        <span className="text-orange-500 glow-orange">Projects</span>
      </h1>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-neon border border-green-900/50">
          <h2 className="text-2xl font-semibold mb-4">Project 1</h2>
          <p>Description of project 1.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-neon border border-green-900/50">
          <h2 className="text-2xl font-semibold mb-4">Project 2</h2>
          <p>Description of project 2.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </>
  );
};

export default ProjectsPage;
