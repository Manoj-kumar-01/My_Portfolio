function Hero() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="hero" 
        data-name="hero" 
        data-file="components/Hero.js"
        className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
             <h1 
  className="text-8xl lg:text-9xl font-black main-title mb-8 floating-animation mt-6"
  style={{ 
    textShadow: '0 0 10px #00ff88, 0 0 12px #00ff88, 0 0 14px #00ff88',
    WebkitTextStroke: '1px rgba(0, 255, 136, 0.2)'
  }}
>
  MANOJ KUMAR
</h1> 
              <h2 className="text-3xl lg:text-4xl text-green-300 mb-10 font-semibold">
                Computer Science Student & Aspiring Innovator
              </h2>

              <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl font-light">
                I’m a Computer Science student driven to solve real-world challenges through Full-Stack Development, AI, and creative entrepreneurship.
                 My goal? Build tech that matters.
              </p>

              <div className="flex space-x-6 justify-center lg:justify-start">
                
                <a href="./Resume%28Manoj%29.pdf" download className="border-2 border-gray-500 px-10 py-4 rounded-full text-gray-200 hover:text-green-400 text-lg font-medium transition-all duration-300 hover:scale-105">
                  Download CV
                  </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
      <div className="w-[240px] h-[460px] rounded-2xl overflow-hidden photo-3d">
  <img 
    src="MyImage.jpg"
    alt="Manoj Kumar - Student"
    className="w-full h-full object-cover scale-125 transition-transform duration-500"
  />
</div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center neon-border floating-animation">
                  <i data-lucide="graduation-cap" className="w-12 h-12 text-black"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}