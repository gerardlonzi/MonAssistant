import React from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { Link} from 'react-router-dom'
import useAuthHook from '../../hooks/authHook'
import LoaderPage from '../ui/components/loaderPage'

export default function Creer_Cv() {
  const { isLoadding} = useAuthHook()
  if (isLoadding) return <LoaderPage />
  return (
    <div className="relative" style={{
      backgroundImage: 'url(/imgs/bgcreate.png)',
      backgroundSize:'cover',
      backgroundPosition:"top",
      height:"100vh",
      width:"100%",

    }}>
    <Container>
           <div className='absolute z-50 top-[50%] left-[50%] shadow-xl rounded-4xl -translate-x-[50%] -translate-y-[50%] bg-white py-10 w-[550px] px-16 text-center'>
            <img className='m-auto w-52' src="/imgs/logo.png" alt="logo.png" />
            <p className='my-6  text-4xl font-bold text-[#00275b]'>Un CV parfait en
            <br /> trois étapes</p>
            <div className='text-xl text-[#00275b] space-y-5 '>
              <div className='flex gap-4   items-center'>
                <div className='size-9 flex items-center justify-center bg-blue-400 text-white font-bold rounded-full'>1</div>
                <span>Choisissez un de nos modèles</span>
              </div>
              <div className='flex gap-4  items-center'>
                <div className='size-9 flex items-center justify-center bg-blue-400 text-white font-bold rounded-full'>2</div>
                <span>Utilisez nos contenus pré-rédigés</span>
              </div>
              <div className='flex gap-4   items-center'>
                <div className='size-9 flex items-center justify-center bg-blue-400 text-white font-bold rounded-full'>3</div>
                <span>Téléchargez et envoyez votre CV</span>
              </div>
              
            </div>
            <div>
            <Link className='bg-[#00bf63] transition duration-300 ease-in-out hover:bg-green-700 text-xl font-bold text-white block text-center rounded-full py-3 mt-10' to={"/creer-cv/niveau-de-connaissances"}>Creér un CV</Link>
            </div>
            <p className='mt-5 text-xs text-[#00275b]'>
            En cliquant sur Créer un CV , vous  acceptez nos <br />
            <Link className='text-[#00bf63] font-bold' to={""}> Conditions d'utilisation</Link> et notre<Link className='text-[#00bf63] font-bold' to={""}> Politique de confidentialité.</Link> 
            </p>
           </div>
           
    </Container>
    <div className='w-full h-[100vh] fixed top-0 bg-[#efeee4] opacity-[0.6]  z-1'></div>
    </div>

  
  )
}
