import React from 'react';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { GalleryItem } from '../types';

interface Props {
  onSelectItem: (item: GalleryItem) => void;
}

export const SobrancelhasSection: React.FC<Props> = ({ onSelectItem }) => {
  const eyebrowProcedures = [
    {
      id: 'design',
      title: 'Design Personalizado',
      subtitle: 'Visagismo & Harmonia Facial',
      description:
        'Estudo das proporções do seu rosto para desenhar o arqueamento ideal, sem afinar ou descaracterizar sua expressão natural.',
      benefits: ['Mapeamento anatômico', 'Limpeza precisa dos fios', 'Finalização suave e elegante'],
    },
    {
      id: 'lamination',
      title: 'Brow Lamination',
      subtitle: 'Alinhamento & Volume Natural',
      description:
        'Técnica que alinha os fios na direção desejada, conferindo efeito encorpado, disciplinado e naturalmente marcante.',
      benefits: ['Aparência mais cheia e alinhada', 'Fios macios e penteáveis', 'Efeito moderno e duradouro'],
    },
    {
      id: 'nanopigmentacao',
      title: 'Nanopigmentação Fio a Fio',
      subtitle: 'Hiper-realismo & Preenchimento',
      description:
        'Fios ultrafinos desenhados na mesma espessura e direção dos pelos reais, corrigindo falhas de maneira indetectável e refinada.',
      benefits: ['Traço nanomilésimo imperceptível', 'Pigmentos selecionados para seu tom', 'Aspecto leve sem peso visual'],
    },
  ];

  const visualCards: GalleryItem[] = [
    {
      id: 's-nano-card',
      title: 'Nanopigmentação Fio a Fio',
      category: 'sobrancelhas',
      categoryLabel: 'Nanopigmentação',
      image: '/src/assets/images/sobrancelhas_nanopigmentation_1793799530143.jpg',
      alt: 'Detalhe em alta definição de sobrancelha com fios realistas de nanopigmentação',
      description: 'Precisão que simula o caimento natural dos fios, com harmonia de densidade e tom.',
      isRealWorkByBruna: false,
      whatsappMessage: 'Ol%C3%A1%2C%20Bruna!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20procedimentos%20de%20sobrancelhas.',
    },
    {
      id: 's-lami-card',
      title: 'Brow Lamination & Alinhamento',
      category: 'sobrancelhas',
      categoryLabel: 'Brow Lamination',
      image: '/src/assets/images/sobrancelhas_lamination_1793799530836.jpg',
      alt: 'Sobrancelha feminina com efeito de brow lamination e aspecto natural',
      description: 'Efeito lifting para os fios da sobrancelha, proporcionando amplitude ao olhar.',
      isRealWorkByBruna: false,
      whatsappMessage: 'Ol%C3%A1%2C%20Bruna!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20procedimentos%20de%20sobrancelhas.',
    },
  ];

  return (
    <section id="sobrancelhas" className="py-24 sm:py-32 bg-[#F5F0E9] text-[#292725] border-t border-[#DCCFC0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Especialidade 03
              </span>
              <span className="w-10 h-[1px] bg-[#DCCFC0]" />
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#292725] tracking-tight mb-4">
              Sobrancelhas que emolduram seu olhar com naturalidade
            </h2>
            <p className="text-sm sm:text-base text-[#392E29]/80 font-light leading-relaxed">
              O objetivo não é criar sobrancelhas padronizadas, mas valorizar a arquitetura natural do seu rosto. Procedimentos detalhistas para quem valoriza sutileza e acabamento impecável.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.whatsappLinks.sobrancelhas}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            <span>Consultar Procedimentos</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2 Visual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visualCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectItem(card)}
              className="group cursor-pointer bg-[#DCCFC0]/20 border border-[#DCCFC0] overflow-hidden rounded-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/75 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#DCCFC0] bg-[#292725]/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {card.categoryLabel}
                    </span>
                    <h3 className="font-serif-editorial text-xl sm:text-2xl font-normal mt-1">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#A77B58] group-hover:text-white uppercase tracking-wider underline underline-offset-2">
                    Inspecionar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Detailed Procedures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eyebrowProcedures.map((proc, index) => (
            <div
              key={proc.id}
              className="border-t border-[#DCCFC0] pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#A77B58] tracking-widest block mb-2">
                  0{index + 1}
                </span>
                <h3 className="font-serif-editorial text-2xl font-normal text-[#292725] mb-1">
                  {proc.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#A77B58] font-medium mb-3">
                  {proc.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#392E29]/80 font-light leading-relaxed mb-6">
                  {proc.description}
                </p>

                <ul className="space-y-2 mb-6 text-xs text-[#392E29]">
                  {proc.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#A77B58] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={BUSINESS_INFO.whatsappLinks.sobrancelhas}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-[#292725] hover:text-[#A77B58] inline-flex items-center gap-1.5 transition-colors pt-2 border-t border-[#DCCFC0]/60"
              >
                <span>Tirar dúvidas sobre {proc.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
