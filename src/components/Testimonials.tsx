import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  /*
  {
    name: 'Jim Stenglein',
    role: 'Homeowner',
    quote: 'Simpson & Sons did an amazing job removing a massive oak tree that was dangerously close to our house. Professional, safe, and the cleanup was impeccable.',
    rating: 5,
  },
  {
    name: 'Brad LaRoque',
    role: 'Property Manager',
    quote: 'We use Simpson & Sons for all our commercial properties in Monticello. Their ISA certified standards ensure our trees stay healthy and our tenants stay safe.',
    rating: 5,
  },
  {
    name: 'Sarah Miller',
    role: 'Resident',
    quote: 'After the storm last summer, they were the only ones who responded quickly. They cleared the fallen branches from our driveway in no time. Highly recommend!',
    rating: 5,
  },
  */
  {
    name: "Pete Swanson",
    quote: "I gotta tell Y'all and every person I know out there to have Simpson & Sons do the work You want done! Amazing hard working Guys!",
    rating: 5,
  },
  {
    name: "Mike Kittridge",
    quote: "On time for bid and carried thru with job flawlessly and I was impressed with the quality of work",
    rating: 5,
  },
  {
    name: "Jim Stenglein",
    quote: "Had them remove lots of risky tall trees. This crew was extremely efficient, polite and friendly. Their clean up was phenomenal! I will use them again and recommend them to all. Not to mention they were the best price I found.",
    rating: 5,
  },
  {
    name: "Michael Keglergray",
    quote: "Did a very fine job, cleaned up 100%. Can only recommend their service",
    rating: 5,
  },
  {
    name: "Brad LaRoque",
    quote: "Simpson & sons tree service did a great job removing a 60' ash tree from a very difficult spot lakeside on my property. Working off the ice because of no other access. I would highly recommend them. Also reasonably priced. I",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-safety font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Client Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our Neighbors Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 flex flex-col relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-safety/40 absolute top-8 right-8 group-hover:text-safety transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-safety text-safety" />
                ))}
              </div>

              <p className="text-neutral-300 text-lg leading-relaxed mb-8 flex-grow italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-safety/20 flex items-center justify-center text-safety font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">{testimonial.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
