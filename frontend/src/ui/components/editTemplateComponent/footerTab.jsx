import React from "react"
import Button from "../button"

export default function FooterStep({Next,Prev,IsFirstStep,IsLastStep,isLoadding}){

     let footer 

     if(IsFirstStep()){
        footer = <div className="w-full bg-white sticky bottom-0 left-0 py-4 z-50 mt-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-end"><Button className={"px-16 py-3 inline-block"} type={"submit"} onClick={Next} isLoadding={isLoadding} text={"Continuer"} variant={"secondary"}/></div>
        
     }
     if(IsLastStep()){
        footer = <div className="w-full flex justify-end"
        ><Button className={"px-16 py-3"}  text={"Telecharger le cv"} variant={"secondary"}/></div>
        
     }
     if(!IsFirstStep() && !IsLastStep()){
        footer = <div className="flex items-center justify-between">
            <Button className={"px-16 py-3"}  onClick={Prev}  text={"Retour"} variant={"tercero"}/>
            <Button className={"px-16 py-3"} type={"submit"} onClick={Next} isLoadding={isLoadding} text={"Continuer"} variant={"secondary"}/>
        </div>
     }

    return (
        
            footer
        
    )

}