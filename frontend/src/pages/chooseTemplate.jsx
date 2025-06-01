import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../ui/components/navbar";
import Container from "../ui/components/container"
import { colorThemes } from "../data/ColorTemplateData";
import useAuthHook from '../../hooks/authHook'
import LoaderPage from '../ui/components/loaderPage'

const tabs = ["recommandè", "Nouveau", "Tout"];

export default function ChooseTemplate(){
  const [selected, setSelected] = useState(tabs[0]);
  const [activeColor, setActiveColor] = useState(null);
  const [hoverPalette, setHoverPalette] = useState(null);
  const [iDPalette, SetIdPalette] = useState(null);
  const { isLoadding, user,IsWebsiteAdmin } = useAuthHook()

  if (isLoadding) return <LoaderPage />
  

  return (
    <>
        <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin}/>
        <Container className="mt-36">
      <div className="text-center">
        <h1 className="text-[#00275b] text-4xl font-bold">Choisissez un modèle pour votre CV</h1>
        <p className="text-gray-600 text-lg mt-2">Vous pouvez toujours changer d'avis et essayer un autre modèle plus tard</p>
      </div>
      <section className="flex justify-center items-center mt-8 gap-24">
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
        {colorThemes.map((el,id )=> (
          <div
            key={id}
            className="relative group"
            onMouseEnter={() => SetIdPalette(el.id)}
            onMouseLeave={() => SetIdPalette(null)}
          >
           
            {iDPalette === el.id ? <>
               <div
               className="w-[1.6rem] h-[1.6rem] -z-3 rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
               style={{ backgroundColor: el.initial }}
             ></div>
              <motion.div
                
                className="absolute space-y-2 p-1  rounded-full shadow-xl border border-gray-200 bg-white z-10 top-[-2.5rem] left-1/2 -translate-x-1/2"
              >
                {el.derive.map((shade, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoverPalette(shade)}
                    onMouseLeave={() => setHoverPalette(null)}
                    onClick={() => setActiveColor(el.initial)}
                    className="w-[1.6rem] h-[1.6rem] rounded-full hover:border-black border-2 border-gray-300"
                    style={{ backgroundColor: shade }}
                  ></div>
                ))}
              </motion.div>
              </> :<div
               className="w-[1.6rem] h-[1.6rem]  rounded-full cursor-pointer hover:border-black border-2 border-gray-300"
               style={{ backgroundColor: el.initial }}
             ></div>
            }
          </div>
        ))}
      </div>
      </section>
      <div style={{
        padding:"100px",
        backgroundColor: hoverPalette && !activeColor && hoverPalette

      }}>

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
      className={`${
        selected
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
