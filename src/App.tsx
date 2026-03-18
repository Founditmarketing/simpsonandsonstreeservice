import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TreeRemoval from './pages/services/TreeRemoval';
import StumpGrinding from './pages/services/StumpGrinding';
import Trimming from './pages/services/Trimming';
import YardCleanup from './pages/services/YardCleanup';
import DrawPage from './pages/DrawPage';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-neutral-50 font-sans">
          <Helmet>
            <title>Simpson & Sons Tree Service | Expert Tree Care in Big Lake & Monticello, MN</title>
            <meta name="description" content="Professional tree removal, pruning, and emergency storm response in Big Lake, Monticello, and surrounding MN regions. ISA Certified Arborist standards." />
            <meta property="og:title" content="Simpson & Sons Tree Service | Expert Tree Care" />
            <meta property="og:description" content="Expert Tree Care in Big Lake & Monticello, MN. ISA Certified Arborist standards." />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>

          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services/total-tree-removal" element={<TreeRemoval />} />
              <Route path="/services/stump-grinding" element={<StumpGrinding />} />
              <Route path="/services/tree-and-shrub-trimming" element={<Trimming />} />
              <Route path="/services/yard-cleanup" element={<YardCleanup />} />
              <Route path="/draw" element={<DrawPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
