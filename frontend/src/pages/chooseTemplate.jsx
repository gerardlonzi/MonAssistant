import { motion } from "framer-motion";
import { useState,useContext } from "react";
import Navbar from "../ui/components/navbar";
import Container from "../ui/components/container"
import { colorThemes } from "../data/ColorTemplateData";
import { AuthContext } from "../../hooks/authHook";
import LoaderPage from '../ui/components/loaderPage'
import { Check } from "lucide-react";
const tabs = ["recommandè", "Nouveau", "Tout"];
import { cvData } from '../data/cvInfos'
import { CvTemplate } from '../data/cvTemplate'
import useBoolean from '../../hooks/boolean'

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

          <div className="flex flex-wrap justify-center gap-4 fixed pt-5 py-9 md:py-0 bg-[#001230] md:bg-transparent left-0 right-0 bottom-0 md:static">
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
        <Container className="bg-[#b2e9ff24] py-10" >

        <section>
        
        <div className="flex justify-center items-center gap-y-10 flex-col m-auto sm:grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 ">
          <div className="rounded-xl overflow-hidden shadow-md w-[17rem]">
          <CvTemplate myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} usePicture={usePicture} size={'md'}/>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md w-[17rem]">
          <CvTemplate myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} usePicture={usePicture} size={'md'}/>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md w-[17rem]">
          <CvTemplate myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} usePicture={usePicture} size={'md'}/>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md w-[17rem]">
          <CvTemplate myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} usePicture={usePicture} size={'md'}/>
          </div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ad voluptatum numquam deserunt repudiandae consequuntur animi aliquam est optio provident, iusto dolores tempore quaerat necessitatibus nisi temporibus, non aperiam distinctio.
          Earum nesciunt tenetur dolores quo itaque. Aliquid, repellat sed, et similique officiis reprehenderit enim odio reiciendis ex omnis, blanditiis nemo! Tempora, illo natus! A dolorum aut id enim reiciendis est?
          Aut animi totam adipisci culpa vero magni ad fugit esse, nesciunt recusandae! Doloribus iure ipsam libero sit, cum incidunt. Facilis sed rerum aliquam, aperiam sit impedit cumque delectus voluptatem. Fugit.
          Illum excepturi aspernatur rerum, ad dolor maxime quam ipsum laborum nisi temporibus blanditiis quo quasi praesentium. Cupiditate repellat at beatae asperiores dolore! Blanditiis a molestias nostrum? Quasi fugit ipsa suscipit!
          Culpa consequatur aut officiis ut debitis dicta voluptatibus et, error ipsum incidunt dolorum, laudantium sint exercitationem perspiciatis aliquid assumenda deserunt aliquam? Possimus, libero esse? Officia consequuntur reprehenderit necessitatibus fugit distinctio.
          Rerum quis labore tempora eveniet obcaecati tempore modi, sed at vitae officiis autem, qui asperiores laborum! Voluptas inventore voluptatum voluptatibus quod nisi asperiores, unde, quia porro, fugiat doloremque recusandae iure.
          Esse iste ad voluptates, maxime ipsa iure earum vitae itaque, nesciunt, aliquam nobis quaerat deserunt sequi nostrum. Blanditiis, quibusdam at minus voluptatem ea tenetur totam neque. Eos reiciendis praesentium at.
          Consequuntur laboriosam voluptatem autem voluptate nobis cupiditate pariatur saepe vel neque impedit officiis veritatis dolores cum esse earum eligendi laudantium, culpa soluta ad sed nisi temporibus aspernatur. Ducimus, nam perspiciatis.
          Cum, porro. Quidem ab rerum amet deleniti laudantium molestiae provident maiores fuga a vero ex deserunt eveniet, maxime nobis iusto sit adipisci ipsam! Voluptates consequuntur quas nulla inventore illum similique!
          Recusandae, molestiae? Iste ab vero eaque quasi cupiditate laborum qui, nam eum quisquam, nisi corrupti magnam magni maiores quam quod sit deserunt quae eligendi, aliquid ex cum! Ipsam, deserunt quos.
          Sint hic at voluptate commodi similique, deserunt officia cum totam velit aperiam unde labore explicabo error obcaecati ratione doloremque iste quos iure doloribus repudiandae dolore dolor voluptatibus cupiditate necessitatibus? Tempore!
          Sequi modi amet iste rem beatae facilis illum necessitatibus ducimus temporibus commodi nemo maiores placeat neque fugit dolor eius recusandae quas, earum dolore mollitia, labore est qui optio? Voluptatibus, debitis!
          Excepturi quisquam sapiente sed eaque vel cupiditate facere omnis, iure dolor quibusdam unde atque eligendi eos quam, similique commodi. Perspiciatis eos sint eum corrupti temporibus quos a, eligendi ipsam et.
          Nulla eos praesentium labore, vel voluptate doloremque maiores rerum qui dolorum, quis reiciendis totam repellat laudantium velit necessitatibus similique eius laboriosam ipsum atque veritatis dicta iure quisquam nam? Dicta, quaerat!
          Dignissimos eum rem facere quam officiis blanditiis, eos deserunt ipsum in? Nisi, iste. Quaerat voluptates voluptas cupiditate eligendi, at totam, ea facilis veritatis eveniet quisquam maxime provident unde doloremque rerum.
          Quidem repellat inventore quae cumque iure nulla nostrum repudiandae totam temporibus est corrupti, eveniet repellendus dignissimos magnam fuga tempore magni ipsa aliquid saepe. Quibusdam, placeat officiis minus consequuntur expedita deserunt?
          Iusto ex dolor perferendis, quod at adipisci mollitia, ut distinctio, error delectus vero illum a quaerat officiis. Autem, quae nulla harum qui laudantium accusantium iusto at, praesentium similique, dignissimos ut.
          Aperiam tempore accusantium, quae officiis reiciendis et doloribus beatae tempora culpa nihil numquam commodi dolorum maxime eaque temporibus, alias sapiente sequi illo? Beatae itaque perspiciatis debitis ab accusamus animi iste!
          Expedita quibusdam rem, delectus eos totam hic facere doloremque repellendus harum quasi voluptate aperiam veniam error optio quaerat ipsa, deserunt, veritatis impedit possimus. Nihil temporibus sint suscipit soluta et eius?
          Ex sapiente rerum sit illum minus laboriosam adipisci eius explicabo, provident quos quidem cupiditate dignissimos porro excepturi quas numquam rem iusto nihil. Similique nesciunt, ab distinctio voluptatum omnis recusandae voluptatem.
        </div>
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
