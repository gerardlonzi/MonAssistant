import React from "react";

export default function EditTemplateView({getCurrenStep,Next,Prev,IsFirstStep,IsLastStep,NavLinkEditTemplates,StepComplete}){

if(getCurrenStep()?.component){
    const Component = getCurrenStep().component.step

    return(
        <Component getCurrenStep={getCurrenStep} Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} NavLinkEditTemplates={NavLinkEditTemplates} StepComplete={StepComplete}/>
        
     )


}
   
}