import Navbar from "../components/Nav";
import Accordion from "../components/accordion";
import { TypeAnimation } from "react-type-animation";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div
        className=" bg-cover bg-center bg-white flex flex-col-reverse lg:flex-row items-center justify-center gap-6 h-auto min-h-screen p-6 md:p-10 [border-end-start-radius:110px] [box-shadow:0_0_15px_rgba(0,0,0,0.3)]"
        style={{ backgroundImage: "url('./Img/Header bg@2x.png')" }}
      >

        <div className="flex-1 flex flex-col justify-center space-y-6 max-w-2xl text-center lg:text-left">
          <TypeAnimation
            sequence={[
              'I Am Akinola Victor',
              2000,
              'I Am Glad to Meet You',
              2000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="font-semibold text-2xl logo sm:text-3xl lg:text-4xl"
          />
          <p className="text-[#344563] text-base sm:text-lg font-medium leading-relaxed">
            I'm a passionate Software Developer with a knack for crafting
            innovative, user-friendly applications and solving all the problems
            that pop up along the development journey. I'm fluent in JavaScript
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
        </div>

        {/* Image */}
        <div className="flex-1 pt-[70px] lg:pt-12 flex justify-center items-center max-w-md sm:max-w-sm lg:max-w-lg">
          <img
            src="/img/portfolio_image.png"
            alt="my_picture"
            className="rounded-xl w-full h-auto shadow-lg"
          />
        </div>
      </div>


      <Accordion />
    </>
  );
};

export default Portfolio;
