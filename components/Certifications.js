function Certifications() {
  try {
    const certifications = [
      {
        title: 'Python Essestials',
        issuer: 'Cisco Networking Academy',
        date: '2024',
        icon: 'cloud'
      },
      {
        title: 'Mastering Data Structures and Algorithms using C & C++',
        issuer: 'Udemy',
        date: '2024',
        icon: 'bar-chart'
      },
      {
        title: 'Complete Web Design',
        issuer: 'Udemy',
        date: '2024',
        icon: 'code'
      },
      {
        title: 'A complete course covering C, C++ and Java, and Python',
        issuer: 'Datapro',
        date: '2022',
        icon: 'terminal'
      }
    ];

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="certifications" 
        data-name="certifications" 
        data-file="components/Certifications.js"
        className="min-h-screen gradient-bg py-24"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-black text-center section-title mb-20">CERTIFICATIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="content-glass card-3d p-10 rounded-xl text-center"
                style={{
                  transform: `perspective(1000px) rotateX(${8 + index * 2}deg) rotateY(${3 - index}deg)`
                }}
              >
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 neon-border floating-animation"
                     style={{ transform: 'perspective(400px) rotateX(15deg)' }}>
                  <i data-lucide={cert.icon} className="w-12 h-12 text-black icon-3d"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-green-300 mb-4">{cert.title}</h3>
                <p className="text-gray-300 mb-4 text-lg">{cert.issuer}</p>
                <span className="text-green-400 font-bold text-xl">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Certifications component error:', error);
    reportError(error);
  }
}
