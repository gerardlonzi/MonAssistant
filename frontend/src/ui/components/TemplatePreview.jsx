
import React from 'react';

export default function TemplatePreview({ html }) {
  if (!html) return null;

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow-inner">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Aperçu du modèle :</h2>
      <div
        className="border p-6 rounded overflow-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}