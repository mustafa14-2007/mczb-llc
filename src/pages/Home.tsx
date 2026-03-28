import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Partners from '../components/Partners';
import Portfolio from '../components/Portfolio';
import Model from '../components/Model';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Partners />
        <Portfolio />
        <Model />
        <CTA />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
