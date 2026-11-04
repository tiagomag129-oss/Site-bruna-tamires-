import React, { useEffect } from 'react';
import { X, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GalleryItem } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface Props {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<Props> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const targetWhatsAppUrl = item.whatsappMessage
    ? `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${item.whatsappMessage}`
    : BUSINESS_INFO.whatsappLinks.general;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-[#292725] text-[#F5F0E9] border border-[#A89582]/30 rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A77B58]"
          aria-label="Fechar visualizador"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="md:w-3/5 bg-black/40 flex items-center justify-center relative min-h-[300px] md:min-h-[480px]">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-contain max-h-[75vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details & Action Column */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#A89582]/20">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DCCFC0] bg-[#392E29] px-2 py-0.5 rounded border border-[#A89582]/30">
                {item.categoryLabel}
              </span>
              {item.isRealWorkByBruna && (
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider bg-[#A77B58] text-white px-2 py-0.5 rounded font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  Obra Autoral Real
                </span>
              )}
            </div>

            <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-white mb-3">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#DCCFC0]/85 font-light leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="text-xs text-[#A89582] space-y-1.5 pt-4 border-t border-[#A89582]/20 mb-6">
              <p>• Atendimento individual em João Monlevade — MG</p>
              <p>• Biossegurança e esterilização hospitalar</p>
              <p>• Horários flexíveis mediante reserva</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#A89582]/20">
            <a
              href={targetWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversar sobre este trabalho</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
