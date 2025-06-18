import React,{useContext} from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { AuthContext } from '../../hooks/authHook'
import LoaderPage from '../ui/components/loaderPage'
import Button from '../ui/components/button'
import { Link } from 'react-router-dom'

export default function Select_cv() {
    const { user, isLoadding, IsWebsiteAdmin } = useContext(AuthContext);  

    if (isLoadding) return <LoaderPage />

  return (
    <>
      <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
    <Container className='mt-36'>
            <div>
                <h1 className='sm:text-4xl text-3xl font-bold text-center  text-secondary'>Comment voulez vous créer votre cv</h1>
                <div className='flex flex-col sm:flex-row justify-center items-center mt-7 sm:mt-16 gap-5'>
                <div className='outline outline-gray-300 rounded-md hover:outline-3 hover:outline-black transition-all w-full sm:w-[35rem] px-10 py-8 sm:py-14 text-center sm:text-left flex gap-5 flex-col sm:flex-row justify-center items-center'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-plus-icon lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2" /><path color="#00cf5c" d="M8 12h8"/><path d="M12 8v8" color="#00cf5c"/></svg>
                    </div>
                    <div>
                        <div className='text-lg sm:text-xl font-bold'>Créer un nouveau CV</div>
                        <div className='text-sm mt-[1px]'>Nous aidons a créer un cv étape par étape</div>
                    </div>
                </div>
                <div className='outline text-center sm:text-left outline-gray-300 rounded-md hover:outline-3 hover:outline-black transition-all w-full sm:w-[35rem] px-10 py-8 sm:py-14 flex gap-5 flex-col sm:flex-row justify-center items-center'>
                    <div >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"  stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload-icon lucide-upload"><path color="blue" d="M12 3v12"/><path d="m17 8-5-5-5 5" color="blue"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg>
                    </div>
                    <div>
                        <div className='text-lg sm:text-xl font-bold'>J'ai déjà un CV</div>
                        <div className='text-sm mt-[1px]'>Nous reformatons votre cv et remplissons les information </div>
                    </div>
                </div>
                </div>
                <div className='flex gap-5  justify-between mt-16 sm:mt-32 sm:px-16'>
                <Button className={"px-[40px] sm:px-[60px] py-[13px]"} variant={"tercero"} text={"Retour"}  />
                <Button  className={"px-[40px]  sm:px-[60px] py-[13px]"} variant={"secondary"} text={"Continuer"}  />
                </div>
                <Link to={"/creer-cv/edit/crdn"}>edit</Link>
            </div>
    </Container>
    </>
  )
}
