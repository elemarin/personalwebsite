const ProjectsPage = () => {

  return (
    <>
        {/* Neon header */}
        <h1 className="text-6xl font-bold text-center mb-8 animate-pulse">
          <span className="text-orange-500 glow-orange-500">Projects</span>
        </h1>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow-neon">
            <h2 className="text-2xl font-semibold mb-4">Project 1</h2>
            <p>Description of project 1.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-neon">
            <h2 className="text-2xl font-semibold mb-4">Project 2</h2>
            <p>Description of project 2.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
    </>
  );
};

export default ProjectsPage;