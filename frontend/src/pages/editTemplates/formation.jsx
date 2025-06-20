import React from "react";
import SidebarEditTemplate from "../../ui/components/editTemplateComponent/sidebar";

export default function Formation({getCurrenStep,Next,Prev,IsFirstStep,IsLastStep,NavLinkEditTemplates,StepsCompleted,setCurrenStep}){

    return(
        <section className="flex">
        <SidebarEditTemplate StepsCompleted={StepsCompleted} NavLinkEditTemplates={NavLinkEditTemplates} getCurrentStep={getCurrenStep} setCurrenStep={setCurrenStep}/>
        <div className="px-7 py-9">
            

            <button className="bg-green-600 p-4 ml-5" onClick={Next}>
                next step
            </button>
            </div>
            <div>

           
        </div>
        </section>
    
     )

   
}