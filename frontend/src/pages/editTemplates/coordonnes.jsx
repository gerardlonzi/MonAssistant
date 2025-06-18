import React from "react";
import SidebarEditTemplate from "../../ui/components/editTemplateComponent/sidebar";

export default function Coordonnees({getCurrenStep,Next,Prev,IsFirstStep,IsLastStep,NavLinkEditTemplates,StepComplete}){


    return(
        <SidebarEditTemplate StepComplete={StepComplete} NavLinkEditTemplates={NavLinkEditTemplates} getcurrentStep={getCurrenStep} />
     )

   
}