function StartupIdea() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="startup" 
        data-name="startup" 
        data-file="components/StartupIdea.js"
        className="min-h-screen gradient-bg py-24"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-black text-center section-title mb-20">STARTUP IDEA</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="content-glass card-3d p-16 rounded-xl text-center"
                 style={{ transform: 'perspective(1000px) rotateX(8deg) rotateY(1deg)' }}>
              <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10 neon-border floating-animation"
                   style={{ transform: 'perspective(600px) rotateX(25deg) rotateY(5deg)' }}>
                <i data-lucide="lightbulb" className="w-16 h-16 text-black icon-3d"></i>
              </div>
              
              <h3 className="text-5xl font-bold text-green-300 mb-8"
                  style={{ transform: 'perspective(400px) rotateX(10deg)' }}>
                GUIDECAR
              </h3>
              
              <p className="text-2xl text-gray-200 leading-relaxed mb-12 font-light">
                Currently in development, this AI-driven career guidance platform is designed to navigate the complexities of the modern job market. It empowers students and professionals to discover emerging roles, assess skill gaps, and build personalized learning paths through smart recommendations, interactive modules, and real-world project validation—helping users make confident, future-ready career decisions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {['target', 'zap', 'trophy'].map((icon, index) => (
                  <div key={index} 
                       className="content-glass card-3d p-8 rounded-lg"
                       style={{ 
                         transform: `perspective(800px) rotateX(${10 + index * 2}deg) rotateY(${(index - 1) * 3}deg)`,
                         animationDelay: `${index * 0.2}s`
                       }}>
                    <i data-lucide={icon} className="w-12 h-12 text-green-400 mx-auto mb-6 icon-3d"></i>
                    <h4 className="text-2xl font-bold text-green-300 mb-4">
                      {['🚧 Problem ', '💡 Solution', '🌟 Impact'][index]}
                    </h4>
                    <p className="text-gray-300 text-lg">
                      {[
                        'In a rapidly evolving job market, students and professionals often struggle to identify in-demand roles, understand required skills, and find reliable learning paths. Career choices are made with limited visibility, leading to mismatches between industry needs and personal preparation.',
                        'To address this gap, I developed an AI-powered Career Guidance Platform that helps users explore emerging job sectors, connect with hiring opportunities, and bridge their skill gaps through curated learning resources. The platform includes tickable learning modules, project submissions for validation, and personalized roadmaps powered by data-driven insights.',
                        'By simplifying complex career decisions into actionable steps, the platform empowers individuals to take charge of their professional growth. It enhances employability, aligns talent with industry demand, and fosters a more confident, prepared workforce ready for the future of work.'
                      ][index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('StartupIdea component error:', error);
    reportError(error);
  }
}
