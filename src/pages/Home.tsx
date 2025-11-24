import Navbar from "../components/Nav";
// import Accordion from "../components/accordion";
// import { TypeAnimation } from "react-type-animation";
import ContactMe from "../components/Contact";
import MyProjects from "../components/MyProjects";
import About from "../components/about";
import MySkills from "../components/MySkills";
import HeroText from "../components/HeroText";
// import SkillsPreview from "../components/skillsPreview";


const Portfolio = () => {
  

  return (
    <>
      <Navbar />
      <section id="home" className="pb-9 px-2">
        <div
          className=" bg-cover bg-center flex flex-col-reverse lg:flex-row items-center justify-center gap-6 pt-28 "
        >

          <div className="flex-1 flex flex-col justify-center space-y-5 max-w-2xl text-center lg:text-left">
            <HeroText />
            <p className="text-[#344563] text-base sm:text-lg font-medium leading-relaxed">
              I'm a passionate Software Developer with a knack for crafting
              innovative, user-friendly applications and solving all the problems
              that pop up along the development journey. I'm fluent in JavaScript, Java
              and Python.
              <br />
              <span className="inline-block mt-2">
                Let's connect — I'd love to explore how we can build something
                amazing together. If you like what you see and have a project you
                need coded, don’t hesitate to contact me.
              </span>
            </p>

            <p className="text-blue-700 font-bold text-lg sm:text-xl">
              LET'S CONNECT
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-3xl">
              <a
                href="https://x.com/prime_victor1?s=21&t=Z1QhoYzPavAh5Tqb3mWWtQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://wa.link/lakfbz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#09fb72]"
              >
                <i className="fa-brands fa-square-whatsapp"></i>
              </a>
              <a
                href="https://github.com/Alphaboy20023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#191a19]"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="mailto:timivictor565@gmail.com"
                className="text-[#141415]"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/victor-akinola-27a33b320/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3271b3]"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div className="flex justify-center">
              <div className="border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white p-2 rounded-lg w-40 text-center cursor-pointer">
                <a href="/documents/Akinola_Victor_CV.pdf"> Get My Resume </a>
                {/* okay */}
                {/* cd to frontend to bknd */}
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="about"><About /></section>
      <section id="projects"><MyProjects /></section>
      <section id="skills"> <MySkills /> </section>
      {/* <section id="skills"> <SkillsPreview /> </section> */}
      {/* contact /> */}
      <section id="contact"><ContactMe /></section>


    </>
  );
};

export default Portfolio;
