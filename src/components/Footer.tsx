import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#292725] text-[#DCCFC0] border-t border-[#A89582]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#A89582]/20 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <h3 className="font-serif-editorial text-3xl text-white font-normal mb-2">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#A77B58] font-medium mb-4">
              {BUSINESS_INFO.profession}
            </p>
            <p className="text-xs text-[#DCCFC0]/70 max-w-sm font-light leading-relaxed mb-6">
              Estúdio de tatuagem artística, furo humanizado e estética de sobrancelhas no Centro de João Monlevade — MG. Cuidado exclusivo, biossegurança e afeto.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#A89582]">
              <span>Avaliação Google 4.9 ★ (55 avaliações)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#tattoo"
                  className="hover:text-white transition-colors"
                >
                  Tatuagem Fineline & Botânica
                </a>
              </li>
              <li>
                <a
                  href="#furo-humanizado"
                  className="hover:text-white transition-colors"
                >
                  Furo Humanizado para Bebês
                </a>
              </li>
              <li>
                <a
                  href="#furo-humanizado"
                  className="hover:text-white transition-colors"
                >
                  Perfurações Auriculares
                </a>
              </li>
              <li>
                <a
                  href="#sobrancelhas"
                  className="hover:text-white transition-colors"
                >
                  Nanopigmentação Fio a Fio
                </a>
              </li>
              <li>
                <a
                  href="#sobrancelhas"
                  className="hover:text-white transition-colors"
                >
                  Brow Lamination & Design
                </a>
              </li>
            </ul>
          </div>

          {/* Local Information */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Endereço & Contato
            </h4>
            <div className="space-y-2 text-xs text-[#DCCFC0]/80 mb-4">
              <p>{BUSINESS_INFO.address}</p>
              <p>
                {BUSINESS_INFO.city} — {BUSINESS_INFO.state}, CEP {BUSINESS_INFO.cep}
              </p>
              <p className="pt-2 text-white font-medium">WhatsApp: {BUSINESS_INFO.phoneDisplay}</p>
              <p className="text-[11px] text-[#A89582]">Atendimento sob agendamento prévio</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89582]">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[11px]">
              Feito com <Heart className="w-3 h-3 text-[#A77B58] fill-[#A77B58]" /> para João Monlevade - MG
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#DCCFC0] hover:text-white transition-colors p-1"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
