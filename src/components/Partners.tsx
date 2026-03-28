import { motion } from 'motion/react';
import { Hexagon, Triangle, Box } from 'lucide-react';

const partners = [
  { name: 'Aura Capital', icon: Hexagon },
  { name: 'Nexus Ventures', icon: Triangle },
  { name: 'Quantum Holdings', icon: Box },
];

export default function Partners() {
  return (
    <section className="py-20 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-12">Strategic Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center space-x-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <Icon className="w-8 h-8 text-[#d4af37]" />
                <span className="text-xl font-serif tracking-wider text-gray-300">{partner.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
