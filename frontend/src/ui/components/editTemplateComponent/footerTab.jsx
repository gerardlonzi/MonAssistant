import React from "react"
import Button from "../button"

export default function FooterStep({Next,Prev,IsFirstStep,IsLastStep,isLoadding}){

     let footer 

     if(IsFirstStep()){
        footer = <div className="w-full fixed bottom-0 z-20 flex justify-end"><Button className={"px-16 py-3 inline-block"} type={"submit"} onClick={Next} isLoadding={isLoadding} text={"Continuer"} variant={"secondary"}/></div>
        
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