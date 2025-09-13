import React from "react";

export interface Project {
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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-xl max-w-4xl w-full p-7 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-3xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
        <p className="text-gray-500 mb-4">
          {project.role} <span className="mx-1">•</span> {project.year}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <img src={project.image} alt={project.title} className="rounded-lg" />
          <div className="flex flex-col justify-between">
            <p className="text-gray-700 mb-4 text-sm font-semibold">
              {project.modalDescription.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 text-[#6070FF]">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-3 py-1 rounded-md bg-[#EBEBFF] font-semibold text-xl"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md"
              >
                See Live
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
