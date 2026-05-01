'use client';

import React, { useState } from 'react';
import { ProfileSectionProps } from '@/app/types';
import Button from '@/app/components/atoms/Button';
import Modal from '@/app/components/molecules/Modal';

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  title,
  highlightWord,
  profileImage,
  description,
  onHireMe,
  className = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) return <span>{title}</span>;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#38bdf8]">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className={`bg-[#0f172a] px-12 py-16 border-b border-[#1e3a5f] ${className}`} aria-label="Sección de perfil">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-start gap-5 max-w-3xl">
        <p className="text-[#38bdf8] text-sm font-mono tracking-widest uppercase">Bienvenido a mi portafolio</p>
        <h1 className="text-5xl font-bold text-[#e2e8f0] leading-tight">{name}</h1>
        <h2 className="text-2xl font-semibold text-[#cbd5e1]">{renderTitle()}</h2>
        <p className="text-[#94a3b8] leading-relaxed">{description}</p>
        <Button variant="primary" onClick={() => { setIsModalOpen(true); onHireMe(); }}>
          CONTRÁTAME
        </Button>
      </div>

      {/* Modal de contacto */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 id="modal-title" className="text-2xl font-bold text-[#e2e8f0] mb-2">¡Contáctame!</h2>
        <p className="text-[#94a3b8] mb-6">¿Interesado en trabajar juntos? Envíame un mensaje.</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-[#cbd5e1] mb-1">Nombre</label>
            <input id="contact-name" type="text" placeholder="Tu nombre completo"
              className="w-full px-4 py-2 bg-[#1e293b] border border-[#334155] text-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-[#475569]" />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-[#cbd5e1] mb-1">Email</label>
            <input id="contact-email" type="email" placeholder="tu@email.com"
              className="w-full px-4 py-2 bg-[#1e293b] border border-[#334155] text-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-[#475569]" />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-[#cbd5e1] mb-1">Mensaje</label>
            <textarea id="contact-message" rows={4} placeholder="Cuéntame sobre tu proyecto..."
              className="w-full px-4 py-2 bg-[#1e293b] border border-[#334155] text-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-[#475569] resize-none" />
          </div>
          <Button variant="primary" className="w-full">Enviar Mensaje</Button>
        </form>
      </Modal>
    </section>
  );
};

export default ProfileSection;
