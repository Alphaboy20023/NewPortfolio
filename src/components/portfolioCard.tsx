// src/components/PortfolioCard.tsx
import { useState, useEffect } from "react";

type Props = {
  project: {
    id: string;
    title: string;
    role: string;
    year: string;
    description: string;
    modalDescription:string;
    tech: string[];
    image: string;
    liveLink: string;
    sourceLink: string;
  };
};

const PortfolioCard = ({ project }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row justify-between p-4">
        {/* Mobile/Desktop shared image */}
        <div className="w-full md:w-1/2">
          <img src={project.image} alt={project.title} className="w-full h-auto p-2 rounded-lg" />
        </div>

        {/* Info */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-blue-700">{project.title}</h2>
          <p className="text-sm mt-1 text-gray-500">
            {project.role} <span className="mx-1">•</span> {project.year}
          </p>
          <p className="text-gray-600 mt-2 text-2xl">{project.description}</p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-3  text-[#6070FF] ">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-100 text-xl px-3 py-1 rounded-md bg-[#EBEBFF] font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-4 bg-white border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md"
          >
            See Project
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-4xl w-full p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 text-3xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
            <p className="text-gray-500 mb-4">
              {project.role} <span className="mx-1">•</span> {project.year}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <p className="text-gray-700 mb-4 text-md">{project.modalDescription}</p>
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
      )}
    </>
  );
};

export default PortfolioCard;
