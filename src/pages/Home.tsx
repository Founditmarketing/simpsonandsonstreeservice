import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { DrawCTA } from '../components/DrawCTA';
import { Gallery } from '../components/Gallery';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <DrawCTA />
            <Gallery />
            <Testimonials />
            <Contact />
        </>
    );
}
