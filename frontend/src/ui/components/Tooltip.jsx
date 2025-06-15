import React from 'react';

const Tooltip = () => {
  return (
    <div className="relative inline-block group">
      <button className="text-green-600 flex">
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-4 h-4">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
          </svg>
      </button>
      <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 -bottom-[1.7rem] left-1/2 -translate-y-1/2 ml-5 w-60 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 shadow_ rounded-md">
        <div className="relative p-4 bg-white to-gray-800/95  rounded-2xl border border-white/20 ">
         <p>Nos modèles peuvent permettre à votre CV de passer les systèmes de suivi et d’arriver entre les mains d’un recruteur</p>
          
          <div className="absolute  left-0 top-1/2 -translate-x-1/2 w-3 h-3 bg-white shadow-4xl rotate-45 border-r border-b border-white/10" />
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
