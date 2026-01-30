import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import OutcomesIndex from './pages/outcomes/OutcomesIndex';
import OutcomeDetail from './pages/outcomes/OutcomeDetail';
import WhatsInYourWayIndex from './pages/problems/WhatsInYourWayIndex';
import ProblemDetail from './pages/problems/ProblemDetail';
import Recognition from './pages/Recognition';
import PathToAgility from './pages/PathToAgility';
import Navigator from './pages/Navigator';
import Partner from './pages/Partner';
import TrainingIndex from './pages/training/TrainingIndex';
import CorporateTraining from './pages/training/CorporateTraining';
import PublicWorkshops from './pages/training/PublicWorkshops';
import CourseCatalog from './pages/training/CourseCatalog';
import CourseDetail from './pages/training/CourseDetail';
import About from './pages/about/About';
import Team from './pages/about/Team';
import TeamMember from './pages/about/TeamMember';
import Placeholder from './pages/Placeholder';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Outcomes */}
          <Route path="/outcomes" element={<OutcomesIndex />} />
          <Route path="/outcomes/:slug" element={<OutcomeDetail />} />

          {/* What's In Your Way */}
          <Route path="/whats-in-your-way" element={<WhatsInYourWayIndex />} />
          <Route path="/whats-in-your-way/:slug" element={<ProblemDetail />} />

          {/* Path to Agility */}
          <Route path="/path-to-agility" element={<PathToAgility />} />
          <Route path="/path-to-agility/navigator" element={<Navigator />} />
          <Route path="/path-to-agility/partner" element={<Partner />} />
          <Route path="/path-to-agility/:slug" element={<Placeholder />} />
          <Route path="/request-a-trial" element={<Placeholder />} />

          {/* Training */}
          <Route path="/training" element={<TrainingIndex />} />
          <Route path="/training/corporate" element={<CorporateTraining />} />
          <Route path="/training/for-organizations" element={<CorporateTraining />} />
          <Route path="/training/public-workshops" element={<PublicWorkshops />} />
          <Route path="/training/courses" element={<CourseCatalog />} />
          <Route path="/training/courses/:slug" element={<CourseDetail />} />

          {/* Recognition */}
          <Route path="/recognition" element={<Recognition />} />

          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/team/:slug" element={<TeamMember />} />
          <Route path="/about/meet-the-team" element={<Team />} />

          {/* Other pages - Placeholder for now */}
          <Route path="/insights" element={<Placeholder />} />
          <Route path="/insights/:slug" element={<Placeholder />} />
          <Route path="/contact" element={<Placeholder />} />
          <Route path="/privacy-policy" element={<Placeholder />} />
          <Route path="/terms-of-service" element={<Placeholder />} />

          {/* 404 fallback */}
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
