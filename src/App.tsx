import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/main.scss';
import Header from './components/Header';
import { HomePage } from './pages/Homepage';
import { AboutMePage } from './pages/About';
import { ProjectsPage } from './pages/Projects';
import { DesignsPage } from './pages/Designs';
import { ContactMePage } from './pages/Contact';
import { Footer } from './components/Footer';
import { ToggleAnimationProvider } from './contexts/ToggleAnimationContext';

function App() {
  return (
    <ToggleAnimationProvider>
      <Router>
        <div className="page-wrapper">
          <Header />

          <div className="page-wrapper__content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-me" element={<AboutMePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/designs" element={<DesignsPage />} />
              <Route path="/contact-me" element={<ContactMePage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </ToggleAnimationProvider>
  );
}

export default App;
