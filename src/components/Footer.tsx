export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="text-center md:text-left">
          <img 
            src="/logo.png" 
            alt="MCZB LLC" 
            className="h-12 w-auto object-contain mb-4 mx-auto md:mx-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              document.getElementById('footer-logo-fallback')?.classList.remove('hidden');
            }}
          />
          <h4 id="footer-logo-fallback" className="hidden text-xl font-serif font-bold tracking-widest text-white mb-4">
            MCZB <span className="metallic-text">LLC</span>
          </h4>
          <p className="text-gray-500 text-sm font-light">
            732 S 6th St Ste R<br />
            Las Vegas NV 89101
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-gray-500 text-sm font-light mb-2">Inquiries</p>
          <a href="mailto:info@4M-C-Z-B.dev" className="text-[#d4af37] hover:text-white transition-colors text-lg">
            info@4M-C-Z-B.dev
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} MCZB LLC. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-widest transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
