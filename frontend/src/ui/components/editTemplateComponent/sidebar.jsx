import React, { Children, useMemo, useState } from "react";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AllTemplatesArray } from "../../../data/cv/AllCvTemplateArray";

export default function SidebarEditTemplate({children, NavLinkEditTemplates, getCurrentStep, StepsCompleted, setCurrenStep, isShowTemplateSelected,emptycvData }) {

  const currentCv = useSelector(state => state.cv?.currentCv) || null

  const currentCVSave = useMemo(() => {
    return currentCv
  }, [currentCv])

  let Cv;
  if (currentCVSave) {
    Cv = AllTemplatesArray.find(el => el.id === currentCVSave?.TemplateId)?.component || ""
  }

  return (
    <section className="flex relative h-[100vh] overflow-hidden">
      <aside className="bg-[#000e38] w-[16rem] py-8 h-full">
        <div className="flex items-center flex-col">
          <Link to={"/"}> <img className='w-36' src="/imgs/logo.png" alt="logo" /></Link>
          <div className="mt-10 w-full m-auto space-y-1">
            {
              NavLinkEditTemplates?.map((el) => {
                const isActive = el.id === getCurrentStep()?.id;
                const isCompleted = StepsCompleted?.includes(el.id);
                return isActive ?
                  <button key={el.id} className=" bg-[#0040e2]  text-white relative flex px-10  text-[15px] font-semibold hover:bg-transparent  py-4 items-center gap-3 w-full  transition-all">
                    <div className="text-green-400">{el.icon}</div>
                    <div>{el.name}</div>
                    {
                      isActive && <div className="absolute w-1 h-full -right-1 bg-green-400"></div>

                    }
                  </button>
                  :
                  isCompleted ? <button onClick={() => setCurrenStep(el.id)} key={el.id} className=" bg-transparent  text-white relative flex px-10  text-[15px] font-semibold hover:bg-transparent  py-4 items-center gap-3 w-full  transition-all">
                    <div className="text-green-400">{el.icon}</div>
                    <div>{el.name}</div>

                  </button> :
                    <div key={el.id} className="text-gray-400 flex px-10  text-[15px] font-semibold  py-4 items-center gap-3 w-full ">
                      <div>{el.icon}</div>
                      <div>{el.name}</div>
                    </div>
              }
              )
            }
          </div>
        </div>
      </aside>
      <div className="sticky top-0 overflow-auto w-full">
      {
        children
      }
      </div>
      
      {
        isShowTemplateSelected && (
           <aside className="w-[31vw] bg-[#a2e4ff52] px-7 h-full py-9 ">
            {Cv ?<div className="shadow_"><Cv myCvData={emptycvData} activeColor={currentCVSave.activeColor} hoverPalette={null} usePicture={true} size={'lg'}/></div>: "Veuillez séléctionner un template"}
            </aside>  
        )
      }
    </section>

  )

}