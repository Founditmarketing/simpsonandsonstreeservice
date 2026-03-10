import { motion } from 'motion/react';

const galleryImages = [
  { src: 'https://picsum.photos/seed/tree1/800/1200', alt: 'Tree Removal', size: 'row-span-2' },
  { src: 'https://picsum.photos/seed/tree2/800/600', alt: 'Stump Grinding', size: 'row-span-1' },
  { src: 'https://picsum.photos/seed/tree3/800/800', alt: 'Pruning', size: 'row-span-1' },
  { src: 'https://picsum.photos/seed/tree4/800/1000', alt: 'Storm Damage', size: 'row-span-2' },
  { src: 'https://picsum.photos/seed/tree5/800/600', alt: 'Lot Clearing', size: 'row-span-1' },
  { src: 'https://picsum.photos/seed/tree6/800/800', alt: 'Tree Care', size: 'row-span-1' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-safety font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-forest"
            >
              The "Work" Gallery
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-lg max-w-md"
          >
            A visual record of our commitment to safety, precision, 
            and excellence in tree care across Central Minnesota.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl ${image.size}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <p className="text-white font-bold text-xl mb-1">{image.alt}</p>
                  <p className="text-neutral-300 text-sm">Big Lake, MN</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
