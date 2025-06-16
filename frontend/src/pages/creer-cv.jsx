import React,{useContext} from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../hooks/authHook";
import LoaderPage from '../ui/components/loaderPage'
import LinkComponent from '../ui/components/Link';

export default function Creer_Cv() {
  const { user, isLoadding, IsWebsiteAdmin } = useContext(AuthContext);  
  if (isLoadding) return <LoaderPage />
  return (
    <>
   
      <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin}/>
    <Container className='mt-24 sm:mt-44'>
      <section className='mt-20 text-[#00275b]'>
        <h1 className='text-3xl font-semibold text-center mb-5 sm:mb-14 '>Créez un <span className='text-green-600'>CV gagnant</span>  en quelques minutes</h1>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-16 mb-6 sm:mb-16 text-center relative'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center relative '>
              <img className='p-5 bg-[#f0fff5] rounded-lg w-24 sm:w-full' src="/svgs/rbd-hiw-template-icon.svg" alt="cHOISIR_UN_MODELES" />
              <span className='sm:w-10 sm:h-10 h-7 w-7 -left-[1rem] sm:-left-5 bg-[#00275b] absolute -left-5 text-white flex items-center justify-center rounded-full font-bold'>1</span>
            </div>
            <p className='text-xl mt-4 sm:mt-10'>Choisissez votre modèle conçu par des professionnels</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center relative '>
              <img className='p-5 bg-[#f0fff5] rounded-lg w-24 sm:w-full' src="/svgs/rbd-hiw-example-icon.svg" alt="AJOUTER_UN_MODELE_PRECIS" />
              <span className='sm:w-10 sm:h-10 h-7 w-7 -left-[1rem] sm:-left-5 bg-[#00275b] absolute  text-white flex items-center justify-center rounded-full font-bold'>2</span>
            </div>
            <p className='text-xl mt-4 sm:mt-10'>Ajoutez des exemples pré-écrits à chaque section</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center relative '>
              <img className='p-5 bg-[#f0fff5] rounded-lg w-24 sm:w-full' src="/svgs/rbd-hiw-download-icon.svg" alt="telecharger_et_postuler_icon" />
              <span className='sm:w-10 sm:h-10 h-7 w-7 -left-[1rem] sm:-left-5 bg-[#00275b] absolute  text-white flex items-center justify-center rounded-full font-bold'>3</span>
            </div>
            <p className='text-xl mt-4 sm:mt-10'>Téléchargez et commencez à postuler</p>
          </div>
          <div className='text-xl text-black rounded-full flex flex-col sm:flex-row hidden sm:flex gap-3 absolute -z-10 top-[67px]'>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
        </div>
        <div className='flex justify-center'> 
          <LinkComponent className={"px-[5rem]"} to={"/creer-cv/niveau-de-connaissances"} variant={"tercero"} content={"commencer"}/>
        </div>
      </section>


    </Container>
    </>

  )
}
