function Skills() {
  try {
    const skills = [
      { name: 'JavaScript', level: 90, icon: 'code' },
      { name: 'HTML', level: 85, icon: 'fa-brands fa-html5' },
      { name: 'Python', level: 80, icon: 'terminal' },
      { name: 'Node.js', level: 80, icon: 'server' },
      { name: 'PHP', level: 45, icon: 'terminal' },
      { name: 'CSS', level: 70, icon: 'css-3' },
      { name: 'Version Control', level: 80, icon: 'git-branch' },
      { name: 'Graphics in C', level: 78, icon: 'monitor' },
      { name: 'Java', level: 75, icon: 'coffee' },
      { name: 'Api Integration', level: 80, icon: 'plug' },
      { name: 'MongoDB', level: 82, icon: 'database' },
    ];

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="skills" 
        data-name="skills" 
        data-file="components/Skills.js"
        className="min-h-screen bg-black py-24"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-black text-center section-title mb-20">TECHNICAL SKILLS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="content-glass card-3d p-8 rounded-xl"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `perspective(1000px) rotateX(${5 + index * 2}deg) rotateY(${2 + index}deg)`
                }}
              >
                <div className="flex items-center mb-6">
                  <i data-lucide={skill.icon} className="w-10 h-10 text-green-400 mr-4 icon-3d"></i>
                  <h3 className="text-2xl font-bold text-green-300">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4" 
                     style={{ transform: 'perspective(200px) rotateX(10deg)' }}>
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${skill.level}%`,
                      boxShadow: '0 1px 6px rgba(0, 255, 136, 0.4)'
                    }}
                  ></div>
                </div>
                
                <span className="text-gray-300 text-lg font-medium">{skill.level}% Proficiency</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    reportError(error);
  }
}
