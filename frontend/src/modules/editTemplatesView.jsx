import React from "react";

export default function EditTemplateView({getCurrenStep,Next,Prev,IsFirstStep,IsLastStep,NavLinkEditTemplates,StepsCompleted}){

if(getCurrenStep()?.component){
    const Component = getCurrenStep()?.component.step

    return(
        <Component getCurrenStep={getCurrenStep} Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} NavLinkEditTemplates={NavLinkEditTemplates} StepsCompleted={StepsCompleted}/>
        
     )


}
   
}