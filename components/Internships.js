function Internships() {
  try {
    const internships = [
      {
        company: 'ShadowFox',
        position: 'Web Development Intern',
        duration: 'December 2024- January 2025',
        description: 'As a Web Development Intern at ShadowFox, I engineered responsive web applications using HTML, CSS, and JavaScript, ensuring cross-browser compatibility through rigorous testing and debugging. I collaborated with developers to elevate user experience and managed version control with Git. My work involved integrating RESTful APIs, implementing robust security with OAuth 2.0, two-factor authentication via Node-2fa and Google reCAPTCHA, and introducing Gen-AI (Gemini 1.5 Flash) to power chatbot functionality, blending innovation with real-world problem-solving.',
        icon: 'briefcase'
      },
      {
        company: 'LearnTricks',
        position: 'Full Stack Developer Intern',
        duration: 'May 2025 - June 2025',
        description: 'At LearnTricks, I contributed as a Full Stack Developer Intern, where I developed and maintained dynamic web applications using Node.js. I implemented RESTful APIs for seamless data integration and optimized application performance through code refactoring and testing. My role also involved enhancing user interfaces with Tailwind CSS, ensuring responsive design across devices. Additionally, I integrated third-party services like Firebase for real-time database management and authentication, while applying Agile methodologies to streamline development processes.',
        icon: 'briefcase'
      },
      {
        company: 'PORT Authority',
        position: 'IT Intern',
        duration: 'June 2025 - July 2025',
        description: 'As an IT Intern at PORT Authority, I played a key role in supporting IT operations by troubleshooting hardware and software issues, managing network configurations, and assisting in the deployment of new systems. I collaborated with the IT team to enhance cybersecurity measures, including implementing firewalls and intrusion detection systems. My responsibilities also included maintaining documentation for IT processes and providing technical support to end-users, ensuring smooth daily operations.',
        icon: 'briefcase'
      }
    ];

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="internships" 
        data-name="internships" 
        data-file="components/Internships.js"
        className="min-h-screen bg-black py-24"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-black text-center section-title mb-20">INTERNSHIPS</h2>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {internships.map((internship, index) => (
              <div 
                key={index}
                className="content-glass card-3d p-10 rounded-xl"
                style={{
                  transform: `perspective(1000px) rotateX(${6 + index * 3}deg) rotateY(${index % 2 === 0 ? 2 : -2}deg)`
                }}
              >
                <div className="flex items-start space-x-8">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center neon-border floating-animation"
                       style={{ transform: 'perspective(400px) rotateX(20deg) rotateY(10deg)' }}>
                    <i data-lucide={internship.icon} className="w-10 h-10 text-black icon-3d"></i>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-green-300 mb-3"
                        style={{ transform: 'perspective(500px) rotateX(5deg)' }}>
                      {internship.position}
                    </h3>
                    <h4 className="text-2xl text-green-400 mb-3">{internship.company}</h4>
                    <p className="text-gray-300 mb-6 text-lg">{internship.duration}</p>
                    <p className="text-gray-200 leading-relaxed text-lg">{internship.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Internships component error:', error);
    reportError(error);
  }
}
