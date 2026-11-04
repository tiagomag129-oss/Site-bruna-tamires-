import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Copy, Check, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const LocationContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = `${BUSINESS_INFO.address}, ${BUSINESS_INFO.city} — ${BUSINESS_INFO.state}, CEP ${BUSINESS_INFO.cep}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapsQuery = encodeURIComponent(`Praça D, 7 Centro João Monlevade MG 35930-000`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#292725] text-[#F5F0E9] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A77B58] font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Localização & Contato
            </span>
            <span className="w-10 h-[1px] bg-[#A89582]/40" />
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#F5F0E9] tracking-tight mb-4">
            Venha nos visitar no coração de João Monlevade
          </h2>
          <p className="text-sm sm:text-base text-[#DCCFC0]/80 font-light leading-relaxed">
            Localizado no Centro da cidade, com fácil acesso, conforto e privacidade para o seu momento de atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#392E29]/60 border border-[#A89582]/30 p-8 sm:p-10 rounded-sm flex flex-col justify-between">
            <div className="space-y-8">
              {/* Address item */}
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#A77B58] block mb-2">
                  Endereço
                </span>
                <p className="text-lg font-medium text-white mb-1">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-sm text-[#DCCFC0] mb-3">
                  {BUSINESS_INFO.city} — {BUSINESS_INFO.state}, CEP {BUSINESS_INFO.cep}
                </p>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A77B58] hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar endereço completo</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp & Phone */}
              <div className="pt-6 border-t border-[#A89582]/20">
                <span className="text-xs uppercase font-mono tracking-widest text-[#A77B58] block mb-2">
                  Atendimento & Agendamentos
                </span>
                <a
                  href={BUSINESS_INFO.whatsappLinks.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-serif-editorial text-white hover:text-[#A77B58] transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-[#A77B58]" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <p className="text-xs text-[#DCCFC0]/70 mt-1">
                  Atendimento exclusivo sob agendamento prévio via WhatsApp.
                </p>
              </div>

              {/* Service Note */}
              <div className="pt-6 border-t border-[#A89582]/20 flex items-start gap-3 text-xs text-[#DCCFC0]">
                <Clock className="w-4 h-4 text-[#A77B58] shrink-0 mt-0.5" />
                <span>
                  Horários flexíveis combinados individualmente para garantir tranquilidade e dedicação total a você.
                </span>
              </div>
            </div>

            <div className="pt-8 border-t border-[#A89582]/20 mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3.5 px-4 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3.5 px-4 rounded-full border border-[#DCCFC0]/40 hover:border-white text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#A77B58]" />
                <span>Traçar Rota</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-[#392E29]/30 border border-[#A89582]/30 rounded-sm overflow-hidden min-h-[380px] flex flex-col">
            <div className="p-4 bg-[#392E29]/60 border-b border-[#A89582]/20 flex items-center justify-between text-xs text-[#DCCFC0]">
              <span className="font-mono uppercase tracking-wider">Praça D, Centro · João Monlevade</span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A77B58] hover:text-white underline underline-offset-2 transition-colors"
              >
                Expandir mapa
              </a>
            </div>
            <div className="flex-1 relative w-full h-full min-h-[320px]">
              <iframe
                title="Localização do estúdio Bruna Tamires em João Monlevade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  'Praça D, 7, Centro, João Monlevade - MG'
                )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[340px] border-0 grayscale-[40%] contrast-[110%]"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
