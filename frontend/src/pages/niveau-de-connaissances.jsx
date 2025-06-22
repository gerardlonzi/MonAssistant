import React, { useState,useContext } from 'react'
import { niveau_de_connaissance } from '../data/niveau-de-connaissanceData'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import { AuthContext } from "../../hooks/authHook";
import LoaderPage from '../ui/components/loaderPage'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { createOrUpdateCv } from '../redux/slices'
import clsx from 'clsx'
import {X} from "lucide-react"



export default function Niveau_de_connaissance() {
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const currentCv = useSelector(state => state.cv.currentCv)
  const { user, isLoadding, IsWebsiteAdmin } = useContext(AuthContext);  
    let [selectContent, setselectContent] = useState(null)


    if (isLoadding) return <LoaderPage />


    function handleStep2(step2, id, value) {
        if (step2) {
            setselectContent({ id, value})
            return
        }
        dispatch(createOrUpdateCv({
            experience: value,
        }))
        navigate("/creer-cv/choisir-un-template")
        return
    }
    return (
        <>
            <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
        <Container className='mt-20 sm:mt-44 relative '>
            <div className='flex items-center flex-col justify-center mt-28 text-[#00275b]'>
                <p className='sm:text-4xl text-3xl'> Depuis combien de temps travaillez-vous ?</p>
                <p className='text-xl mt-5'>Nous vous recommanderons les modèles correspondant le mieux à votre expérience</p>
           
            <div className='text-lg w-full '>
                <div className=' flex flex-col sm:flex-row flex-wrap gap-6  items-center mt-10 sm:gap-10  '>
                {
                    niveau_de_connaissance.map((el, index) =>
                       <>
                        <button   className={clsx('block grow w-full sm:w-52 px-8 py-5 outline outline-[#00275b] rounded-xl hover:outline-2 focus:outline-green-600 hover:outline-green-600 transition-all')} key={el.id} onClick={() => handleStep2(el.step2, el.id, el.value)}>{el.niveau} </button>
                       
                      </>  
                    )
                }
                </div>
                        { selectContent ?
                <div className='mt-16 '>
                             <Step2 setselectContent={setselectContent} value={selectContent.value} />
                </div>  : null
                        }
            </div>
            </div>
        </Container>
        </>
    )
}

function Step2({value,setselectContent}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentCv = useSelector(state => state.cv.currentCv)


    function handleStudentChoice(e) {
        const isStudent = e.target.value === "true"
        console.log(isStudent);
        
        dispatch(createOrUpdateCv({
            experience: isStudent? value.IsStudentContent : value.IsNotStudentContent,
        }))
        navigate("/creer-cv/choisir-un-template")
        
    }   

    return (
        <div className='flex isStud inset-shadow-xs inset-shadow-gray-300 sm:inset-shadow-none py-4 sm:py-0 rounded-r-2xl rounded-l-2xl sm:mb-10 absolute bg-white left-0 right-0 bottom-0 sm:static  items-center flex-col justify-center  text-[#00275b]'>
            <div className="flex justify-end w-full mr-4 " onClick={()=>setselectContent(false)}>
            <X  className="text-right w-5"/>

            </div>
            <p className='sm:text-4xl text-3xl'>Êtes-vous étudiant(e) ?</p>
            <div className='flex items-center mt-7 sm:space-x-10 space-x-4'>
            <button className='sm:px-20 px-14 py-3 sm:py-5 outline outline-[#00275b] rounded-xl hover:outline-2 hover:outline-green-600 rounded-xl' value="true" onClick={handleStudentChoice}>Oui</button><button className=' sm:px-20 px-14 py-3 sm:py-5 outline outline-[#00275b] rounded-xl hover:outline-2 hover:outline-green-600 rounded-xl' value="false" onClick={handleStudentChoice}>Non</button>
            </div>
        </div>
    )
   
}