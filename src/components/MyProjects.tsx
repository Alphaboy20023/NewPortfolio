import { useState } from "react";
import { projects } from "../Projects"; // ✅ Your data
import ProjectModal from "./modal";

interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  modalDescription: string;
  image: string;
  tech: string[];
  liveLink: string;
  sourceLink: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [allOpen, setAllOpen] = useState(false);

  return (
    <section className="mt-12">
      {/* Projects preview */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center max-w-full p-4 lg:p-0">
        {projects.slice(0, 3).map((project: Project, i: number) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden flex flex-col md:w-[calc(33%-1rem)] lg:w-[calc(28%-1rem)] border border-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full object-cover"
            />

            <div className="p-4 flex flex-col gap-4 flex-1">
              <h2 className="text-xl font-bold text-blue-700">{project.title}</h2>
              <p className="text-sm text-gray-500">
                {project.role} • {project.year}
              </p>
              <p className="text-gray-600 text-[15px] flex-1">{project.description}</p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 text-[#6070FF]">
                  {project.tech.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-[#EBEBFF] px-3 py-1 rounded-md font-semibold text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md"
                >
                  See Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded list (dropdown style) */}
      {allOpen && (
        <div className="mt-8 flex flex-col md:flex-row md:flex-wrap gap-6 justify-center p-4 lg:p-0">
          {projects.slice(3).map((project: Project, i: number) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden flex flex-col md:w-[calc(33%-1rem)] lg:w-[calc(28%-1rem)] border border-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full object-cover"
              />

              <div className="p-4 flex flex-col gap-4 flex-1">
                <h2 className="text-xl font-bold text-blue-700">{project.title}</h2>
                <p className="text-sm text-gray-500">
                  {project.role} • {project.year}
                </p>
                <p className="text-gray-600 text-[15px] flex-1">{project.description}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4 text-[#6070FF]">
                    {project.tech.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-[#EBEBFF] px-3 py-1 rounded-md font-semibold text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md"
                  >
                    See Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All toggle */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setAllOpen((prev) => !prev)}
          className="bg-white border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-md"
        >
          {allOpen ? "Hide Projects" : "View All Projects"}
        </button>
      </div>

      {/* Single project modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
