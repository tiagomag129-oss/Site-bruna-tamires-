import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface Specialty {
  id: string;
  number: string;
  title: string;
  anchor: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  whatsappLink: string;
}

const SPECIALTIES: Specialty[] = [
  {
    id: 'tattoo',
    number: '01',
    title: 'Tattoo',
    anchor: '#tattoo',
    subtitle: 'Tatuagens Artísticas & Fineline',
    description:
      'Traços finos, precisos e sutis que eternizam momentos, sentimentos e histórias na pele com delicadeza e fluidez.',
    highlights: ['Linhas ultrafinas e contínuas', 'Botânicos e autorais', 'Cicatrização leve e nítida'],
    image: '/assets/aistudio/Screenshot_20261104_090213_Instagram_b293e760.jpg',
    alt: 'Tatuagem fineline botânica nas costas feita por Bruna Tamires',
    whatsappLink: BUSINESS_INFO.whatsappLinks.tattoo,
  },
  {
    id: 'furo',
    number: '02',
    title: 'Furo Humanizado',
    anchor: '#furo-humanizado',
    subtitle: 'Perfurações Auriculares & Primeiro Brinquinho',
    description:
      'Técnica asséptica humanizada respeitando a anatomia e o tempo de cada pessoa. Atendimento especial e afetuoso para recém-nascidos e bebês.',
    highlights: ['Primeiro brinquinho para bebês', 'Perfurações auriculares planejadas', 'Joias em titânio e ouro biocompatíveis'],
    image: '/assets/images/furo_humanizado_baby_1793799529135.jpg',
    alt: 'Primeiro brinquinho humanizado para bebê com cuidado acolhedor',
    whatsappLink: BUSINESS_INFO.whatsappLinks.furo,
  },
  {
    id: 'sobrancelhas',
    number: '03',
    title: 'Sobrancelhas',
    anchor: '#sobrancelhas',
    subtitle: 'Design, Lamination & Nanopigmentação',
    description:
      'Realce da curvatura e estrutura dos fios sem artificialidade. Técnicas de nanoblading fio a fio e alinhamento que valorizam sua expressão natural.',
    highlights: ['Nanopigmentação fio a fio hiper-realista', 'Brow Lamination modeladora', 'Design estratégico personalizado'],
    image: '/assets/images/sobrancelhas_lamination_1793799530836.jpg',
    alt: 'Sobrancelhas alinhadas com textura e acabamento natural',
    whatsappLink: BUSINESS_INFO.whatsappLinks.sobrancelhas,
  },
];

export const SpecialtiesOverview: React.FC = () => {
  return (
    <section id="especialidades" className="py-24 sm:py-32 bg-[#F5F0E9] text-[#292725]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold">
              Especialidades
            </span>
            <span className="w-12 h-[1px] bg-[#DCCFC0]" />
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#292725] font-normal text-balance mb-4">
            Três caminhos de expressão, a mesma excelência em cuidado
          </h2>
          <p className="text-sm sm:text-base text-[#392E29]/80 font-light leading-relaxed">
            Cada área possui metodologia dedicada, acolhimento individual e canal direto de conversa para planejar o seu momento com exclusividade.
          </p>
        </div>

        {/* 3 Specialties Grid - Equal commercial weight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="group flex flex-col justify-between border-t border-[#DCCFC0] pt-6 transition-all duration-300"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs font-mono text-[#A77B58] tracking-widest">{spec.number}</span>
                  <a
                    href={spec.anchor}
                    className="text-xs uppercase tracking-widest text-[#A89582] group-hover:text-[#292725] transition-colors"
                  >
                    Ver detalhes ↓
                  </a>
                </div>

                {/* Aspect ratio container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#DCCFC0]/40 mb-6">
                  <img
                    src={spec.image}
                    alt={spec.alt}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#292725] mb-2">
                  {spec.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#A77B58] font-medium mb-3">
                  {spec.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#392E29]/80 leading-relaxed font-light mb-5">
                  {spec.description}
                </p>

                {/* Unboxed highlights list */}
                <ul className="space-y-1.5 mb-6 text-xs text-[#392E29]/75">
                  {spec.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#A77B58]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={spec.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full py-3 px-4 border border-[#DCCFC0] group-hover:border-[#A77B58] group-hover:bg-[#A77B58] group-hover:text-white rounded-full text-xs font-semibold uppercase tracking-wider text-[#292725] transition-all duration-200 mt-2"
              >
                <span>Agendar {spec.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
