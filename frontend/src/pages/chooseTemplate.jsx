import { motion } from "framer-motion";
import { useState,useContext } from "react";
import Navbar from "../ui/components/navbar";
import Container from "../ui/components/container"
import { colorThemes } from "../data/ColorTemplateData";
import { AuthContext } from "../../hooks/authHook";
import LoaderPage from '../ui/components/loaderPage'
import { Check } from "lucide-react";
const tabs = ["recommandè", "Nouveau", "Tout"];
import { cvData } from "../data/cv/cvInfos";
import { AllTemplatesArray } from "../data/cv/AllCvTemplateArray";
import useBoolean from '../../hooks/boolean'
import { ZoomIn } from "lucide-react";

export default function ChooseTemplate() {
  const [selected, setSelected] = useState(tabs[0]);
  const [activeColor, setActiveColor] = useState(null);
  const [hoverPalette, setHoverPalette] = useState(null);
  const [iDPalette, SetIdPalette] = useState(null);
  const [isClickColor, SetIsClickColor] = useState(false);
  const { user, isLoadding, IsWebsiteAdmin } = useContext(AuthContext);  
  const {value:usePicture,setValue:setUsePicture}= useBoolean({values:true})
const [primaryColor,setPrimaryColor] = useState(null)
const [myCvData,setMyData] = useState(cvData)

  const handleColorChange = (e) => {
    const color = e.target.value;
    setActiveColor(color);
  };

  if (isLoadding) return <LoaderPage />


  return (
    <>
      <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
      <Container className="mt-36 ">
        <div className="text-center">
          <h1 className="text-[#00275b] text-3xl sm:text-4xl font-bold">Choisissez un modèle pour votre CV</h1>
          <p className="text-gray-600 text-lg mt-2">Vous pouvez toujours changer d'avis et essayer un autre modèle plus tard</p>
        </div>
        <section className="flex w-full sticky bg-white pt-8 pb-10 sm:pt-0  top-16  flex-col flex-col-reverse lg:flex-row justify-center items-center mt-8 md:gap-10 lg:gap-16 gap-4">
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

          <div className="flex flex-wrap justify-center gap-4 fixed pt-5 py-9 md:py-0 bg-[#001230] md:bg-transparent z-100  left-0 right-0 bottom-0 md:static">
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
        </Container>
        <Container className="bg-[#b2e9ff24] py-10 " >

        <section>
        
        <div className="flex justify-center items-center gap-y-10 flex-col m-auto sm:grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {
              AllTemplatesArray.map(template=>{
                const TemplateComponent = template.component
                return (
                  <div key={template.id} className="rounded-xl z-10 group relative hover:outline-2 outline-black overflow-hidden shadow-md w-[17rem] ">
                    <TemplateComponent myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} usePicture={usePicture} size={'md'} />
                    <div className="hidden group-hover:block transition-all">
                       <div className="absolute p-3 bg-purple-400 rounded-full top-3 right-3 ">
                        <ZoomIn strokeWidth={3} />
                        </div>
                        <div className="absolute bottom-5 flex justify-center  w-full">
                        <button className="px-8 py-2 bg-green-500 font-bold text-secondary cursor-pointer rounded-full">utiliser ce template</button>
                        </div>
                    </div>
                    
                  </div>
                )
              })
            }
          </div>


          Se connecter
IL EST CAPABLE - ICC Gospel Choir

Raynold Boudreau
892 k abonnés

S'abonner

37 k


Partager

Enregistrer

6,5 M de vues  il y a 9 ans
ICC GOSPEL CHOIR
La revendication Content ID associée à votre vidéo n'a pas d'impact sur votre chaîne. Il ne s'agit pas d'un avertissement pour atteinte aux droits d'auteur. …
    

7:15
DIVIN AMOUR - Nadège Mbuma - Gael
Raynold Boudreau
1,4 M de vues
•
il y a 7 ans


23:11
Jean Jean : "Il fera", "Saint Esprit" et "Relâche ta gloire"
EMCI TV
1,3 M de vues
•
il y a 2 ans


Mix
Mix - PARFUM - Aimé Nkanu
Aimé Nkanu, Exo, David Ize et bien plus encore
Mise à jour aujourd'hui

8:55
À L'AGNEAU & À TOI LA GLOIRE - Exo
Raynold Boudreau
7,4 M de vues
•
il y a 5 ans


18:50
Même dans le tombeau, Jésus est Seigneur (Guy Christ Israël)
Teddykims
4 M de vues
•
il y a 4 ans


16:49
Jésus Tu es élevé / Ici et maintenant - Athoms Mbuma - EMCI Musique
EMCI Musique
2 M de vues
•
il y a 4 mois




Combien tu est fidèle Jésus//Luc Dumont
💯 REGENERER
662 k vues
•
il y a 3 ans

          
         
        </section>
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
