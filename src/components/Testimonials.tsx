import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Pete Swanson",
    quote: "I gotta tell Y'all and every person I know out there to have Simpson & Sons do the work You want done! Amazing hard working Guys!",
    rating: 5,
  },
  {
    name: "Mike Kittridge",
    quote: "On time for bid and carried thru with job flawlessly and I was impressed with the quality of work.",
    rating: 5,
  },
  {
    name: "Jim Stenglein",
    quote: "Had them remove lots of risky tall trees. This crew was extremely efficient, polite and friendly. Their clean up was phenomenal! I will use them again and recommend them to all. Not to mention they were the best price I found.",
    rating: 5,
  },
  {
    name: "Michael Keglergray",
    quote: "Did a very fine job, cleaned up 100%. Can only recommend their service.",
    rating: 5,
  },
  {
    name: "Brad LaRoque",
    quote: "Simpson & sons tree service did a great job removing a 60' ash tree from a very difficult spot lakeside on my property. Working off the ice because of no other access. I would highly recommend them. Also reasonably priced.",
    rating: 5,
  },
];

const VISIBLE = 3;
const AUTOPLAY_INTERVAL = 4000;

function getVisible(start: number) {
  return [0, 1, 2].map((offset) => ({
    item: testimonials[(start + offset) % testimonials.length],
    key: (start + offset) % testimonials.length,
  }));
}

export function Testimonials() {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setStart((s) => (s + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setStart((s) => (s - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const visible = getVisible(start);

  return (
    <section id="reviews" className="py-24 bg-forest relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-safety font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Client Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white"
          >
            What Our Neighbors Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mt-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-safety text-safety" />
            ))}
            <span className="text-neutral-400 text-sm ml-2">5.0 · {testimonials.length} reviews</span>
          </motion.div>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              {visible.map(({ item, key }) => (
                <motion.div
                  key={key}
                  custom={direction}
                  variants={{
                    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 120 : -120 }),
                    center: { opacity: 1, x: 0 },
                    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -120 : 120 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 flex flex-col gap-6 relative group hover:bg-white/8 hover:border-white/20 transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-safety text-safety" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative flex-grow">
                    <Quote className="w-8 h-8 text-safety/20 absolute -top-1 -left-1" />
                    <p className="text-neutral-300 text-base leading-relaxed italic pl-7">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-safety/20 flex items-center justify-center text-safety font-bold text-lg flex-shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold leading-none">{item.name}</p>
                      <p className="text-neutral-500 text-xs mt-1">Google Review</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous reviews"
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-safety hover:border-safety transition-all duration-300 shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next reviews"
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-safety hover:border-safety transition-all duration-300 shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => {
                setDirection(i > start ? 1 : -1);
                setStart(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === start
                  ? 'w-8 h-2.5 bg-safety'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
