function App() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      React.createElement('div', {
        'data-name': 'app',
        'data-file': 'app.js',
        className: 'scroll-smooth'
      }, [
        React.createElement(Navbar, { key: 'navbar' }),
        React.createElement(Hero, { key: 'hero' }),
        React.createElement(Skills, { key: 'skills' }),
        React.createElement(Certifications, { key: 'certifications' }),
        React.createElement(Internships, { key: 'internships' }),
        React.createElement(StartupIdea, { key: 'startup' }),
        React.createElement(Biodata, { key: 'biodata' }),
        React.createElement(Contact, { key: 'contact' })
      ])
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));