import { motion } from 'motion/react';
import { About as AboutSection } from '../components/About';
import { Contact } from '../components/Contact';

export default function AboutPage() {
    return (
        <div className="pt-20">
            <AboutSection />
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg max-w-none text-neutral-600"
                    >
                        <h2 className="text-4xl font-bold text-forest mb-8">Our Commitment to You</h2>
                        <p className="mb-6">
                            At Simpson & Sons Tree Service, we believe that professional tree care should be accessible,
                            safe, and transparent. Our team is dedicated to providing the highest level of service
                            to our neighbors in Big Lake, Monticello, and the surrounding areas.
                        </p>
                        <p className="mb-6">
                            Whether you're dealing with a hazardous tree leaning toward your home or simply want to
                            beautify your landscape with professional pruning, we bring the right equipment and
                            expertise to every jobsite.
                        </p>
                    </motion.div>
                </div>
            </div>
            <Contact />
        </div>
    );
}
