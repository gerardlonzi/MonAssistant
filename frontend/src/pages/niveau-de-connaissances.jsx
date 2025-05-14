import React, { useState } from 'react'
import { niveau_de_connaissance } from '../data/niveau-de-connaissanceData'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import useAuthHook from '../../hooks/authHook'
import LoaderPage from '../ui/components/loaderPage'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { createOrUpdateCv } from '../redux/slices'


export default function Niveau_de_connaissance() {
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const currentCv = useSelector(state => state.cv.currentCv)
    const { user, isLoadding,IsWebsiteAdmin } = useAuthHook()
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
        navigate("/creer-cv/choix-modele")
        return
    }
    return (
        <>
            <Navbar user={user} IsWebsiteAdmin={IsWebsiteAdmin} />
        <Container className='mt-44'>
            <div className='flex items-center flex-col justify-center mt-28 text-[#00275b]'>
                <p className='text-4xl '> Depuis combien de temps travaillez-vous ?</p>
                <p className='text-xl mt-5'>Nous vous recommanderons les modèles correspondant le mieux à votre expérience</p>
           
            <div className='text-lg'>
                <div className='flex items-center mt-10 space-x-10  '>
                {
                    niveau_de_connaissance.map((el, index) =>
                        <button className='px-10 py-5 outline outline-[#00275b] rounded-xl hover:outline-2 hover:outline-green-600 transition-all' key={el.id} onClick={() => handleStep2(el.step2, el.id, el.value)}>{el.niveau}</button>
                    )
                }
                </div>
                <div className='mt-16'>
                        { 
                            selectContent ? <Step2 value={selectContent.value} /> : null
                        }
                </div>
            </div>
            </div>
        </Container>
        </>
    )
}

function Step2({value}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentCv = useSelector(state => state.cv.currentCv)


    function handleStudentChoice(e) {
        const isStudent = e.target.value === "true"
        console.log(isStudent);
        
        dispatch(createOrUpdateCv({
            experience: isStudent? value.IsStudentContent : value.IsNotStudentContent,
        }))
        navigate("/creer-cv/choix-modele")
        
    }   

    return (
        <div className='flex isStud  items-center flex-col justify-center  text-[#00275b]'>
            <p className='text-4xl '>Êtes-vous étudiant(e) ?</p>
            <div className='flex items-center mt-7 space-x-10 '>
            <button className='px-20 py-5 outline outline-[#00275b] rounded-xl hover:outline-2 hover:outline-green-600 rounded-xl' value="true" onClick={handleStudentChoice}>Oui</button><button className=' px-20 py-5 outline outline-[#00275b] rounded-xl hover:outline-2 hover:outline-green-600 rounded-xl' value="false" onClick={handleStudentChoice}>Non</button>
            </div>
        </div>
    )
   
}