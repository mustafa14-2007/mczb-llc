import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Search, Image as ImageIcon, Upload, Loader2, Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'search' | 'image'>('search');
  
  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Image State
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageAnalysis, setImageAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchResult('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Provide a professional, corporate analysis regarding: ${searchQuery}`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });
      
      setSearchResult(response.text || "No insights found.");
    } catch (error) {
      console.error(error);
      setSearchResult("An error occurred while fetching market insights.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImageAnalysis('');
    }
  };

  const handleAnalyzeImage = async () => {
    if (!imageFile || !imagePreview) return;

    setIsAnalyzing(true);
    setImageAnalysis('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Extract base64 data
      const base64Data = imagePreview.split(',')[1];
      
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [
          {
            inlineData: {
              data: base64Data,
              mimeType: imageFile.type,
            }
          },
          "Analyze this document or image from a corporate investment and strategic perspective. Provide key takeaways."
        ]
      });

      setImageAnalysis(response.text || "Could not analyze the image.");
    } catch (error) {
      console.error(error);
      setImageAnalysis("An error occurred during image analysis.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#bf953f] to-[#aa771c] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Sparkles className="text-black w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-40px)] glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[600px]"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/50">
              <div className="flex items-center space-x-2">
                <Sparkles className="text-[#d4af37] w-5 h-5" />
                <h3 className="font-serif font-semibold text-white">Corporate Intelligence</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex border-b border-white/10 bg-black/30">
              <button
                onClick={() => setActiveTab('search')}
                className={`flex-1 py-3 text-xs uppercase tracking-widest flex items-center justify-center space-x-2 ${activeTab === 'search' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Search className="w-4 h-4" />
                <span>Market Research</span>
              </button>
              <button
                onClick={() => setActiveTab('image')}
                className={`flex-1 py-3 text-xs uppercase tracking-widest flex items-center justify-center space-x-2 ${activeTab === 'image' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Doc Analysis</span>
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 bg-black/40">
              {activeTab === 'search' ? (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-light">
                    Query real-time market data and industry trends to inform strategic decisions.
                  </p>
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g., Latest trends in venture capital..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                    <button 
                      type="submit"
                      disabled={isSearching || !searchQuery.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#d4af37] disabled:opacity-50"
                    >
                      {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </button>
                  </form>
                  
                  {searchResult && (
                    <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 prose prose-invert prose-sm max-w-none">
                      <div className="markdown-body">
                        <Markdown>{searchResult}</Markdown>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 font-light">
                    Upload documents, charts, or structural diagrams for strategic AI analysis.
                  </p>
                  
                  {!imagePreview ? (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-[#d4af37] transition-colors bg-white/5"
                    >
                      <Upload className="w-8 h-8 text-gray-500 mx-auto mb-3" />
                      <p className="text-sm text-gray-400">Click to upload document</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden border border-white/10">
                        <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover" />
                        <button 
                          onClick={() => { setImagePreview(null); setImageFile(null); setImageAnalysis(''); }}
                          className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={handleAnalyzeImage}
                        disabled={isAnalyzing}
                        className="w-full py-3 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
                      >
                        {isAnalyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                        <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Document'}</span>
                      </button>
                    </div>
                  )}
                  
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                    accept="image/*" 
                    className="hidden" 
                  />

                  {imageAnalysis && (
                    <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 prose prose-invert prose-sm max-w-none">
                      <div className="markdown-body">
                        <Markdown>{imageAnalysis}</Markdown>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
