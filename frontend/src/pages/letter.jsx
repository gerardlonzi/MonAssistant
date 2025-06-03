import React from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import LoaderPage from '../ui/components/loaderPage'
import { useState } from 'react'
import { cvData } from '../data/cvInfos'
import useBoolean from '../../hooks/boolean'

export default function Letter() {

const {value:usePicture,setValue:setUsePicture}= useBoolean({values:true})
const [primaryColor,setPrimaryColor] = useState(null)


const [myCvData,setMyData] = useState(cvData)

  return (
    <>
        <Navbar/>
    <Container className='mt-44'>
      <section className='flex w-[55rem]'>
        <section style={{backgroundColor:primaryColor?primaryColor:"#1e2939"}} className='px-8 py-14 text-white w-1/3'>
          {
            usePicture && 
            <div className='w-48 h-48 m-auto mb-3'>
              <img className='rounded-full border-2 border-white' src={myCvData.img} alt="profile picture  " />
            </div>
          }
          <div className='text-center'>
            <p className='text-white font-semibold text-xl'>{myCvData.name}</p>
            <p className='text-blue-400'>{myCvData.profession}</p>
          </div>
          <section>
            <p className='font-bold mt-8'>CONTACT</p>
            <div className='mt-3 space-y-2'>
            {
              myCvData.contact.map((el,index)=>
                <div key={index} className='flex gap-3'><span className='text-blue-400'>{el.icon}</span><span>{el.infos}</span></div>
              )
            }

            </div>
          </section>
          <section>
              <p className='font-bold mt-8'>COMPETENCE</p>
              <ul className='mt-3 list-disc ps-px ms-px me-px ml-4'>
               {
                myCvData.compétences.map((el,index)=>
                <li key={index}>{el}</li>
                )
               }
              </ul>
          </section>
          <section>
              <p className='font-bold mt-8'>HOBBIES</p>
              <ul className='mt-3 list-disc ps-px ms-px me-px ml-4'>
               {
                myCvData.hobbies.map((el,index)=>
                <li key={index}>{el}</li>
                )
               }
              </ul>
          </section>
        </section>
        <section className='w-2/3 pt-20 px-10 flex flex-col'>
          <section>
            <p style={{color:primaryColor?primaryColor:"#1e2939"}} className="font-semibold mb-4">PROFILE</p>
            <p>{myCvData.profile}</p>
            </section>
            <section>
        <p style={{color:primaryColor?primaryColor:"#1e2939"}} className="font-semibold mb-4 mt-8   ">EXPERIENCE</p>
        <p style={{color:primaryColor?primaryColor:"#1e2939"}} className="font-semibold">{myCvData.experience.map((el,index) =>el.poste)}</p>
        <div className="flex justify-between">
          <p><span>{myCvData.experience.map((el,index) =>el.ecole)}</span> in <span>{myCvData.experience.map((el,index) =>el.lieux)}</span></p>
          <p className="space-x-4"><span>{myCvData.experience.map((el,index) =>el.debut)}</span>   <span>{myCvData.experience.map((el,index) =>el.fin)}</span></p>
        </div>
        <ul className="mt-3 list-disc ps-px ms-px me-px ml-4">
          {
            myCvData.experience.map((el,index)=> el.Activites.map((i,n)=><li>{i}</li>)  )
          }
        </ul>
        </section>
        <section>
        <p style={{color:primaryColor?primaryColor:"#1e2939"}} className="font-semibold mb-4 mt-8   ">EDUCATION</p>
        <p style={{color:primaryColor?primaryColor:"#1e2939"}} className="font-semibold">{myCvData.education.map((el,index) =>el.diplome)}</p>
        <p className="space-x-4 mt-2"><span>{myCvData.education.map((el,index) =>el.debut)}</span>   <span>{myCvData.education.map((el,index) =>el.fin)}</span></p>
        <p><span>{myCvData.education.map((el,index) =>el.ecole)}</span> in <span>{myCvData.education.map((el,index) =>el.lieux)}</span></p>
        </section>

        </section>
        
      </section>
    
    </Container>
    </>
  )
}