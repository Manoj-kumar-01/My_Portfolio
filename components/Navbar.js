function Navbar() {
  try {
    const [isVisible, setIsVisible] = React.useState(true);
    const [activeSection, setActiveSection] = React.useState('hero');

    const navItems = [
      { id: 'hero', label: 'Home', icon: 'home' },
      { id: 'skills', label: 'Skills', icon: 'code' },
      { id: 'certifications', label: 'Certifications', icon: 'award' },
      { id: 'internships', label: 'Internships', icon: 'briefcase' },
      { id: 'startup', label: 'Startup Idea', icon: 'lightbulb' },
      { id: 'biodata', label: 'Bio Data', icon: 'user' },
      { id: 'contact', label: 'Contact', icon: 'mail' }
    ];

    const scrollToSection = (sectionId) => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    };

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <nav 
        data-name="navbar" 
        data-file="components/Navbar.js"
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 glass-effect rounded-full px-6 py-3"
        style={{
          transform: 'translateX(-50%) perspective(1000px) rotateX(5deg)',
          boxShadow: '0 6px 20px rgba(0, 255, 136, 0.2), 0 3px 10px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeSection === item.id ? 'neon-border neon-text' : 'text-gray-400 hover:text-green-400'
              }`}
              style={{
                transform: 'perspective(300px) rotateX(3deg)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <i data-lucide={item.icon} className="w-4 h-4 icon-3d"></i>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    reportError(error);
  }
}
