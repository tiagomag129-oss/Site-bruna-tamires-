import React from 'react';
import { Star, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F0E9] text-[#292725] border-t border-[#DCCFC0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold">
              Reconhecimento & Confiança
            </span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#292725] tracking-tight mb-4">
            Avaliação 4,9 estrelas no Google
          </h2>
          <p className="text-sm sm:text-base text-[#392E29]/80 font-light leading-relaxed">
            Reconhecimento comprovado pelas clientes atendidas em João Monlevade e cidades vizinhas.
          </p>
        </div>

        {/* Central Trust Monograph Card */}
        <div className="max-w-4xl mx-auto bg-white/70 border border-[#DCCFC0] rounded-sm p-8 sm:p-12 shadow-sm text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-7 h-7 fill-[#A77B58] text-[#A77B58]"
                />
              ))}
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-serif-editorial text-6xl sm:text-7xl font-normal text-[#292725]">
                {BUSINESS_INFO.rating.toFixed(1)}
              </span>
              <span className="text-xl text-[#A89582] font-light">/ 5.0</span>
            </div>

            <p className="text-sm uppercase tracking-widest text-[#392E29] font-medium">
              Baseado em {BUSINESS_INFO.totalReviews} avaliações reais de clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#DCCFC0]/60 text-left mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#A77B58] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#292725] mb-1">
                  Atendimento Cuidadoso
                </h4>
                <p className="text-xs text-[#392E29]/75 font-light">
                  Atenção aos detalhes, escuta atenta e paciência em cada procedimento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#A77B58] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#292725] mb-1">
                  Ambiente Acolhedor
                </h4>
                <p className="text-xs text-[#392E29]/75 font-light">
                  Espaço limpo, esterilizado e preparado para o conforto dos clientes e bebês.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#A77B58] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#292725] mb-1">
                  Resultados Delicados
                </h4>
                <p className="text-xs text-[#392E29]/75 font-light">
                  Precisão em tatuagens fineline, perfurações seguras e sobrancelhas naturais.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bruna+Tamires+Joao+Monlevade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#292725] hover:bg-[#292725] hover:text-white text-[#292725] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Ver perfil no Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={BUSINESS_INFO.whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Agendar sua experiência</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
