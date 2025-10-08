import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  isImage?: boolean;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const SkillsPreview: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const progressBarRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 90, icon: "/Img/javasc!pt.png", isImage: true },
        { name: "Python", level: 85, icon: "/Img/python.jpeg", isImage: true },
        { name: "TypeScript", level: 80, icon: "/img/typescript.png", isImage: true },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚙️",
      skills: [
        { name: "React", level: 90, icon: "/img/react.png", isImage: true },
        { name: "Next.Js", level: 90, icon: "/img/react.png", isImage: true },
        { name: "Django", level: 90, icon: "/img/react.png", isImage: true },
        { name: "Node.js", level: 85, icon: "/img/nodejs.png", isImage: true },
        { name: "Express", level: 80, icon: "/img/express.png", isImage: true }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 95, icon: "/img/git.png", isImage: true },
        { name: "Docker", level: 75, icon: "/img/docker.png", isImage: true },
        { name: "Webpack", level: 70, icon: "/img/webpack.png", isImage: true },
        { name: "Figma", level: 80, icon: "/img/figma.png", isImage: true }
      ]
    }
  ];

  useEffect(() => {
    progressBarRefs.current.forEach((bar, index) => {
      if (bar) {
        const skill = skillCategories.flatMap(cat => cat.skills)[index];
        setTimeout(() => {
          bar.style.width = `${skill.level}%`;
        }, 300 + index * 100);
      }
    });
  }, []);

  const addProgressBarRef = (el: HTMLDivElement | null) => {
    if (el && !progressBarRefs.current.includes(el)) {
      progressBarRefs.current.push(el);
    }
  };

  const handleSkillHover = (skillId: string) => {
    setActiveSkill(skillId);
  };

  const handleSkillLeave = () => {
    setActiveSkill(null);
  };

  return (
    <div className="min-h-screen text-gray-800 bg-gray-200 pt-8 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical expertise across programming languages, frameworks, and development tools
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700/50"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                <span>{category.icon}</span>
                {category.title}
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillId = `${categoryIndex}-${skillIndex}`;
                  return (
                    <div
                      key={skillIndex}
                      className={`relative bg-gray-700/30 rounded-lg p-4 text-center transition-all duration-300 cursor-pointer group ${
                        activeSkill === skillId 
                          ? 'ring-2 ring-purple-500 scale-105' 
                          : 'hover:bg-gray-700/50 hover:scale-105'
                      }`}
                      onMouseEnter={() => handleSkillHover(skillId)}
                      onMouseLeave={handleSkillLeave}
                    >
                      <div className="w-12 h-12 mb-2 mx-auto flex items-center justify-center">
                        {skill.isImage ? (
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <span className="text-2xl font-bold text-purple-400">
                            {skill.icon}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-sm font-medium mb-3 text-white">
                        {skill.name}
                      </div>

                      {/* <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div
                          ref={addProgressBarRef}
                          className="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '0%' }}
                        ></div>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPreview;