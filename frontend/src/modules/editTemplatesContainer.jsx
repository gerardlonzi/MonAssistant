import React, { useState } from 'react'
import { navLinkEditTemplateStep } from '../data/navlinkDatas'
import EditTemplateView from './editTemplatesView'
import { useNavigate } from 'react-router-dom';

export default function EditTemplateContainer() {
   const [CurrentStep,setCurrenStep]= useState(1)
   const [StepsCompleted,setStepsCompleted]= useState([])
   const navigate = useNavigate();


   function markStepAsCompleted(stepId) {
    setStepsCompleted((prev) => {
      if (!prev.includes(stepId)) {
        return [...prev, stepId];
      }
      return prev;
    });
  }

   function getCurrenStep(){
        return navLinkEditTemplateStep.find(el => el.id === CurrentStep) 

   }

   function Prev(){
    if(CurrentStep > 1){
        const LastStep = CurrentStep-1
        setCurrenStep(LastStep)
        const LastPath = navLinkEditTemplateStep.find(el => el.id === LastStep)?.path;
        if (LastPath) {
          navigate(LastPath);
          return
        }
    }
   }

   function Next(){
    if(CurrentStep < navLinkEditTemplateStep.length){
      markStepAsCompleted(CurrentStep)

        const nextStep = CurrentStep+1
        setCurrenStep(nextStep)
        const nextPath = navLinkEditTemplateStep.find(el => el.id === nextStep)?.path;
        if (nextPath) {
          navigate(nextPath);
          return
        }
    }
   }

   function IsFirstStep(){
       return CurrentStep === 1
   }

   function IsLastStep(){
       return CurrentStep === navLinkEditTemplateStep.length
   }

   
    return(
        <EditTemplateView setCurrenStep={setCurrenStep}  getCurrenStep={getCurrenStep} Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} NavLinkEditTemplates={navLinkEditTemplateStep} StepsCompleted={StepsCompleted}/>
    )

}

