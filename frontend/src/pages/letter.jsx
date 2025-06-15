import React, { useContext } from 'react'
import Container from '../ui/components/container'
import Navbar from '../ui/components/navbar'
import LoaderPage from '../ui/components/loaderPage'
import { useState } from 'react'
import { cvData } from '../data/cv/cvInfos'
import useBoolean from '../../hooks/boolean'
import { div } from 'motion/react-client'

export default function Letter() {

  const { value: usePicture, setValue: setUsePicture } = useBoolean({ values: true })
  const [primaryColor, setPrimaryColor] = useState(null)


  const [myCvData, setMyData] = useState(cvData)

  return (
    <>
      <Navbar />
      <Container className='mt-44 bg-gray-200'>
        <section className='flex w-[55rem]'>
          <section style={{ backgroundColor: primaryColor ? primaryColor : "#08084d" }} className='px-8 py-10 text-white w-[20rem]'>
            <section>
              {
                usePicture &&
                <div className='w-56 h-56 m-auto mb-3'>
                  <img className='  object-cover h-full w-full' src="/imgs/mirabel.jpg" alt="profile picture  " />
                </div>
              }
            </section>
            <section>
              <p className='font-bold text-[22px] mt-8'>INFORMATIONS</p>
              <div className='mt-5 space-y-1 text-gray-300'>
                {
                  myCvData.contact.map((el, index) =>
                    <div key={index} ><span>{el.infos}</span></div>
                  )
                }
              </div>
            </section>
            <hr className='mt-7'/>
            <section>
              <p className='font-bold text-xl mt-8'>COMPÉTENCES</p>
              <ul className='list-disc mt-5 space-y-1 text-gray-300 ml-4'>
                {
                  myCvData.compétences.map((el, index) =>
                    <li key={index}>{el}</li>
                  )
                }
              </ul>
            </section>
            <hr className='mt-7'/>
            <section>
              <p className='font-bold text-xl mt-8'>LANGUE(S)</p>
              <div className='mt-5 space-y-1 text-gray-300'>
                {
                  myCvData.languages.map((el, index) =>
                    <p key={index}>{el}</p>
                  )
                }
              </div>
            </section>
            <hr className='mt-7'/>
            <section>
              <p className='font-bold text-xl mt-8'>INTERÊTS</p>
              <div className='mt-5 space-y-1 text-gray-300'>
                {
                  myCvData.hobbies.map((el, index) =>
                    <p key={index}>{el}</p>
                  )
                }
              </div>
            </section>
          </section>
          <section className=' pt-20 bg-white px-10 flex flex-col'>
            <section>
              <p className='text-[#08084d] font-semibold text-[60px]'>{myCvData.name}</p>
              <p className='text-[26px] mt-3 uppercase text-[#08084d]'>{myCvData.profession}</p>
              <p className='mt-3'>{myCvData.profile}</p>
            </section>
           
            <section>
              <p style={{ color: primaryColor ? primaryColor : "#08084d" }} className="font-bold text-xl mt-8">EXPÉRIENCES PROFESSIONNELLES</p>
              <div>{myCvData.experience.map((el, index) => 
              <div>
                <p className="font-bold text-lg mt-3 flex items-center gap-[8px]"><div className='size-4 bg-[#08084d] rounded-full'></div><span>{el.poste} á Douala</span> </p>
                <div className="flex justify-between flex-col ml-3">
                <p className=" uppercase text-sm mt-1"><span>{el.debut}</span> - <span>{el.fin}</span></p>
                <ul className="mt-1 list-disc  ml-4">
                  {
                     el.Activites.map((i, n) => <li key={n}>{i}</li>)
                  }
                </ul>
              </div>
              </div>
                )} 
              </div>
              
            </section>
            <section>
            <p style={{ color: primaryColor ? primaryColor : "#08084d" }} className="font-bold text-xl mt-8">FORMATIONS</p>
              
            <div>{myCvData.formation.map((el, index) => 
              <div>
                <p className="font-bold text-lg mt-3 flex items-center gap-[8px]"><div className='size-4 bg-[#08084d] rounded-full'></div><span>{el.diplome}</span> </p>
                <div className="flex justify-between flex-col ml-3">
                <p className=" uppercase text-sm mt-1"><span>{el.debut}</span> - <span>{el.fin}</span></p>
                <p className="mt-1 ">
                  {el.ecole} á  {el.lieux}
                </p>
              </div>
              </div>
                )} 
              </div>
            </section>
            <section>
            <p style={{ color: primaryColor ? primaryColor : "#08084d" }} className="font-bold text-xl mt-8">EDUCATION</p>
              
            <div>{myCvData.education.map((el, index) => 
              <div>
                <p className="font-bold text-lg mt-3 flex items-center gap-[8px]"><div className='size-4 bg-[#08084d] rounded-full'></div><span>{el.diplome}</span> </p>
                <div className="flex justify-between flex-col ml-3">
                <p className=" uppercase text-sm mt-1"><span>{el.debut}</span> - <span>{el.fin}</span></p>
                <p className="mt-1">
                  {el.ecole} á  {el.lieux}
                </p>
              </div>
              </div>
                )} 
              </div>
            </section>

          </section>

        </section>

      </Container>
    </>
  )
}