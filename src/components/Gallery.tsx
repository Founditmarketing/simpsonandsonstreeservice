import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const galleryImages = [
  // 2021/02
  { src: '/images/2021/02/123751990_211559146989621_1173839185797678469_o.jpg', },
  { src: '/images/2021/02/124114366_211559306989605_1357847613534209737_o.jpg', },
  { src: '/images/2021/02/124127736_211559216989614_1838659110696997148_o.jpg', },
  { src: '/images/2021/02/124162797_211559120322957_4611379128928568711_o.jpg', },
  { src: '/images/2021/02/124275810_211559183656284_1534811825671375814_o.jpg', },
  { src: '/images/2021/02/124281030_211559246989611_2126285203319419318_o.jpg', },
  { src: '/images/2021/02/147278059_267361048076097_3513660549785204485_o.jpg', },
  { src: '/images/2021/02/147457396_267361198076082_6817758226196202693_o.jpg', },
  { src: '/images/2021/02/147468845_267361358076066_5655916743736340572_o.jpg', },
  { src: '/images/2021/02/147852908_267361264742742_1088444398947475195_o.jpg', },
  { src: '/images/2021/02/148106871_267361124742756_5187680704062463473_o.jpg', },
  { src: '/images/2021/02/148107969_267360884742780_876713812031857553_o.jpg', },
  { src: '/images/2021/02/148184907_267360828076119_433527724562065567_o.jpg', },
  { src: '/images/2021/02/148635172_267361008076101_6240031091037386130_o.jpg', },
  { src: '/images/2021/02/80749232_124652205680316_7607355514736869376_o.jpg', },
  { src: '/images/2021/02/80984990_124652105680326_446770877611114496_o.jpg', },
  { src: '/images/2021/02/81199332_124652252346978_2918249124501389312_o.jpg', },
  { src: '/images/2021/02/81284576_124652329013637_2880720254319722496_o.jpg', },
  { src: '/images/2021/02/81386703_124652159013654_1163548112690610176_o.jpg', },
  { src: '/images/2021/02/82110258_124652375680299_6963713085852876800_o.jpg', },
  { src: '/images/2021/02/85137941_141864037292466_1491084814059569152_o.jpg', },
  { src: '/images/2021/02/85151755_141864173959119_4840236028704849920_o.jpg', },
  { src: '/images/2021/02/87202653_141863890625814_4371380266048946176_o.jpg', },
  { src: '/images/2021/02/87528559_145942263551310_266205728023248896_o.jpg', },
  { src: '/images/2021/02/88276410_145942243551312_4947184240543399936_o.jpg', },
  { src: '/images/2021/02/92679245_155660462579490_5157765524993605632_o.jpg', },
  { src: '/images/2021/02/92697374_155660615912808_5501084208245768192_o.jpg', },
  { src: '/images/2021/02/92824247_155660422579494_2037809325929398272_o.jpg', },

  // 2022/11
  { src: '/images/2022/11/272777386_3119437604962463_9157732475545055062_n.jpg', },
  { src: '/images/2022/11/272845505_3119286701644220_7903581678367779846_n.jpg', },
  { src: '/images/2022/11/275609941_3145600112346212_981608752506552050_n.jpg', },
  { src: '/images/2022/11/275875048_514093116736221_7657402950139092583_n.jpg', },
  { src: '/images/2022/11/275889528_516813373130862_8704635169619955870_n.jpg', },
  { src: '/images/2022/11/276003202_516813336464199_8449236419851285306_n.jpg', },
  { src: '/images/2022/11/276119267_514115526733980_3485292082879712046_n.jpg', },
  { src: '/images/2022/11/286943113_567999301345602_331555383295804012_n.jpg', },
  { src: '/images/2022/11/291530873_582896969855835_7500668658855049773_n.jpg', },
  { src: '/images/2022/11/291696855_582896946522504_7024638555153654796_n.jpg', },
  { src: '/images/2022/11/302514078_621168436028688_5238652894567355934_n.jpg', },

  // 2025/02
  { src: '/images/2025/02/463757564_511436758439171_480569888190116337_n.jpg', },
  { src: '/images/2025/02/463868846_511436665105847_1626324754473645511_n.jpg', },
  { src: '/images/2025/02/468161546_532895129626667_5570018338973428236_n.jpg', },
  { src: '/images/2025/02/468244132_532895169626663_2868159616543966316_n.jpg', },
  { src: '/images/2025/02/469812979_544217661827747_7612166667950192866_n.jpg', },
];

const IMAGES_PER_PAGE = 6;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zindex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zindex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export function Gallery() {
  const [[page, direction], setPage] = useState([0, 0]);
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

  const paginate = (newDirection: number) => {
    const nextPath = (page + newDirection + totalPages) % totalPages;
    setPage([nextPath, newDirection]);
  };

  const goToPage = (index: number) => {
    const newDirection = index > page ? 1 : -1;
    if (index !== page) {
      setPage([index, newDirection]);
    }
  };

  const currentSettings = galleryImages.slice(
    page * IMAGES_PER_PAGE,
    (page + 1) * IMAGES_PER_PAGE
  );

  return (
    <section id="gallery" className="py-24 bg-neutral-50 overflow-hidden">
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-forest"
            >
              The "Work" Gallery
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-lg max-w-md"
          >
            A visual record of our commitment to safety, precision,
            and excellence in tree care across Central Minnesota.
          </motion.p>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="hidden sm:flex p-4 rounded-full bg-white shadow-lg text-safety hover:bg-forest hover:text-white transition-all z-10 shrink-0"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>

          <div className="flex-1 min-h-[600px] relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentSettings.map((image, index) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      key={image.src}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative group overflow-hidden rounded-3xl aspect-square bg-neutral-200 shadow-md"
                    >

                      <img
                        src={image.src}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="hidden sm:flex p-4 rounded-full bg-white shadow-lg text-safety hover:bg-forest hover:text-white transition-all z-10 shrink-0"
            aria-label="Next images"
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex sm:hidden justify-center gap-6 mt-8">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="p-4 rounded-full bg-white shadow-lg text-safety active:bg-forest active:text-white transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="p-4 rounded-full bg-white shadow-lg text-safety active:bg-forest active:text-white transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Page Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                page === i ? "bg-safety w-6" : "bg-neutral-300 shadow-sm"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
