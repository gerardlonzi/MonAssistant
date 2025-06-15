import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react"; // Remplace par ton icône si besoin

const ColorPicker = ({
  colorThemes,
  activeColor,
  setActiveColor,
  setIsClickColor,
  hoverPalette,
  setHoverPalette,
  idPalette,
  setIdPalette,
  gap
}) => {

  return (
    <div className={`flex flex-wrap justify-start gap-${gap} px-5 md:px-0 pt-5 py-9 md:py-0  `}>
      <div
        onClick={() => {
          setActiveColor(null);
          setIsClickColor(true);
        }}
        className="w-[1.6rem] h-[1.6rem] rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
        style={{ backgroundColor: "white" }}
      />

      {/* Dégradé arc-en-ciel */}
      <div
        onClick={() => {
          setActiveColor(null);
          setIsClickColor(true);
        }}
        className="w-[1.6rem] h-[1.6rem] rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
        style={{
          background:
            "conic-gradient(from 50.54deg at 50% 50%, red 0deg, #ff0 72deg, lime 144deg, cyan 190.07deg, blue 261.19deg, #f0f 319.78deg, red 360deg)",
        }}
      />

      {/* Thèmes personnalisés */}
      {colorThemes.map((el) => (
        <div
          key={el.id}
          className="relative group"
          onMouseEnter={() => setIdPalette(el.id)}
          onMouseLeave={() => setIdPalette(null)}
        >
          {idPalette === el.id ? (
            <>
              <div
                className="w-[1.6rem] h-[1.6rem] rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
                style={{ backgroundColor: el.initial }}
              />
              <motion.div
                className="absolute space-y-2 p-1 rounded-full shadow-xl border border-gray-200 bg-white z-10 top-[-2.5rem] left-1/2 -translate-x-1/2"
              >
                {el.derive.map((shade, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoverPalette(shade)}
                    onMouseLeave={() => setHoverPalette(null)}
                    onClick={() => {
                      setActiveColor(shade);
                      setIsClickColor(true);
                    }}
                    className="w-[1.6rem] h-[1.6rem] rounded-full hover:border-black border-2 border-gray-300"
                    style={{ backgroundColor: shade }}
                  >
                    {activeColor === shade && (
                      <Check className="w-4 m-auto text-white" />
                    )}
                  </div>
                ))}
              </motion.div>
            </>
          ) : (
            <div
              className="w-[1.6rem] h-[1.6rem] rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
              style={{ backgroundColor: el.initial }}
            >
              {el.derive.includes(activeColor) && (
                <Check className="w-4 m-auto text-white" />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
