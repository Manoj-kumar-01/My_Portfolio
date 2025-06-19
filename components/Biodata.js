function Biodata() {
  try {
    const bioData = [
      { label: 'Full Name', value: 'Patnala Manoj Kumar', icon: 'user' },
      { label: 'Age', value: '19 Years', icon: 'calendar' },
      { label: 'Education', value: 'Computer Science, B.Tech (Pursuing)', icon: 'graduation-cap' },
      { label: 'Location', value: 'Visakhapatnam, Andhra Pradesh', icon: 'map-pin' },
      { label: 'Languages', value: 'English, Telugu', icon: 'globe' },
      { label: 'Interests', value: 'Full Stack Development, AI ', icon: 'heart' }
    ];

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="biodata" 
        data-name="biodata" 
        data-file="components/Biodata.js"
        className="min-h-screen bg-black py-24"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-black text-center section-title mb-20">BIO DATA</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bioData.map((item, index) => (
                <div 
                  key={index}
                  className="content-glass card-3d p-8 rounded-xl"
                  style={{
                    transform: `perspective(1000px) rotateX(${6 + index * 2}deg) rotateY(${index % 2 === 0 ? 3 : -3}deg)`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center neon-border"
                         style={{ transform: 'perspective(300px) rotateX(20deg) rotateY(10deg)' }}>
                      <i data-lucide={item.icon} className="w-8 h-8 text-black icon-3d"></i>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-green-300 mb-2"
                          style={{ transform: 'perspective(300px) rotateX(5deg)' }}>
                        {item.label}
                      </h3>
                      <p className="text-gray-200 text-xl">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Biodata component error:', error);
    reportError(error);
  }
}
