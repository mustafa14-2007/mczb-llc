import { motion } from 'motion/react';

export default function Model() {
  return (
    <section id="structure" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent -translate-x-1/2 opacity-30" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent -translate-y-1/2 opacity-30" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 md:p-20 rounded-2xl"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-6">Organizational Model</h2>
          <h3 className="text-3xl md:text-4xl font-serif mb-8">
            A Structured Model for <br/>
            <span className="italic">Innovation and Growth</span>
          </h3>
          
          <div className="space-y-6 text-gray-300 font-light leading-relaxed text-left md:text-center">
            <p>
              Our organizational structure is designed to support strategic collaboration across multiple businesses.
            </p>
            <p>
              MCZB LLC provides leadership and governance while allowing each company to maintain its independence and entrepreneurial spirit.
            </p>
            <p>
              By combining strategic direction with operational flexibility, our model encourages innovation, resilience, and sustainable development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
