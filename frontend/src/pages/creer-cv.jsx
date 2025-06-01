import React from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { Link } from 'react-router-dom'
import useAuthHook from '../../hooks/authHook'
import LoaderPage from '../ui/components/loaderPage'

export default function Creer_Cv() {
  const { isLoadding, user,IsWebsiteAdmin } = useAuthHook()
  if (isLoadding) return <LoaderPage />
  return (
    <>
   
      <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin}/>
    <Container className='mt-44'>
      <section className='mt-20 text-[#00275b]'>
        <h1 className='text-3xl font-semibold text-center mb-14 '>Créez un <span className='text-green-600'>CV gagnant</span>  en quelques minutes</h1>
        <div className='flex items-center justify-center gap-16 mb-16 text-center relative'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center relative '>
              <img className='p-5 bg-[#f0fff5] rounded-lg' src="/svgs/rbd-hiw-template-icon.svg" alt="" />
              <span className='w-10 h-10 bg-[#00275b] absolute -left-5 text-white flex items-center justify-center rounded-full font-bold'>1</span>
            </div>
            <p className='text-xl mt-10'>Choisissez votre modèle conçu par des professionnels</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center relative '>
              <img className='p-5 bg-[#f0fff5] rounded-lg' src="/svgs/rbd-hiw-example-icon.svg" alt="" />
              <span className='w-10 h-10 bg-[#00275b] absolute -left-5 text-white flex items-center justify-center rounded-full font-bold'>2</span>
            </div>
            <p className='text-xl mt-10'>Ajoutez des exemples pré-écrits à chaque section</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center relative '>
              <img className='p-5 bg-[#f0fff5] rounded-lg' src="/svgs/rbd-hiw-download-icon.svg" alt="" />
              <span className='w-10 h-10 bg-[#00275b] absolute -left-5 text-white flex items-center justify-center rounded-full font-bold'>3</span>
            </div>
            <p className='text-xl mt-10'>Téléchargez et commencez à postuler</p>
          </div>
          <div className='text-xl text-black rounded-full flex gap-3 absolute -z-10 top-[67px]'>
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
        <Link className='px-24 font-bold text-xl rounded-full hover:bg-green-500  transition-all py-4 bg-green-400' to={"/creer-cv/niveau-de-connaissances"}>commencer</Link>
        </div>
      </section>


    </Container>
    </>

  )
}
