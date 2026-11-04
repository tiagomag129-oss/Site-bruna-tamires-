import React from 'react';
import { ArrowUpRight, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { GalleryItem } from '../types';

interface Props {
  onSelectItem: (item: GalleryItem) => void;
}

export const FuroHumanizadoSection: React.FC<Props> = ({ onSelectItem }) => {
  const furoItems: GalleryItem[] = [
    {
      id: 'f-bebe-detalhe',
      title: 'Primeiro Brinquinho Seguro',
      category: 'furo',
      categoryLabel: 'Primeiro Brinquinho',
      image: '/src/assets/images/furo_humanizado_baby_1793799529135.jpg',
      alt: 'Primeiro brinquinho para bebês com técnica humanizada em João Monlevade',
      description: 'Aplicação suave, sem trauma, respeitando o ritmo e aconchego do recém-nascido.',
      isRealWorkByBruna: false,
      whatsappMessage: 'Ol%C3%A1%2C%20Bruna!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20furo%20humanizado.',
    },
    {
      id: 'f-orelha-ouro',
      title: 'Curadoria de Perfurações Auriculares',
      category: 'furo',
      categoryLabel: 'Perfuração Auricular',
      image: '/src/assets/images/furo_humanizado_ear_1793799530329.jpg',
      alt: 'Composição de perfurações auriculares delicadas com joias douradas',
      description: 'Estudo anatômico para posicionamento estético impecável e harmonioso na orelha.',
      isRealWorkByBruna: false,
      whatsappMessage: 'Ol%C3%A1%2C%20Bruna!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20furo%20humanizado.',
    },
  ];

  return (
    <section id="furo-humanizado" className="py-24 sm:py-32 bg-[#DCCFC0]/25 text-[#292725]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with warm typography */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-[#A77B58]" />
              Especialidade 02
            </span>
            <span className="w-10 h-[1px] bg-[#A89582]/40" />
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#292725] tracking-tight mb-4">
            Furo Humanizado: acolhimento, técnica e afeto
          </h2>
          <p className="text-sm sm:text-base text-[#392E29]/80 font-light leading-relaxed">
            Uma abordagem sensível e livre de traumas para bebês, crianças e adultos. Cada perfuração é planejada respeitando a anatomia auricular individual, a biossegurança e o conforto emocional.
          </p>
        </div>

        {/* 2 Focal Cards: Bebês & Adultos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Card 1: Bebês */}
          <div className="bg-[#F5F0E9] border border-[#DCCFC0] p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A77B58]">
                  Recém-nascidos & Bebês
                </span>
                <span className="text-xs text-[#A89582]">Ponto Neutro Auricular</span>
              </div>

              <div
                onClick={() => onSelectItem(furoItems[0])}
                className="group relative cursor-pointer aspect-[16/10] overflow-hidden rounded-sm bg-[#DCCFC0]/40 mb-6"
              >
                <img
                  src={furoItems[0].image}
                  alt={furoItems[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#292725]/10 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase font-mono tracking-wider bg-[#292725]/80 text-white px-2 py-0.5 rounded backdrop-blur-sm">
                  Ampliar foto
                </span>
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#292725] mb-3">
                Primeiro Brinquinho para Bebês
              </h3>
              <p className="text-xs sm:text-sm text-[#392E29]/80 font-light leading-relaxed mb-6">
                O primeiro brinquinho é um marco de afeto na família. O procedimento é realizado com calma absoluta, no colo dos pais, com materiais estéreis descartáveis e joia delicada biocompatível, garantindo que o momento seja tranquilo e sereno.
              </p>

              <div className="space-y-2 mb-8 text-xs text-[#392E29]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A77B58]" />
                  <span>Localização de ponto neutro auricular (sem pontos reflexos)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A77B58]" />
                  <span>Ambiente tranquilo, sem pressa e acolhedor</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A77B58]" />
                  <span>Acompanhamento pós-colocação com orientações aos pais</span>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.whatsappLinks.furo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Consultar Primeiro Brinquinho</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Perfurações Auriculares Adultos */}
          <div className="bg-[#F5F0E9] border border-[#DCCFC0] p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A77B58]">
                  Adolescentes & Adultos
                </span>
                <span className="text-xs text-[#A89582]">Visagismo Auricular</span>
              </div>

              <div
                onClick={() => onSelectItem(furoItems[1])}
                className="group relative cursor-pointer aspect-[16/10] overflow-hidden rounded-sm bg-[#DCCFC0]/40 mb-6"
              >
                <img
                  src={furoItems[1].image}
                  alt={furoItems[1].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#292725]/10 group-hover:bg-transparent transition-colors" />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase font-mono tracking-wider bg-[#292725]/80 text-white px-2 py-0.5 rounded backdrop-blur-sm">
                  Ampliar foto
                </span>
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#292725] mb-3">
                Perfurações Auriculares Planejadas
              </h3>
              <p className="text-xs sm:text-sm text-[#392E29]/80 font-light leading-relaxed mb-6">
                Mais do que um furo: uma curadoria estética que respeita a curvatura da sua cartilagem e lóbulo. Posicionamento calculado para valorizar combinações de joias e proporcionar cicatrização confortável.
              </p>

              <div className="space-y-2 mb-8 text-xs text-[#392E29]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#A77B58]" />
                  <span>Perfuração precisa de lóbulo e cartilagens</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#A77B58]" />
                  <span>Joalheria fina de alta pureza hipoalergênica</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#A77B58]" />
                  <span>Protocolo rigoroso de biossegurança e assepsia</span>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.whatsappLinks.furo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full border border-[#292725] hover:bg-[#292725] hover:text-white text-[#292725] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Agendar Perfuração Auricular</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
