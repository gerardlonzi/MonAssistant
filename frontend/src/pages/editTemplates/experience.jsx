import React from "react";
import SidebarEditTemplate from "../../ui/components/editTemplateComponent/sidebar";
import FooterStep from "../../ui/components/editTemplateComponent/footerTab";


export default function Experience({getCurrenStep,Next,Prev,IsFirstStep,IsLastStep,NavLinkEditTemplates,StepsCompleted,setCurrenStep}){

    return(
        <section className="flex">
        <SidebarEditTemplate StepsCompleted={StepsCompleted} NavLinkEditTemplates={NavLinkEditTemplates} getCurrentStep={getCurrenStep} setCurrenStep={setCurrenStep} />
        <div className="px-7 py-9">
            

        <FooterStep Next={Next} Prev={Prev} IsFirstStep={IsFirstStep} IsLastStep={IsLastStep} isLoadding={false}/>

           
           
        </div>
        </section>
    
     )

   
}