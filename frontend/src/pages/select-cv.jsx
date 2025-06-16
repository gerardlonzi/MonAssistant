import React,{useContext} from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { AuthContext } from '../../hooks/authHook'
import LoaderPage from '../ui/components/loaderPage'
import Button from '../ui/components/button'

export default function Select_cv() {
    const { user, isLoadding, IsWebsiteAdmin } = useContext(AuthContext);  

    if (isLoadding) return <LoaderPage />

  return (
    <>
      <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
    <Container className='mt-36'>
            <div>
                <h1 className='sm:text-4xl text-3xl font-bold text-center text-secondary'>Comment voulez vous créer votre cv</h1>
                <div className='flex flex-col sm:flex-row justify-center items-center mt-7 sm:mt-16 gap-5'>
                <div className='outline outline-gray-300 rounded-md hover:outline-3 hover:outline-black transition-all w-full sm:w-[35rem] px-10 py-14'>
                    <div></div>
                    <div>
                        <div className='text-lg sm:text-xl font-bold'>Créer un nouveau CV</div>
                        <div className='text-sm mt-[1px]'>Nous aidons a créer un cv étape par étape</div>
                    </div>
                </div>
                <div className='outline outline-gray-300 rounded-md hover:outline-3 hover:outline-black transition-all w-full sm:w-[35rem] px-10 py-14'>
                    <div></div>
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
            </div>
    </Container>
    </>
  )
}
