import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import { Contact } from '../components/Contact';

interface ServiceData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    pointsTitle: string;
    points: string[];
    secondaryTitle: string;
    secondaryText: string;
}

const servicesData: Record<string, ServiceData> = {
    'total-tree-removal': {
        id: 'total-tree-removal',
        title: 'Total Tree Removal',
        subtitle: 'Removing Unwanted Trees Is a Breeze...',
        description: 'When you turn to us for tree removals in Big Lake & Monticello, MN, you are choosing a team that prioritizes safety and precision.',
        image: '/images/2021/02/123751990_211559146989621_1173839185797678469_o.jpg',
        pointsTitle: 'Necessary When:',
        points: [
            'Trees are growing too close to your power lines',
            'Damaged trees are leaning towards your building',
            'Storms have split or otherwise damaged your trees',
            'Trees are dead or diseased and pose a fall risk'
        ],
        secondaryTitle: "Don't wait for your trees to fall",
        secondaryText: "Removing trees isn't always about aesthetics. You may need an emergency tree removal to make your yard safer. Hire us for your emergency tree removal in or around Big Lake, MN today. We'll handle the problem safely and efficiently."
    },
    'stump-grinding': {
        id: 'stump-grinding',
        title: 'Stump Grinding',
        subtitle: 'Eliminate Unsightly Stumps Forever',
        description: 'Old stumps can cause problems in your yard, from attracting pests to being a tripping hazard. Our professional stump grinding service clears the way for new growth.',
        image: '/images/2021/02/81199332_124652252346978_2918249124501389312_o.jpg',
        pointsTitle: 'Why Grind Stumps?',
        points: [
            'Prevents pest infestations (termites, ants)',
            'Improves curb appeal and property value',
            'Makes lawn mowing safer and easier',
            'Clears space for new landscaping or construction'
        ],
        secondaryTitle: "Fast & Efficient Service",
        secondaryText: "We use high-powered equipment to grind stumps well below the surface, ensuring they won't grow back. Our team handles the cleanup, leaving your yard ready for whatever comes next."
    },
    'tree-and-shrub-trimming': {
        id: 'tree-and-shrub-trimming',
        title: 'Tree & Shrub Trimming',
        subtitle: 'Help Your Landscape Thrive',
        description: 'Growing shrubs and trees need routine trimming to thrive. Our experts understand the specific needs of different species in Minnesota.',
        image: '/images/2022/11/276003202_516813336464199_8449236419851285306_n.jpg',
        pointsTitle: 'Our Trimming Benefits:',
        points: [
            'Promotes healthy growth and structural integrity',
            'Removes dead or diseased branches before they fall',
            'Improves sunlight penetration and air circulation',
            'Enhances the natural beauty of your landscape'
        ],
        secondaryTitle: "Professional Standards",
        secondaryText: "We follow industry-leading pruning standards to ensure the long-term health of your trees. From crown thinning to structural pruning, we handle it all with care."
    },
    'yard-cleanup': {
        id: 'yard-cleanup',
        title: 'Yard Cleanups',
        subtitle: 'Maintain Your Yard Throughout the Seasons',
        description: 'Maintain your yard\'s beauty through the changing seasons with our professional cleanup services. We handle the heavy lifting so you don\'t have to.',
        image: '/images/2025/02/468244132_532895169626663_2868159616543966316_n.jpg',
        pointsTitle: 'Cleanup Services Include:',
        points: [
            'Spring and Fall debris removal',
            'Storm damage and branch cleanup',
            'Brush hauling and lot clearing',
            'Thorough site cleanup after every project'
        ],
        secondaryTitle: "Stress-Free Maintenance",
        secondaryText: "Don't let yard waste pile up. Our team provides rapid response and thorough cleanup, keeping your property looking professional and well-maintained year-round."
    }
};

export default function ServicePage() {
    const { serviceId } = useParams<{ serviceId: string }>();
    const service = serviceId ? servicesData[serviceId] : null;

    if (!service) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="pt-20 min-h-screen bg-neutral-50">
            {/* Service Hero */}
            <section className="relative py-24 bg-forest overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/60 to-forest" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto font-medium"
                    >
                        {service.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Content Section 1 */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-8">
                                Expert Care in Big Lake & Monticello, MN
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-forest">{service.pointsTitle}</h3>
                                {service.points.map((point, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-safety shrink-0 mt-1" />
                                        <p className="text-neutral-600 font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section 2 - High Contrast */}
            <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-8 text-safety"
                        >
                            {service.secondaryTitle}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-neutral-400 leading-relaxed mb-12 font-medium"
                        >
                            {service.secondaryText}
                        </motion.p>
                        <motion.a
                            href="tel:763-482-6247"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-safety text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-xl hover:bg-safety-hover transition-all"
                        >
                            <Phone className="w-6 h-6" />
                            Call (763) 482-6247
                        </motion.a>
                    </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-1/2 -right-24 w-96 h-96 bg-safety/10 blur-[120px] rounded-full" />
            </section>

            <Contact />
        </div>
    );
}
