import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
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
          <Hero />
          <Services />
          <Gallery />
          <About />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
