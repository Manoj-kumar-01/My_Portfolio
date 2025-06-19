import React from 'react';

function Projects() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold neon-text mb-4">My Projects</h1>
        <p className="text-gray-300 text-lg">Showcasing my personal and academic work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white/5 border border-green-400/20 backdrop-blur-md p-6 rounded-2xl shadow-lg transform hover:rotate-1 hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-green-300 mb-2">Project {i}</h2>
            <p className="text-gray-400 mb-4">Brief description of project {i} goes here.</p>
            <a href="#" className="text-green-400 underline hover:text-green-200">View More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
