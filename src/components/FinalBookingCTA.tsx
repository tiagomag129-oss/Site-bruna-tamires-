import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

type ServiceKey = 'tattoo' | 'furo' | 'sobrancelhas';

interface ServiceOption {
  key: ServiceKey;
  label: string;
  tagline: string;
  url: string;
  messageText: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    key: 'tattoo',
    label: 'Tatuagem',
    tagline: 'Linhas finas, botânicos e artes personalizadas com cicatrização impecável.',
    url: BUSINESS_INFO.whatsappLinks.tattoo,
    messageText: 'Olá, Bruna! Conheci seu trabalho pelo site e gostaria de conversar sobre uma tatuagem.',
  },
  {
    key: 'furo',
    label: 'Furo Humanizado',
    tagline: 'Perfurações auriculares com técnica asséptica e primeiro brinquinho para bebês.',
    url: BUSINESS_INFO.whatsappLinks.furo,
    messageText: 'Olá, Bruna! Conheci seu trabalho pelo site e gostaria de informações sobre furo humanizado.',
  },
  {
    key: 'sobrancelhas',
    label: 'Sobrancelhas',
    tagline: 'Design estratégico, Brow Lamination e Nanopigmentação fio a fio hiper-realista.',
    url: BUSINESS_INFO.whatsappLinks.sobrancelhas,
    messageText: 'Olá, Bruna! Conheci seu trabalho pelo site e gostaria de informações sobre os procedimentos de sobrancelhas.',
  },
];

export const FinalBookingCTA: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceKey>('tattoo');

  const currentOption =
    SERVICE_OPTIONS.find((s) => s.key === selectedService) || SERVICE_OPTIONS[0];

  return (
    <section className="py-24 sm:py-32 bg-[#F5F0E9] text-[#292725] border-t border-[#DCCFC0]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Agende Seu Momento
          </span>
        </div>

        <h2 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#292725] tracking-tight mb-4">
          Pronta para viver uma experiência exclusiva?
        </h2>
        <p className="text-sm sm:text-base text-[#392E29]/80 font-light max-w-xl mx-auto leading-relaxed mb-10">
          Escolha o procedimento desejado abaixo para abrir sua conversa direta no WhatsApp já com o assunto correto.
        </p>

        {/* Interactive Service Selector Tabs */}
        <div className="inline-flex p-1.5 bg-[#DCCFC0]/60 rounded-full mb-8 max-w-md w-full justify-between">
          {SERVICE_OPTIONS.map((opt) => {
            const isActive = opt.key === selectedService;
            return (
              <button
                key={opt.key}
                onClick={() => setSelectedService(opt.key)}
                className={`flex-1 py-2.5 px-4 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#292725] text-white shadow-sm'
                    : 'text-[#392E29] hover:text-[#292725]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white border border-[#DCCFC0] rounded-sm p-8 sm:p-12 max-w-2xl mx-auto shadow-md mb-8">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#A77B58] block mb-2">
            Procedimento Selecionado
          </span>
          <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#292725] mb-3">
            {currentOption.label}
          </h3>
          <p className="text-sm text-[#392E29]/80 font-light leading-relaxed mb-6">
            {currentOption.tagline}
          </p>

          <div className="bg-[#F5F0E9] p-4 rounded text-left border border-[#DCCFC0]/60 mb-8">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A89582] block mb-1">
              Mensagem automática que será enviada:
            </span>
            <p className="text-xs sm:text-sm text-[#292725] italic font-light">
              "{currentOption.messageText}"
            </p>
          </div>

          <a
            href={currentOption.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full py-4 px-8 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.99]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Iniciar Conversa no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-[#A89582]">
          Atendimento humanizado em João Monlevade — MG · Resposta ágil pelo WhatsApp
        </p>
      </div>
    </section>
  );
};
