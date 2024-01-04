import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/main.scss';
import Header from './components/header';
import { HomePage } from './pages/Homepage';
import { AboutMePage } from './pages/About';
import { ProjectsPage } from './pages/Projects';
import { DesignsPage } from './pages/Designs';
import { ContactMePage } from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/designs" element={<DesignsPage />} />
          <Route path="/contact-me" element={<ContactMePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
