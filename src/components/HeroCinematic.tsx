import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageCircle, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const HeroCinematic: React.FC = () => {
  return (
    <section className="relative w-screen h-[100svh] min-h-[600px] overflow-hidden flex flex-col justify-end pb-12 sm:pb-16 md:pb-20 text-[#F5F0E9]">
      {/* Background Photography Protagonist */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/assets/aistudio/Screenshot_20261104_090021_Instagram_79b7e1d7.jpg"
          alt="Bruna Tamires no estúdio com equipamento de tatuagem"
          className="w-full h-full object-cover object-[50%_20%] md:object-[50%_25%]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Editorial contrast scrim: preserves photo highlights while giving pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#292725] via-[#292725]/55 to-[#292725]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(41,39,37,0.4)_100%)]" />
      </motion.div>

      {/* Sequential Editorial Typography Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          {/* Item 1: Nome Bruna Tamires */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#DCCFC0] font-medium">
              Studio Artístico
            </span>
            <span className="w-8 h-[1px] bg-[#A77B58]" />
            <div className="flex items-center gap-1 text-xs text-[#DCCFC0]/90">
              <Star className="w-3.5 h-3.5 fill-[#A77B58] text-[#A77B58]" />
              <span className="font-semibold text-white">4.9</span>
              <span>· 55 avaliações</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F0E9] font-normal leading-[1.05] text-balance mb-4"
          >
            Bruna Tamires
          </motion.h1>

          {/* Item 2: Especialidades */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg tracking-wider text-[#DCCFC0] font-light mb-5"
          >
            <span className="text-white font-medium">Tattoo</span>
            <span className="text-[#A77B58]">·</span>
            <span className="text-white font-medium">Furo Humanizado</span>
            <span className="text-[#A77B58]">·</span>
            <span className="text-white font-medium">Sobrancelhas</span>
            <span className="hidden sm:inline text-[#A77B58]">·</span>
            <span className="hidden sm:inline text-xs uppercase tracking-widest text-[#A89582]">
              João Monlevade — MG
            </span>
          </motion.div>

          {/* Item 3: Frase institucional */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#DCCFC0]/90 max-w-xl font-light leading-relaxed mb-8"
          >
            Arte, precisão e acolhimento em cada traço. Uma experiência pensada para realçar sua beleza e história com delicadeza, segurança e intenção artística.
          </motion.p>

          {/* Item 4: Botão de agendamento pelo WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={BUSINESS_INFO.whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar pelo WhatsApp</span>
            </a>

            <a
              href="#especialidades"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#DCCFC0]/30 hover:border-[#F5F0E9] text-xs sm:text-sm font-medium tracking-wider uppercase text-[#DCCFC0] hover:text-white transition-all duration-200"
            >
              <span>Explorar Especialidades</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-4 right-6 sm:right-8 z-10 hidden sm:flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#DCCFC0]"
      >
        <span>Role para explorar</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
};
