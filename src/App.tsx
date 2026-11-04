/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCinematic } from './components/HeroCinematic';
import { SpecialtiesOverview } from './components/SpecialtiesOverview';
import { VerticalParallaxGallery } from './components/VerticalParallaxGallery';
import { TattooSection } from './components/TattooSection';
import { FuroHumanizadoSection } from './components/FuroHumanizadoSection';
import { SobrancelhasSection } from './components/SobrancelhasSection';
import { AboutBruna } from './components/AboutBruna';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { FinalBookingCTA } from './components/FinalBookingCTA';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GalleryItem } from './types';

export default function App() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F0E9] text-[#292725] flex flex-col font-sans selection:bg-[#A77B58]/30 selection:text-[#292725]">
      {/* 1-Row, 3-Zone Top Navigation Contract */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Capa cinematográfica (100vw x 100svh, sequência elegante de entrada) */}
        <HeroCinematic />

        {/* 2. Apresentação das três especialidades */}
        <SpecialtiesOverview />

        {/* 3. Galeria editorial vertical com movimento no scroll (3 colunas em direções opostas) */}
        <VerticalParallaxGallery onSelectItem={setSelectedGalleryItem} />

        {/* 4. Seção Tattoo */}
        <TattooSection onSelectItem={setSelectedGalleryItem} />

        {/* 5. Seção Furo Humanizado */}
        <FuroHumanizadoSection onSelectItem={setSelectedGalleryItem} />

        {/* 6. Seção Sobrancelhas */}
        <SobrancelhasSection onSelectItem={setSelectedGalleryItem} />

        {/* 7. Apresentação da Bruna */}
        <AboutBruna />

        {/* 8. Avaliações de clientes (4,9 estrelas · 55 avaliações Google) */}
        <ReviewsSection />

        {/* 9. Localização e contato (Praça D, 7 — Centro, João Monlevade — MG) */}
        <LocationContactSection />

        {/* 10. Chamada final para agendamento */}
        <FinalBookingCTA />
      </main>

      {/* 11. Rodapé */}
      <Footer />

      {/* Lightbox Modal for deep inspection */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
