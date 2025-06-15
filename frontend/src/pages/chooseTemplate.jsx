import { motion } from "framer-motion";
import { useState,useContext } from "react";
import Navbar from "../ui/components/navbar";
import Container from "../ui/components/container"
import { colorThemes } from "../data/ColorTemplateData";
import { AuthContext } from "../../hooks/authHook";
import LoaderPage from '../ui/components/loaderPage'
import { Check } from "lucide-react";
import { cvData } from "../data/cv/cvInfos";
import { AllTemplatesArray } from "../data/cv/AllCvTemplateArray";
import useBoolean from '../../hooks/boolean'
import { ZoomIn } from "lucide-react";
import CVCarousel from "../ui/components/CarouselModal";
import ColorPicker from "../ui/components/colorPicker";

const tabs = ["Recommandé", "Nouveau", "Tout"];

export default function ChooseTemplate() {
  const [selected, setSelected] = useState(tabs[0]);
  const [AllTemplatesArrayState, setAllTemplatesArrayState] = useState(AllTemplatesArray);
  const [activeColor, setActiveColor] = useState(null);
  const [hoverPalette, setHoverPalette] = useState(null);
  const [iDPalette, SetIdPalette] = useState(null);
  const [isClickColor, SetIsClickColor] = useState(false);
  const { user, isLoadding, IsWebsiteAdmin } = useContext(AuthContext);  
  const {value:usePicture,setValue:setUsePicture}= useBoolean({values:true})
  const [primaryColor,setPrimaryColor] = useState(null)
  const [myCvData,setMyData] = useState(cvData)

  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTemplateClick = (index) => {
    setSelectedIndex(index);
    setShowCarousel(true);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setActiveColor(color);
  };

  if (isLoadding) return <LoaderPage />


  return (
    <>
      <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
      <Container className="mt-36 relative z-100">
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
          <div className={` fixed bg-[#001230] md:bg-transparent left-0 right-0 bottom-0 md:static`}>
          <ColorPicker gap={4} colorThemes={colorThemes} activeColor={activeColor} setActiveColor={setActiveColor} setIsClickColor={SetIsClickColor} hoverPalette={hoverPalette} setHoverPalette={setHoverPalette} idPalette={iDPalette} setIdPalette={SetIdPalette} />

          </div>

        </section>
        </Container>
        <Container className="bg-[#b2e9ff24] pb-48 pt-10 relative z-10 " >

        <section>
        
        <div className="flex justify-center items-center gap-y-10 flex-col m-auto sm:grid xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative xl:gap-20 md:gap-10 z-10">
            {
              AllTemplatesArrayState.map((template,index)=>{
                const TemplateComponent = template.component
                return (
                  <div key={template.id} className="rounded-xl  group relative  hover:outline-2 outline-black overflow-hidden shadow-md w-[15rem] ">
                    <TemplateComponent myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} usePicture={usePicture} size={'sm'} />
                    <div className="hidden group-hover:block transition-all">
                       <div className="absolute p-3 hover:bg-purple-500 transition-all bg-purple-400 rounded-full top-3 right-3 " onClick={() => handleTemplateClick(index)}>
                        <ZoomIn strokeWidth={3} />
                        </div>
                        <div className="absolute bottom-5 flex justify-center  w-full">
                        <button className="px-8 py-3 hover:bg-green-500 bg-green-400 font-bold text-secondary cursor-pointer rounded-full transition-all">utiliser ce template</button>
                        </div>
                    </div>
                  </div>
                )
              })
            }
         
          </div>

          
         
        </section>
        </Container>
        {showCarousel && (
        <CVCarousel
          activeIndex={selectedIndex}
          onClose={() => setShowCarousel(false)}
          myCvData={myCvData}
        />
      )}
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
