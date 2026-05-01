'use client';

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ModalProps } from '@/app/types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className = '' }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm modal-overlay" onClick={onClose} aria-hidden="true" />
      <div ref={modalRef} className={`relative bg-[#1e293b] border border-[#334155] rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn ${className}`}>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#334155] hover:bg-[#475569] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] z-10 modal-close-button"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#94a3b8]" />
        </button>
        <div className="p-8 pt-12 modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
