import { motion } from 'motion/react';
import { Heart, Sparkles, BookOpen, Wind, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import { useEffect } from 'react';

export default function ElementsOfSerenity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop")',
              transform: 'scale(1.1)' 
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0f2027]/80 via-[#203a43]/80 to-[#050505]" />
          
          <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-4"
            >
              Elements of Serenity <span className="metallic-text italic">LLC</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-[#d4af37] font-light tracking-widest uppercase mb-12"
            >
              A sanctuary of care — for every soul
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-serif italic mb-6 leading-tight">
                Serenity is not<br/>
                a luxury.<br/>
                It is your right.
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Elements of Serenity exists to ensure that every human — regardless of background, identity, or circumstance — has access to safe, whole-person care that heals the mind, nourishes the body, and honors the spirit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-32 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4">Our Mission</h3>
              <h4 className="text-3xl font-serif mb-8 leading-tight italic">
                Creating a safe space in every opportunity — for the whole human being.
              </h4>
              <p className="text-gray-300 font-light leading-relaxed">
                At Elements of Serenity, we believe that safety is the foundation of all healing. Our mission is to cultivate and protect safe, affirming, and inclusive spaces — in every session, every program, every conversation — where the full dimensions of human well-being are honored. We are committed to nurturing the mental, emotional, physical, spiritual, and intellectual health of each person we serve, meeting them exactly where they are with compassion, cultural humility, and clinical excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4">Our Vision</h3>
              <h4 className="text-3xl font-serif mb-8 leading-tight italic">
                A world where no one is left behind on the journey to wholeness.
              </h4>
              <p className="text-gray-300 font-light leading-relaxed">
                Elements of Serenity envisions a future in which every area of our work actively dismantles the barriers that prevent marginalized and socioeconomically disadvantaged humans — of all ages, races, genders, and ethnicities — from accessing comprehensive care. We see each of our four pillars — clinical mental health, climate awareness, play therapy, psychoeducation, and holistic wellness — as instruments of equity, ensuring that mental, emotional, financial, spiritual, and intellectual well-being are within reach for all.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Quote Section */}
        <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Quote className="absolute -top-12 -left-8 w-16 h-16 text-[#d4af37] opacity-10" />
              <p className="text-2xl md:text-3xl font-serif italic text-gray-200 leading-relaxed mb-8">
                "Each pillar of Elements of Serenity LLC exists to address unmet concerns in marginalized and socioeconomically disadvantaged communities — ensuring that humans of all ages, races, genders, and ethnicities receive the mental, emotional, financial, spiritual, and intellectual well-being they deserve."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-[#d4af37] mb-4"></div>
                <span className="text-[#d4af37] uppercase tracking-widest text-sm font-semibold">Dr. Garrett</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest mt-1">Founder</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-32 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4">Four pillars, one vision</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 italic">How we bring the vision to life...</h3>
              <div className="w-24 h-px bg-[#d4af37] mx-auto opacity-50"></div>
            </div>

            <div className="space-y-32">
              {/* Pillar 1 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-panel p-10 rounded-2xl glow-edge"
                >
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
                    <Heart className="text-[#d4af37] w-6 h-6" />
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-2">Anchor Pillar</h4>
                  <h5 className="text-3xl font-serif mb-6">Centering Elements</h5>
                  <p className="text-gray-300 font-light leading-relaxed mb-6">
                    Our clinical mental health practice is the heartbeat of Elements of Serenity LLC. Operating under an educational model, we provide individual, couples, family, and group therapy delivered by a diverse team of clinicians trained across multiple theoretical orientations. From grief and trauma to relationship challenges and life transitions, our therapists meet each client with both clinical rigor and genuine human care.
                  </p>
                  <p className="text-gray-300 font-light leading-relaxed mb-8">
                    Our practice welcomes ages 4-94, including military service members, veterans, and their families. We take most insurances and have a sliding fee scale. We also operate a state-compliant VASAP/ASAP psychoeducational program for individuals navigating substance use and DUI court requirements — extending compassionate, ethical care to those often overlooked by the mainstream mental health system.
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <h6 className="text-xs uppercase tracking-widest text-[#d4af37] mb-3">Vision Connection</h6>
                    <p className="text-sm text-gray-400 italic">
                      The practice directly addresses the mental and emotional well-being element of our vision by providing accessible, culturally responsive clinical care to individuals across socioeconomic and demographic backgrounds. — including those with court-mandated needs, trauma, grief, and complex life challenges.
                    </p>
                  </div>
                </motion.div>
                <div className="rounded-2xl overflow-hidden h-full min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
                    alt="Clinical Practice" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 rounded-2xl overflow-hidden h-full min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?q=80&w=2070&auto=format&fit=crop" 
                    alt="Play Therapy" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-1 md:order-2 glass-panel p-10 rounded-2xl glow-edge"
                >
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
                    <Sparkles className="text-[#d4af37] w-6 h-6" />
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-2">Specialized Framework</h4>
                  <h5 className="text-3xl font-serif mb-6 italic">Play therapy is not merely play — it is the language through which children process experience, express emotion, and begin to heal.</h5>
                  <div className="mb-6">
                    <h6 className="text-lg font-serif text-white mb-2">CAPTF — Climate Awareness Play Therapy Framework</h6>
                    <p className="text-xs text-[#d4af37] uppercase tracking-widest mb-4">Designed and in trademark process by Marquita Garrett, PhD, RPT-S</p>
                    <p className="text-gray-300 font-light leading-relaxed">
                      This element provides specialized therapeutic training for services to children, adolescents, and families. Her CAPT model specifically integrates the rise of eco-anxiety/eco-grief in children and adolescents, recognition of environmental injustice, ACES Climate Change & Environmental Justice Competencies (2025), Disability-affirming and access-centered frameworks into a unique therapeutic engagement. There is a clinical shift of Play therapy which responds to: Chronic ecological stress, Climate-related trauma, Environmental displacement, and Youth advocacy and voice.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Pillar 3 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-panel p-10 rounded-2xl glow-edge"
                >
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
                    <BookOpen className="text-[#d4af37] w-6 h-6" />
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-2">Public Education</h4>
                  <h5 className="text-3xl font-serif mb-6">Dr. Marquita Garrett, PhD — Voice of Psychoeducation</h5>
                  <p className="text-gray-300 font-light leading-relaxed mb-6">
                    Dr. Marquita Garrett, PhD, LPC, serves as the face and voice of Elements of Serenity's commitment to public mental health education. Through her podcast, speaking engagements, university instruction, published works, workshops, and community programming, Dr. Garrett translates complex clinical knowledge into accessible, actionable wisdom for everyday people.
                  </p>
                  <p className="text-gray-300 font-light leading-relaxed mb-8">
                    She reaches audiences that traditional therapy never touches — including those who face financial, geographic, or cultural barriers to formal care. Her work on women's empowerment, resilience, grief, military families, and counselor development positions Elements of Serenity as a trusted educational authority in the mental/emotional realm.
                  </p>
                  <p className="text-sm text-gray-400 italic mb-6">
                    CAPT vision connection by training future therapists in the climate awareness framework, this element multiplies the vision's reach exponentially.
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <h6 className="text-xs uppercase tracking-widest text-[#d4af37] mb-3">Vision Connection (Dr, Garrett)</h6>
                    <p className="text-sm text-gray-400 italic">
                      This sector advances the intellectual and financial well-being dimensions of the vision — equipping people with knowledge and tools that reduce dependence on crisis-only care. Psychoeducation is prevention, and prevention is equity.
                    </p>
                  </div>
                </motion.div>
                <div className="rounded-2xl overflow-hidden h-full min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Psychoeducation" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 rounded-2xl overflow-hidden h-full min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062&auto=format&fit=crop" 
                    alt="Holistic Wellness" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-1 md:order-2 glass-panel p-10 rounded-2xl glow-edge"
                >
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
                    <Wind className="text-[#d4af37] w-6 h-6" />
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-2">Serenity Experience</h4>
                  <h5 className="text-3xl font-serif mb-2">Mind & Body Integration</h5>
                  <h5 className="text-xl font-serif text-gray-400 mb-6">Holistic Well-Being</h5>
                  <p className="text-gray-300 font-light leading-relaxed mb-8">
                    Our holistic wellness sector brings the body into the healing conversation. Recognizing that mental health and physical well-being are inseparable, Elements of Serenity LLC offers mind-body programming through certified group leaders in Tai Chi, Yoga, Belly Dance, Breathwork, and Autogenic Training — each designed to restore regulation, cultivate presence, and honor the body as a vehicle of healing. This creates a continuum of care that serves clients beyond the therapy room.
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <h6 className="text-xs uppercase tracking-widest text-[#d4af37] mb-3">Vision Connection</h6>
                    <p className="text-sm text-gray-400 italic">
                      Holistic wellness is the bridge between clinical care and physical being. By addressing the physical, spiritual, and community dimensions of well-being, this element ensures the vision reaches those for whom traditional therapy alone is incomplete — including faith communities, grieving families, those with chronic ailments, and those seeking body-centered healing.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl font-serif italic text-gray-200 leading-relaxed">
                Safety is not a policy at Elements of Serenity. It is the air we breathe. We create affirming, non-judgmental, and culturally humble spaces in every interaction — because healing cannot begin where people do not feel seen, protected, and worthy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 relative bg-[#050505]">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif mb-6 italic"
            >
              Your serenity<br/>
              starts here.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto"
            >
              Whether you are seeking therapy, exploring a program, inviting Dr. Garrett to speak, or simply looking for a place that will truly welcome you — reach out.
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
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}
