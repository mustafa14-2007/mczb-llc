import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
          transform: 'translateZ(-1px) scale(1.1)' 
        }}
      />
      
      {/* Dark Blue Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0f2027]/80 via-[#203a43]/80 to-[#050505] mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6"
        >
          Creating Structure for <br/>
          <span className="metallic-text italic">Visionary Businesses</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light tracking-wide"
        >
          A dynamic portfolio of companies that grow through collaboration and strategic opportunity.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-10 py-4 border border-[#d4af37] text-[#d4af37] uppercase tracking-widest text-sm hover:bg-[#d4af37] hover:text-black transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#d4af37] w-8 h-8 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
