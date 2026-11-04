import React from 'react';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutBruna: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#292725] text-[#F5F0E9] relative overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#A77B58]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden border border-[#A89582]/30 shadow-2xl">
              <img
                src="/assets/aistudio/Screenshot_20261104_090021_Instagram_79b7e1d7.jpg"
                alt="Bruna Tamires - Artista e Profissional no estúdio em João Monlevade"
                className="w-full h-full object-cover object-[50%_20%]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#DCCFC0] bg-[#292725]/70 backdrop-blur-sm px-2 py-0.5 rounded">
                  João Monlevade — MG
                </span>
                <p className="font-serif-editorial text-2xl text-white font-normal mt-1">
                  Bruna Tamires
                </p>
                <p className="text-xs text-[#DCCFC0]/80">Tattoo · Furo Humanizado · Sobrancelhas</p>
              </div>
            </div>
          </div>

          {/* Editorial Text Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                A Profissional
              </span>
              <span className="w-10 h-[1px] bg-[#A89582]/40" />
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#F5F0E9] tracking-tight mb-6">
              Arte, sensibilidade e presença em cada atendimento
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#DCCFC0]/85 font-light leading-relaxed mb-8">
              <p>
                No estúdio localizado na Praça D, no Centro de João Monlevade, Bruna Tamires dedica-se a proporcionar uma experiência onde técnica rigorosa e acolhimento humano caminham lado a lado.
              </p>
              <p>
                Seja na elaboração de uma tatuagem fineline de traço delicado, na colocação do primeiro brinquinho com carinho materno ou no desenho harmonioso de sobrancelhas, cada procedimento é tratado de forma exclusiva e sem pressa.
              </p>
              <p>
                O espaço foi pensado para oferecer tranquilidade, conforto e biossegurança em todas as etapas, garantindo que o seu momento de cuidado e expressão seja marcante e sereno.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#A89582]/20">
              <div className="flex items-center gap-2 text-xs text-[#DCCFC0]">
                <MapPin className="w-4 h-4 text-[#A77B58]" />
                <span>Atendimento presencial no Centro de João Monlevade — MG</span>
              </div>
              <a
                href={BUSINESS_INFO.whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs font-semibold uppercase tracking-wider transition-colors ml-auto shadow-sm"
              >
                <span>Falar com a Bruna</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
