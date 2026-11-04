import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Maximize2, Sparkles, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';

interface Props {
  onSelectItem: (item: GalleryItem) => void;
}

export const VerticalParallaxGallery: React.FC<Props> = ({ onSelectItem }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Column 1: Moves upward continuously with scroll
  const yCol1 = useTransform(scrollYProgress, [0, 1], ['4%', '-32%']);
  // Column 2: Moves downward continuously with scroll
  const yCol2 = useTransform(scrollYProgress, [0, 1], ['-28%', '8%']);
  // Column 3: Moves upward with distinct speed & amplitude
  const yCol3 = useTransform(scrollYProgress, [0, 1], ['8%', '-48%']);

  // Distribute items across the 3 columns (balanced repetition to avoid empty space)
  const col1Items = [
    GALLERY_ITEMS[0], // Floral fineline costas
    GALLERY_ITEMS[3], // Nanopigmentação
    GALLERY_ITEMS[6], // Celestial costela
    GALLERY_ITEMS[1], // Bebê furo
  ];

  const col2Items = [
    GALLERY_ITEMS[1], // Primeiro brinquinho bebê
    GALLERY_ITEMS[4], // Rosa orelha & joias
    GALLERY_ITEMS[7], // Brow lamination
    GALLERY_ITEMS[2], // Tatuagem Nossa Senhora / afeto
    GALLERY_ITEMS[9], // Retrato estúdio
  ];

  const col3Items = [
    GALLERY_ITEMS[2], // Afeto e fé tattoo
    GALLERY_ITEMS[5], // Orelha joias ouro
    GALLERY_ITEMS[8], // Fênix fineline
    GALLERY_ITEMS[0], // Floral costas
    GALLERY_ITEMS[3], // Nanopigmentation
  ];

  return (
    <section
      id="galeria"
      ref={containerRef}
      className="relative bg-[#292725] text-[#F5F0E9] py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#A77B58] blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#392E29] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#A89582]/20 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Galeria Editorial Viva
              </span>
              <span className="w-12 h-[1px] bg-[#A89582]/40" />
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl tracking-tight text-[#F5F0E9] font-normal text-balance">
              Movimento, arte e precisão em três perspectivas
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#DCCFC0]/70 max-w-md font-light leading-relaxed">
            As três colunas reagem dinamicamente à sua rolagem em direções opostas. Clique em qualquer obra para inspecionar os detalhes e conversar diretamente sobre ela.
          </p>
        </div>
      </div>

      {/* Main Parallax Stage - 3 Vertical Columns */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 h-[90vh] min-h-[640px] max-h-[960px] overflow-hidden">
        {/* Soft top & bottom scrims to give an endless magazine editorial look */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#292725] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#292725] to-transparent z-20 pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-full">
          {/* Column 1 - Moves Upwards */}
          <motion.div
            style={isReducedMotion ? {} : { y: yCol1 }}
            className="flex flex-col gap-6 sm:gap-8 will-change-transform"
          >
            {col1Items.map((item, idx) => (
              <GalleryCard key={`c1-${item.id}-${idx}`} item={item} onSelect={onSelectItem} />
            ))}
          </motion.div>

          {/* Column 2 - Moves Downwards */}
          <motion.div
            style={isReducedMotion ? {} : { y: yCol2 }}
            className="flex flex-col gap-6 sm:gap-8 will-change-transform"
          >
            {col2Items.map((item, idx) => (
              <GalleryCard key={`c2-${item.id}-${idx}`} item={item} onSelect={onSelectItem} />
            ))}
          </motion.div>

          {/* Column 3 - Moves Upwards with higher velocity (hidden on mobile, visible from md up) */}
          <motion.div
            style={isReducedMotion ? {} : { y: yCol3 }}
            className="hidden md:flex flex-col gap-6 sm:gap-8 will-change-transform"
          >
            {col3Items.map((item, idx) => (
              <GalleryCard key={`c3-${item.id}-${idx}`} item={item} onSelect={onSelectItem} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-8 flex flex-wrap items-center justify-between text-xs text-[#A89582] gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A77B58]" />
          <span>Fotografias reais autorais de Bruna Tamires e referências técnicas estéticas</span>
        </div>
        <span className="font-mono text-[11px] tracking-wider uppercase text-[#DCCFC0]">
          Role para ver o fluxo contínuo
        </span>
      </div>
    </section>
  );
};

interface CardProps {
  item: GalleryItem;
  onSelect: (item: GalleryItem) => void;
}

const GalleryCard: React.FC<CardProps> = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(item);
        }
      }}
      className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#392E29]/60 border border-[#A89582]/20 shadow-lg hover:border-[#A77B58]/60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A77B58]"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/90 via-[#292725]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Hover inspection badge */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full bg-[#292725]/80 backdrop-blur-sm text-white">
          <Maximize2 className="w-3.5 h-3.5" />
        </div>

        {/* Real work authenticity pill / tag */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className="text-[10px] font-mono tracking-wider uppercase bg-[#292725]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[#DCCFC0] border border-[#A89582]/30">
            {item.categoryLabel}
          </span>
          {item.isRealWorkByBruna && (
            <span className="text-[9px] uppercase tracking-wider bg-[#A77B58]/90 text-white px-1.5 py-0.5 rounded font-semibold">
              Obra Autoral
            </span>
          )}
        </div>

        {/* Bottom card editorial text */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300">
          <h4 className="font-serif-editorial text-base sm:text-lg font-medium text-white mb-1 line-clamp-1">
            {item.title}
          </h4>
          <p className="text-[11px] text-[#DCCFC0]/80 line-clamp-2 font-light leading-snug">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
