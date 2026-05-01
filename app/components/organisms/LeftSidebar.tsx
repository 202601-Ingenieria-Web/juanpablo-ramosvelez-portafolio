import React from 'react';
import Image from 'next/image';
import { LeftSidebarProps } from '@/app/types';
import ProgressBar from '@/app/components/atoms/ProgressBar';

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  profileImage,
  name,
  title,
  contactInfo,
  languages,
  programmingLanguages,
  extraSkills,
  className = '',
}) => {
  return (
    <aside
      className={`w-[200px] bg-[#1e293b] h-screen overflow-y-auto p-6 ${className}`}
      aria-label="Left sidebar with personal information"
    >
      {/* Foto de perfil */}
      <div className="flex justify-center mb-4">
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden ring-2 ring-[#38bdf8]">
          <Image
            src={profileImage}
            alt={`${name} foto de perfil`}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Nombre */}
      <h1 className="text-center font-bold text-lg text-[#e2e8f0] mb-1">{name}</h1>

      {/* Título */}
      <p className="text-center text-sm text-[#38bdf8] mb-6">{title}</p>

      {/* Datos de contacto */}
      <div className="text-xs text-[#94a3b8] space-y-2 mb-6">
        {contactInfo.age && (
          <div className="flex justify-between">
            <span className="font-medium text-[#cbd5e1]">Edad:</span>
            <span>{contactInfo.age}</span>
          </div>
        )}
        {contactInfo.city && (
          <div className="flex justify-between">
            <span className="font-medium text-[#cbd5e1]">Ciudad:</span>
            <span>{contactInfo.city}</span>
          </div>
        )}
        {contactInfo.availability && (
          <div className="flex justify-between">
            <span className="font-medium text-[#cbd5e1]">Estado:</span>
            <span className="text-green-400">{contactInfo.availability}</span>
          </div>
        )}
        {contactInfo.address && (
          <div className="flex justify-between gap-2">
            <span className="font-medium text-[#cbd5e1]">Dirección:</span>
            <span className="text-right">{contactInfo.address}</span>
          </div>
        )}
      </div>

      <hr className="border-[#334155] mb-6" />

      {/* Idiomas */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-[#38bdf8] mb-3">Idiomas</h2>
          <div className="space-y-3">
            {languages.map((language, index) => (
              <ProgressBar key={`language-${index}`} label={language.label} percentage={language.percentage} />
            ))}
          </div>
        </div>
      )}

      {languages.length > 0 && <hr className="border-[#334155] mb-6" />}

      {/* Lenguajes de Programación */}
      {programmingLanguages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-[#38bdf8] mb-3">Lenguajes de Programación</h2>
          <div className="space-y-3">
            {programmingLanguages.map((language, index) => (
              <ProgressBar key={`prog-lang-${index}`} label={language.label} percentage={language.percentage} />
            ))}
          </div>
        </div>
      )}

      {programmingLanguages.length > 0 && <hr className="border-[#334155] mb-6" />}

      {/* Habilidades Extra */}
      {extraSkills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-[#38bdf8] mb-3">Habilidades Extra</h2>
          <div className="space-y-3">
            {extraSkills.map((skill, index) => (
              <div key={`extra-skill-${index}`} className="flex items-center gap-2 text-xs text-[#94a3b8]">
                <div className="w-5 h-5 flex items-center justify-center text-[#38bdf8]">
                  {skill.icon}
                </div>
                <span>{skill.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default LeftSidebar;
