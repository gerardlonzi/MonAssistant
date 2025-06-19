import React from "react";
import SidebarEditTemplate from "../../ui/components/editTemplateComponent/sidebar";

export default function Experience({getCurrenStep,Next,Prev,IsFirstStep,IsLastStep,NavLinkEditTemplates,StepComplete}){
   

    return(
        <section className="flex">
        <SidebarEditTemplate StepComplete={StepComplete} NavLinkEditTemplates={NavLinkEditTemplates} getcurrentStep={getCurrenStep} />
        <div className="mt-10">
            <button className="bg-green-600 p-4 ml-5" >
                next step
            </button>
        </div>

        </section>
    
     )

   
}