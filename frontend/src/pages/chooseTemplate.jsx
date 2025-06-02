import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../ui/components/navbar";
import Container from "../ui/components/container"
import { colorThemes } from "../data/ColorTemplateData";
import useAuthHook from '../../hooks/authHook'
import LoaderPage from '../ui/components/loaderPage'
import { Check } from "lucide-react";
import ColorPicker from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';
const tabs = ["recommandè", "Nouveau", "Tout"];

export default function ChooseTemplate() {
  const [selected, setSelected] = useState(tabs[0]);
  const [activeColor, setActiveColor] = useState(null);
  const [hoverPalette, setHoverPalette] = useState(null);
  const [iDPalette, SetIdPalette] = useState(null);
  const [isClickColor, SetIsClickColor] = useState(false);
  const { isLoadding, user, IsWebsiteAdmin } = useAuthHook()

  const handleColorChange = (e) => {
    const color = e.target.value;
    setActiveColor(color);
  };

  if (isLoadding) return <LoaderPage />


  return (
    <>
      <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
      <Container className="mt-36">
        <div className="text-center">
          <h1 className="text-[#00275b] text-3xl sm:text-4xl font-bold">Choisissez un modèle pour votre CV</h1>
          <p className="text-gray-600 text-lg mt-2">Vous pouvez toujours changer d'avis et essayer un autre modèle plus tard</p>
        </div>
        <section className="flex sticky bg-white pt-8 sm:pt-0  top-16  flex-col flex-col-reverse sm:flex-row justify-center items-center mt-8 sm:gap-24 gap-4">
          <div className="flex  gap-2 justify-center wrap-anywhere  relative">
            {tabs.map((tab) => (
              <>
                <Chip
                  text={tab}
                  selected={selected === tab}
                  setSelected={setSelected}
                  key={tab}
                />
                <div className="w-72 border-b border-b-2 absolute border-b-slate-200 bottom-0 -z-1"></div>
              </>
            ))}
          </div>

          <div className="flex justify-center gap-4 ">
            <div
            onClick={() => {
              setActiveColor(null)
              SetIsClickColor(true)
            }}
              className="w-[1.6rem] h-[1.6rem]  rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
              style={{ backgroundColor: "white" }}
            > </div>
            <div
            onClick={() => {
              setActiveColor(null)
              SetIsClickColor(true)
            }}
              className="w-[1.6rem] h-[1.6rem]  rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
              style={{ background: "conic-gradient(from 50.54deg at 50% 50%, red 0deg, #ff0 72deg, lime 144deg, cyan 190.07deg, blue 261.19deg, #f0f 319.78deg, red 360deg)"}}
            > </div>
            {colorThemes.map((el, id) => (
              <div
                key={id}
                className="relative group"
                onMouseEnter={() => SetIdPalette(el.id)}
                onMouseLeave={() => SetIdPalette(null)}
              >

                {iDPalette === el.id ? <>
                  <div
                    className="w-[1.6rem] h-[1.6rem]  rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
                    style={{ backgroundColor: el.initial }}
                  > </div>
                  <motion.div

                    className="absolute space-y-2 p-1  rounded-full shadow-xl border border-gray-200 bg-white z-10 top-[-2.5rem] left-1/2 -translate-x-1/2"
                  >
                    {el.derive.map((shade, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoverPalette(shade)}
                        onMouseLeave={() => setHoverPalette(null)}
                        onClick={() => {
                          
                          setActiveColor(shade)
                          SetIsClickColor(true)
                        }}
                        className="w-[1.6rem] h-[1.6rem] rounded-full hover:border-black border-2 border-gray-300"
                        style={{ backgroundColor: shade }}
                      >
                        {
                          activeColor === shade && <Check className="w-4 m-auto text-white" />
                        }
                      </div>
                    ))}
                  </motion.div>
                </> : <div
                  className="w-[1.6rem] h-[1.6rem] wrap-anywhere   rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
                  style={{ backgroundColor: el.initial }}
                >
                  {
                    el.derive.includes(activeColor) && <Check className="w-4 m-auto text-white" />
                  }
                </div>
                }
              </div>
            ))}
          </div>
        </section>
        <div style={{
          padding: "100px",
          backgroundColor: hoverPalette ? hoverPalette : activeColor

        }}>

        </div>
        {/* <ColorPicker onClick={()=>handleColorChange} /> */}
        <div className="flex">
    <div className="w-1/3 bg-[#E5F1F9] p-4 space-y-6">
      <div>
        <h3 className="text-lg font-semibold border-b border-[#3497D3] pb-1 mb-2">À PROPOS</h3>
        <p>
          Passionné par les technologies web, je conçois des sites et applications modernes,
          performants et responsives. Curieux, rigoureux et toujours en quête d’apprentissage.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold border-b border-[#3497D3] pb-1 mb-2">COMPÉTENCES</h3>
        <ul className="list-disc list-inside">
          <li>HTML / CSS / JavaScript</li>
          <li>React / Node.js</li>
          <li>MongoDB / Express.js</li>
          <li>Git & GitHub</li>
          <li>Responsive design</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold border-b border-[#3497D3] pb-1 mb-2">CONTACT</h3>
        <p>Email: jeanpaul@example.com</p>
        <p>Téléphone: +33 6 00 00 00 00</p>
        <p>Adresse: Paris, France</p>
      </div>
    </div>

    <div className="w-2/3 p-6 space-y-6">
      <div>
        <h3 className="text-xl font-bold border-b border-[#3497D3] pb-1 mb-4">EXPÉRIENCE PROFESSIONNELLE</h3>

        <div className="mb-4">
          <h4 className="font-semibold">Développeur Frontend – WebAgency</h4>
          <p className="text-sm text-gray-600">Janvier 2022 – Présent</p>
          <ul className="list-disc list-inside mt-1">
            <li>Développement d’interfaces web réactives avec React.</li>
            <li>Intégration des maquettes Figma et gestion des bugs UI.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Développeur Fullstack – StartupTech</h4>
          <p className="text-sm text-gray-600">Juin 2020 – Décembre 2021</p>
          <ul className="list-disc list-inside mt-1">
            <li>Création d’API REST avec Node.js & MongoDB.</li>
            <li>Déploiement sur Heroku et automatisation CI/CD.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold border-b border-[#3497D3] pb-1 mb-4">FORMATION</h3>

        <div className="mb-3">
          <h4 className="font-semibold">Licence Informatique – Université de Lyon</h4>
          <p className="text-sm text-gray-600">2017 – 2020</p>
        </div>

        <div>
          <h4 className="font-semibold">BTS SIO – Lycée Technique</h4>
          <p className="text-sm text-gray-600">2015 – 2017</p>
        </div>
      </div>
    </div>
  </div>

      </Container>
    </>
  );
};



const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${selected
        ? "text-green-600"
        : "text-gray-600 "
        } text-lg transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 border-b-2 border-b border-green-600"
        ></motion.span>
      )}
    </button>
  );
};
