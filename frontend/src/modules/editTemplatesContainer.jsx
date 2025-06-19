import React, { useState } from 'react'
import { navLinkEditTemplateStep } from '../data/navlinkDatas'
import EditTemplateView from './editTemplatesView'
import { Navigate } from 'react-router-dom'


export default function EditTemplateContainer() {
   const [currentStep,setCurrenStep]= useState(1)
   const [StepCompleted,setStepCompleted]= useState(false)

   function GetcurrenStep(){
        return navLinkEditTemplateStep.find(el => el.id === currentStep) 

   }

   function Prev(){
    if(currentStep > 1){
        return setCurrenStep(currentStep-1)
    }
   }

   function Next(){
    if(currentStep < navLinkEditTemplateStep.length){
        setCurrenStep(currentStep+1)
        return <Navigate to={`${GetcurrenStep()?.path}`} />
    }
   }

   function IsFirstStep(){
       return currentStep === 1
   }

   function IsLastStep(){
       return currentStep === navLinkEditTemplateStep.length
   }

   
    return(
        <EditTemplateView  getCurrenStep={GetcurrenStep} Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} NavLinkEditTemplates={navLinkEditTemplateStep} StepComplete={StepCompleted}/>
    )

}

