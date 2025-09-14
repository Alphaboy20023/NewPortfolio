const About = () => {
    return (
        <section className="px-6 py-12 mt-5 border-t-2 border-b-2 border-blue-200">
            {/* Heading */}
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-center">
                    About <span className="text-blue-700">Me</span>
                </h1>
                <div className="border-b-2 border-blue-600 w-32 md:w-44 mt-2"></div>
            </div>

            {/* Content */}
            <div className=" relative flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
                {/* Text Section */}
                <div className="absolute top-1 left-1 w-10 h-10 bg-blue-400 rounded-full blur-lg opacity-80"></div>
                <div className="absolute bottom-1 right-1 w-10 h-10 bg-blue-400 rounded-full blur-lg opacity-80"></div>
                <div className=" text-base md:text-lg lg:w-1/2 text-gray-900 space-y-4 text-center lg:text-left">

                    <p>
                        I'm a passionate Software Developer with a knack for crafting
                        innovative, user-friendly applications and solving all the problems
                        that pop up along the development journey. I'm fluent in JavaScript
                        and Python.
                    </p>
                    <p>
                        I'm a passionate Software Developer with a knack for crafting
                        innovative, user-friendly applications and solving all the problems
                        that pop up along the development journey. I'm fluent in JavaScript
                        and Python.
                    </p>
                    <p>
                        I'm a passionate Software Developer with a knack for crafting
                        innovative, user-friendly applications and solving all the problems
                        that pop up along the development journey. I'm fluent in JavaScript
                        and Python.
                    </p>

                    <div className="flex space-x-3">
                        <p className="border-blue-600 border rounded-md p-2 text-lg font-medium text-blue-700">10+ Projects </p>
                        <p className="border-blue-600 border rounded-md p-2 text-lg font-medium text-blue-700">2+ years of Experience</p>
                    </div>


                </div>


                {/* Profile Card */}
                <div className="w-full sm:w-72 md:w-80 rounded-lg p-6 flex flex-col bg-backdrop">
                    <img
                        src="./my-portfolio-icon.jpg"
                        alt="Victor portrait"
                        className="rounded-3xl w-full h-auto object-cover"
                    />
                    <h2 className="text-center text-lg md:text-xl text-blue-700 font-semibold mt-4">
                        Akinola Victor
                    </h2>
                    <p className="text-center text-sm md:text-base font-medium">
                        FullStack Software Engineer
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
