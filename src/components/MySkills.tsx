import { Skills } from "../Project/skills"

interface Skill {
    title: string,
    image: string
}

const MySkills = () => {

    return (
        <section className="p-5 bg-gray-100 pt-8">
            <div className="flex flex-col items-center">
                <h1 className="font-semibold lg:text-3xl text-2xl capitalize text-center max-w-3xl">
                    Here is an overview of the{" "}
                    <span className="text-blue-700">skills</span>,{" "}
                    <span className="text-blue-700">tools</span> and{" "}
                    <span className="text-blue-700">technologies</span> I work with
                </h1>

                {/* Skills grid */}
                <div className="flex flex-wrap justify-center gap-8 pt-8">
                    {Skills.map((skill: Skill, i: number) => (
                        <div
                            key={i}
                            className="flex flex-col items-center w-32"
                        >
                            {/* Octagon image */}
                            <div>
                                <img
                                    src={skill.image}
                                    alt={skill.title}
                                    className=" p-3 object-cover"
                                />
                            </div>
                            {/* Title */}
                            <p className="mt-3 text-lg font-medium text-gray-700 text-center">
                                {skill.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MySkills
