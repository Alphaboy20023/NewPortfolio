import { projects } from "../Projects";
import PortfolioCard from "../components/portfolioCard";
import { useState, useEffect } from "react";
import Navbar from "../components/Nav";

const MyProjects = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const desktopOrder = [projects[1], projects[0], projects[2], projects[3]];
  const displayedProjects = isDesktop ? desktopOrder : projects;

  return (
    <section className="flex flex-col gap-8 p-3 md:p-10">
      <Navbar />
      <p className="lg:pt-[40px] pt-[78px] text-gray-600 text-3xl font-semibold">
        My Projects
      </p>
      {displayedProjects.map((project) => (
        <>
          <PortfolioCard key={project.id} project={project} />
        </>
      ))}
    </section>
  );
};

export default MyProjects
