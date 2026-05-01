/**
 * Modal Component Example
 * 
 * Example usage of the Modal component
 */

'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import Button from '@/app/components/atoms/Button';

const ModalExample: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Modal Examples</h2>

      {/* Example 1: Contact Modal */}
      <div>
        <Button onClick={() => setIsContactModalOpen(true)}>
          Open Contact Modal
        </Button>

        <Modal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        >
          <h2 id="modal-title" className="text-2xl font-bold mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600 mb-6">
            ¿Interesado en trabajar juntos? ¡Me encantaría saber de ti!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                placeholder="Tu mensaje..."
              />
            </div>
            <Button variant="primary" className="w-full">
              Enviar Mensaje
            </Button>
          </form>
        </Modal>
      </div>

      {/* Example 2: Project Details Modal */}
      <div>
        <Button onClick={() => setIsProjectModalOpen(true)} variant="outline">
          Open Project Details Modal
        </Button>

        <Modal
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
        >
          <h2 id="modal-title" className="text-2xl font-bold mb-4">
            E-Commerce Platform
          </h2>
          <div className="space-y-4">
            <img
              src="https://placehold.co/600x400"
              alt="Project"
              className="w-full rounded-lg"
            />
            <p className="text-gray-600">
              Una plataforma de comercio electrónico completa construida con Next.js, 
              TypeScript y TailwindCSS. Incluye gestión de productos, carrito de compras, 
              procesamiento de pagos con Stripe, y un panel de administración completo.
            </p>
            <h3 className="font-semibold text-lg mt-4">Características principales:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Autenticación de usuarios con NextAuth.js</li>
              <li>Gestión de inventario en tiempo real</li>
              <li>Integración con Stripe para pagos</li>
              <li>Panel de administración con analytics</li>
              <li>Diseño responsive y accesible</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Button variant="primary">
                Ver Demo
              </Button>
              <Button variant="outline">
                Ver en GitHub
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ModalExample;
