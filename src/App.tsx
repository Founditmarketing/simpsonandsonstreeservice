import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ContactPopup from './components/ContactPopup';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import TreeRemoval from './pages/services/TreeRemoval';
import EmergencyTreeRemoval from './pages/services/EmergencyTreeRemoval';
import StumpGrinding from './pages/services/StumpGrinding';
import TreePruning from './pages/services/TreePruning';
import ShrubTrimming from './pages/services/ShrubTrimming';
import YardCleanup from './pages/services/YardCleanup';
import LeafRemoval from './pages/services/LeafRemoval';
import DrawPage from './pages/DrawPage';
import ContactPage from './pages/ContactPage';

function AppInner() {
  const location = useLocation();
  const hideFooter = location.pathname === '/contact';

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Service entity pages */}
          <Route path="/services/tree-removal-big-lake-mn" element={<TreeRemoval />} />
          <Route path="/services/emergency-tree-removal-big-lake-mn" element={<EmergencyTreeRemoval />} />
          <Route path="/services/stump-grinding-big-lake-mn" element={<StumpGrinding />} />
          <Route path="/services/tree-pruning-big-lake-mn" element={<TreePruning />} />
          <Route path="/services/shrub-trimming-big-lake-mn" element={<ShrubTrimming />} />
          <Route path="/services/yard-cleanup-big-lake-mn" element={<YardCleanup />} />
          <Route path="/services/leaf-removal-big-lake-mn" element={<LeafRemoval />} />

          {/* 301-style redirects from old URLs */}
          <Route path="/services/total-tree-removal" element={<Navigate to="/services/tree-removal-big-lake-mn" replace />} />
          <Route path="/services/stump-grinding" element={<Navigate to="/services/stump-grinding-big-lake-mn" replace />} />
          <Route path="/services/tree-and-shrub-trimming" element={<Navigate to="/services/tree-pruning-big-lake-mn" replace />} />
          <Route path="/services/yard-cleanup" element={<Navigate to="/services/yard-cleanup-big-lake-mn" replace />} />

          {/* Other pages */}
          <Route path="/draw" element={<DrawPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
      <ContactPopup />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppInner />
        <Analytics />
      </Router>
    </HelmetProvider>
  );
}
