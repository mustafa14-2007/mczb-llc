import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const contentText = "MCZB LLC serves as the central management and investment entity providing strategic direction, operational guidance, and administrative coordination for the businesses within its portfolio. Each company focuses on its own expertise while benefiting from shared resources, strategic support, and collaborative opportunities. This model allows every business to operate independently while benefiting from the stability and long-term vision of the larger organization.";

  const handlePlayAudio = async () => {
    if (isPlaying && audioElement) {
      audioElement.pause();
      setIsPlaying(false);
      return;
    }

    if (audioElement) {
      audioElement.play();
      setIsPlaying(true);
      return;
    }

    setIsLoadingAudio(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Read this corporate overview in a professional, authoritative tone: ${contentText}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioUrl = `data:audio/pcm;rate=24000;base64,${base64Audio}`;
        const audio = new Audio(audioUrl);
        audio.onended = () => setIsPlaying(false);
        setAudioElement(audio);
        audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Failed to generate audio:", error);
      alert("Audio generation failed. Please try again later.");
    } finally {
      setIsLoadingAudio(false);
    }
  };

  return (
    <section id="about" className="py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-4">About MCZB</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Strategic Leadership for <br/>
            <span className="italic text-gray-400">Sustainable Growth</span>
          </h3>
          
          <button 
            onClick={handlePlayAudio}
            disabled={isLoadingAudio}
            className="flex items-center space-x-3 text-sm uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors mb-8 group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
              {isLoadingAudio ? (
                <div className="w-4 h-4 border-2 border-t-transparent border-[#d4af37] rounded-full animate-spin" />
              ) : (
                <Play size={14} className={isPlaying ? "text-[#d4af37]" : "text-gray-400 group-hover:text-[#d4af37]"} fill={isPlaying ? "currentColor" : "none"} />
              )}
            </div>
            <span>{isLoadingAudio ? 'Generating Audio...' : isPlaying ? 'Pause Audio Overview' : 'Listen to Overview'}</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-gray-300 font-light leading-relaxed"
        >
          <p>
            MCZB LLC serves as the central management and investment entity providing strategic direction, operational guidance, and administrative coordination for the businesses within its portfolio.
          </p>
          <p>
            Each company focuses on its own expertise while benefiting from shared resources, strategic support, and collaborative opportunities.
          </p>
          <p>
            This model allows every business to operate independently while benefiting from the stability and long-term vision of the larger organization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
