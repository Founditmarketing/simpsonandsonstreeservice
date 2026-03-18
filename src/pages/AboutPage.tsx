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
                        <h2 className="text-4xl font-bold text-forest mb-2">
                            Do Your Trees Need a Little Extra Care?
                        </h2>
                        <p className="mb-6 text-lg text-neutral-400 font-medium tracking-wide">
                            Make time for professional tree services in Big Lake & Monticello, MN
                        </p>
                        <p className="mb-6">
                            A beautiful landscape can easily be thrown off by fallen tree limbs and unsightly stumps. You can restore your landscape's neat appearance when you get the proper tree services. Luckily, Simpson & Sons Tree Service can help you out. Our trusted tree company is based in Big Lake, MN and is known for exceptional service. We work efficiently and safely at all times, paying attention to every detail. You can call on us for both commercial and residential work - it's all about your needs.
                        </p>
                    </motion.div>
                </div>
            </div>
            <Contact />
        </div>
    );
}
