import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3">
      {/* Tooltip on hover/focus */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#292725] text-white text-xs px-3 py-1.5 rounded-full shadow-lg border border-[#A89582]/40 whitespace-nowrap animate-fade-in">
          Agende pelo WhatsApp
        </div>
      )}

      <a
        href={BUSINESS_INFO.whatsappLinks.general}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Abrir conversa no WhatsApp de Bruna Tamires"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};
