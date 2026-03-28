import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.1)_0%,transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif mb-6"
        >
          Connect With <span className="metallic-text">MCZB</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 font-light mb-12"
        >
          We welcome opportunities for collaboration, partnership, and innovation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="mailto:info@4M-C-Z-B.dev" 
            className="inline-block px-12 py-5 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black font-semibold uppercase tracking-widest text-sm rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
