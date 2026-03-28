import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const companies = [
  {
    name: 'Elements of Serenity LLC',
    description: 'Wellness and holistic lifestyle solutions dedicated to restoring balance and tranquility in modern life.',
    status: 'Learn More',
    logo: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop',
    color: 'from-blue-900/40 to-black',
    link: '/elements-of-serenity'
  },
  {
    name: 'VonDion',
    description: 'Premium lifestyle and luxury brand offering exclusive products and curated experiences.',
    status: 'Learn More',
    logo: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2089&auto=format&fit=crop',
    color: 'from-purple-900/40 to-black',
    link: '#'
  },
  {
    name: 'Concerted Effort',
    description: 'Strategic consulting and operational management focused on driving business efficiency.',
    status: 'Learn More',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    color: 'from-yellow-900/40 to-black',
    link: '#'
  },
  {
    name: 'Ziren',
    description: 'Innovative technology solutions and digital transformation services for the future.',
    status: 'Coming Soon',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    color: 'from-red-900/40 to-black',
    link: '#'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Visionary Enterprises</h3>
          <div className="w-24 h-px bg-[#d4af37] mx-auto opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company, index) => {
            const CardContent = (
              <>
                <div className="absolute inset-0 z-0">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className={`absolute inset-0 z-10 bg-gradient-to-t ${company.color} opacity-80`} />
                
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                  <h4 className="text-3xl font-serif mb-3">{company.name}</h4>
                  <p className="text-gray-300 font-light mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {company.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37] border-b border-[#d4af37] pb-1">
                      {company.status}
                    </span>
                  </div>
                </div>
              </>
            );

            return company.link !== '#' ? (
              <Link
                key={company.name}
                to={company.link}
                className="group relative h-96 rounded-xl overflow-hidden glow-edge cursor-pointer block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full w-full"
                >
                  {CardContent}
                </motion.div>
              </Link>
            ) : (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-96 rounded-xl overflow-hidden glow-edge cursor-default"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
