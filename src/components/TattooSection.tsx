import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { GalleryItem } from '../types';

interface Props {
  onSelectItem: (item: GalleryItem) => void;
}

export const TattooSection: React.FC<Props> = ({ onSelectItem }) => {
  const tattooWorks: GalleryItem[] = [
    {
      id: 't-flora',
      title: 'Composição Botânica Dorsal',
      category: 'tattoo',
      categoryLabel: 'Tattoo',
      image: '/assets/aistudio/Screenshot_20261104_090213_Instagram_b293e760.jpg',
      alt: 'Tatuagem botânica fineline nas costas',
      description: 'Linhas contínuas e harmoniosas acompanhando a silhueta das costas com elegância.',
      isRealWorkByBruna: true,
      whatsappMessage: 'Ol%C3%A1%2C%20Bruna!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20tatuagem.',
    },
    {
      id: 't-afeto',
      title: 'Homenagem e Fé',
      category: 'tattoo',
      categoryLabel: 'Tattoo',
      image: '/assets/aistudio/Screenshot_20261104_090145_Instagram_b937f137.jpg',
      alt: 'Tatuagem delicada de Nossa Senhora abraçando mãe e filha',
      description: 'Simbologia de proteção divina, maternidade e amor eterno traduzida em fineline.',
      isRealWorkByBruna: true,
      whatsappMessage: 'Ol%C3%A1%2C%20Bruna!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20tatuagem.',
    },
    {
      id: 't-celestial',
      title: 'Símbolo Ornamental Celestial',
      category: 'tattoo',
      categoryLabel: 'Tattoo',
      image: '/assets/aistudio/Screenshot_20261104_090223_Instagram_ca950c36.jpg',
      alt: 'Tatuagem celestial com fases lunares e geometria na costela',
      description: 'Pontilhismo delicado e simetria sutil desenhados para fluir com o movimento do corpo.',
      isRealWorkByBruna: true,
      whatsappMessage: 'Ol%C3%A1%2C%20Bruna!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20tatuagem.',
    },
    {
      id: 't-fenix',
      title: 'Fênix Alada com Plumagem Suave',
      category: 'tattoo',
      categoryLabel: 'Tattoo',
      image: '/assets/aistudio/Screenshot_20261104_090314_Instagram_bf9cfb2e.jpg',
      alt: 'Tatuagem de fênix no braço com traço fino',
      description: 'Renascimento e força feminina com plumas fluidas e transições suaves de cinza.',
      isRealWorkByBruna: true,
      whatsappMessage: 'Ol%C3%A1%2C%20Bruna!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20tatuagem.',
    },
  ];

  return (
    <section id="tattoo" className="py-24 sm:py-32 bg-[#F5F0E9] text-[#292725] border-t border-[#DCCFC0]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold">
                Especialidade 01
              </span>
              <span className="w-10 h-[1px] bg-[#DCCFC0]" />
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#292725] tracking-tight mb-4">
              Tatuagens com alma, precisão milimétrica e sensibilidade
            </h2>
            <p className="text-sm sm:text-base text-[#392E29]/80 font-light leading-relaxed mb-6">
              A tatuagem é uma arte íntima. No estúdio em João Monlevade, cada projeto recebe atenção individual: desde o desenho sob medida até a execução com agulhas finas para garantir uma cicatrização suave e nítida.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Fineline de alta precisão com traços fluidos e delicados',
                'Projetos botânicos, memoriais, homenagens e criações autorais',
                'Materiais estéreis descartáveis e pigmentos de alta pureza',
                'Acompanhamento e orientações completas para a cicatrização',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#392E29]">
                  <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#A77B58]/20 flex items-center justify-center text-[#A77B58]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href={BUSINESS_INFO.whatsappLinks.tattoo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#292725] hover:bg-[#392E29] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm transition-all duration-200"
            >
              <span>Conversar sobre Tatuagem</span>
              <ArrowUpRight className="w-4 h-4 text-[#A77B58]" />
            </a>
          </div>

          {/* Featured Hero Tattoo Card */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onSelectItem(tattooWorks[0])}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#DCCFC0]/30 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={tattooWorks[0].image}
                  alt={tattooWorks[0].alt}
                  className="w-full h-full object-cover object-[50%_35%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292725]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#DCCFC0] bg-[#292725]/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      Obra Real Autoral
                    </span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal mt-2">
                      {tattooWorks[0].title}
                    </h3>
                    <p className="text-xs text-[#DCCFC0]/90 font-light max-w-md hidden sm:block">
                      {tattooWorks[0].description}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-wider underline underline-offset-4 text-[#A77B58] group-hover:text-white transition-colors">
                    Inspecionar obra
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Grid of Additional Tattoo Works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-[#DCCFC0]">
          {tattooWorks.slice(1).map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectItem(work)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#DCCFC0]/40 mb-4">
                <img
                  src={work.image}
                  alt={work.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono uppercase tracking-widest bg-[#292725]/80 text-[#DCCFC0] px-2 py-0.5 rounded">
                    Trabalho Real
                  </span>
                </div>
              </div>
              <h4 className="font-serif-editorial text-xl font-medium text-[#292725] group-hover:text-[#A77B58] transition-colors mb-1">
                {work.title}
              </h4>
              <p className="text-xs text-[#392E29]/75 font-light leading-relaxed">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
