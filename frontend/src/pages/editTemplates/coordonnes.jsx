import React from "react";
import SidebarEditTemplate from "../../ui/components/editTemplateComponent/sidebar";
import CvSelected from "../../ui/components/editTemplateComponent/cvSelected";

export default function Coordonnees({getCurrenStep,Next,Prev,IsFirstStep,IsLastStep,NavLinkEditTemplates,StepsCompleted}){

    return(
        <section className="flex">
        <SidebarEditTemplate StepsCompleted={StepsCompleted} NavLinkEditTemplates={NavLinkEditTemplates} getcurrentStep={getCurrenStep} />
        <div className="px-7 py-9">
            <div>
                <div>
                    <h1 className="text-[30px] font-bold leading-[35px]">Commencez par compléter <br /> vos <span className="text-green-500">Coordonnées</span></h1>
                    <p>indiquer au moins votre nom et un moyen de contact afin que les employeurs puissent vous joindre</p>
                </div>

            <button className="bg-green-600 p-4 ml-5" onClick={Next}>
                next step
            </button>
            </div>
            <div>

            </div>
           
        </div>
           <CvSelected />
        </section>
    
     )

   
}