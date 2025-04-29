import { Search } from "lucide-react";
import Container from "../ui/components/container";
import Navbar from "../ui/components/navbar";
import useAuthHook from "../../hooks/authHook";
import LoaderPage from "../ui/components/loaderPage";
import LinkComponent from "../ui/components/Link";
export default function Home() {
  const { isLoadding, user,IsWebsiteAdmin } = useAuthHook()
  if (isLoadding) return <LoaderPage />

  return (
    <>
      <Container>
  
        <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
        <section>
        <div className="flex items-center gap-32 mt-16">
          <div className="">
            <h1 className="text-6xl">Créez votre <br /> CV professionnel en ligne  <br /> gratuitement</h1>
            <div className='text-xl text-[#00275b] space-y-4 mt-12'>
              <div className='flex gap-4   items-center'>
                <div className='size-8 flex items-center justify-center bg-green-600 text-white font-bold rounded-full'>1</div>
                <span>Sélectionnez un CV parmi tous nos modèles professionnels</span>
              </div>
              <div className='flex gap-4  items-center'>
                <div className='size-8 flex items-center justify-center bg-green-600 text-white font-bold rounded-full'>2</div>
                <span>Rédigez votre CV grâce à notre outil d’aide au contenu</span>
              </div>
              <div className='flex gap-4   items-center'>
                <div className='size-8 flex items-center justify-center bg-green-600 text-white font-bold rounded-full'>3</div>
                <span>Téléchargez et envoyez votre CV en ligne</span>
              </div>
            </div>
            <div className="mt-14 text-xl space-x-5">
             <LinkComponent content={"créer un cv"} variant={"secondary"} to={"/creer-cv"} />
             <LinkComponent content={"Améliorer mon cv"} variant={"primary"} to={"/creer-cv"} />
             
            </div>
          </div>
          <div className="relative rounded-br-[20%] w-[380px] overflow-hidden">
            <img src="/imgs/hero-img.png" className="relative -right-14 bk-img1" alt="hero-img" />
            <div className="w-72 bg-green-600 -z-10 rounded-tl-[100px] h-full  absolute bottom-0 right-0 bk-green"></div>
            <div className=" bg-[#00275b] size-[300px] -z-5 rounded-tl-[100px] absolute left-0 bottom-0 bk-black"></div>
          </div>
        </div>
        </section>
        <section>
          <h2>Votre CV en ligne à faire en quelques clics</h2>
          <div>
            <StepCreateCV title={"hello world"} id={1} description={"mu"} img={"jjdk"} />
          </div>
        </section>
      </Container >
    </>
  )
}

function StepCreateCV({img,title,description,id}){
  return(
    <div>
      <img src={img} alt="step-${id}" />
      <div>
         <div>{id}</div>
         <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}