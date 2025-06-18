import React, { useState } from 'react'
import { navLinkEditTemplateStep } from '../data/navlinkDatas'
import EditTemplateView from './editTemplatesView'


export default function EditTemplateContainer() {
   const [currentStep,setCurrenStep]= useState(1)

   function GetcurrenStep(){

        return navLinkEditTemplateStep.find(el => el.id === currentStep) 

   }

   function Prev(){
    if(currentStep > 1){
        return setCurrenStep(currentStep-1)
    }
   }

   function Next(){
    if(currentStep > navLinkEditTemplateStep.length){
        return setCurrenStep(currentStep+1)
    }
   }

   function IsFirstStep(){
       return currentStep === 1
   }

   function IsLastStep(){
       return currentStep === navLinkEditTemplateStep.length
   }


    return(
        <EditTemplateView  getCurrenStep={GetcurrenStep} Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} NavLinkEditTemplates={navLinkEditTemplateStep}/>
    )

}