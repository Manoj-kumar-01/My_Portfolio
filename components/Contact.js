function Contact() {
  try {
    const contactMethods = [
      { type: 'Email', value: 'mk8790294044@gmail.com', icon: 'mail', link: 'mk8790294044@gmail.com' },
      { type: 'LinkedIn', value: '/in/manoj-kumar-b7577b2a3/', icon: 'linkedin', link: 'https://www.linkedin.com/in/manoj-kumar-b7577b2a3/' },
      { type: 'GitHub', value: '/Manoj-kumar-01', icon: 'github', link: 'https://github.com/Manoj-kumar-01' },
      { type: 'Phone', value: '+91 7416671907', icon: 'phone', link: 'tel:+7416671907' }
    ];

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="contact" 
        data-name="contact" 
        data-file="components/Contact.js"
        className="min-h-screen gradient-bg py-24"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-black text-center section-title mb-20">GET IN TOUCH</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-2xl text-gray-200 leading-relaxed font-light"
                 style={{ transform: 'perspective(400px) rotateX(5deg)' }}>
                Ready to collaborate on exciting projects or discuss opportunities? 
                Let's connect and build something amazing together!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.link}
                  className="content-glass card-3d p-8 rounded-xl block"
                  style={{
                    transform: `perspective(1000px) rotateX(${7 + index * 2}deg) rotateY(${index % 2 === 0 ? 4 : -4}deg)`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center neon-border"
                         style={{ transform: 'perspective(300px) rotateX(25deg) rotateY(15deg)' }}>
                      <i data-lucide={contact.icon} className="w-8 h-8 text-black icon-3d"></i>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-green-300 mb-2"
                          style={{ transform: 'perspective(300px) rotateX(8deg)' }}>
                        {contact.type}
                      </h3>
                      <p className="text-gray-200 text-xl">{contact.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-center mt-20">
              <p className="text-gray-400 text-lg"
                 style={{ transform: 'perspective(300px) rotateX(3deg)' }}>
                © 2024 Alex Chen. Designed with passion and powered by innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    reportError(error);
  }
}
