import React,{useMemo} from "react";
import { useSelector } from "react-redux";
import { AllTemplatesArray } from "../../../data/cv/AllCvTemplateArray";

export default function CvSelected(){
    const currentCv = useSelector(state => state.cv.currentCv)

    const currentCVSave = useMemo(()=>{
         return currentCv
    },[currentCv])
console.log(currentCVSave);

// TemplateId
// : 
// "f41d2f11-971d-4dfe-9940-8fcb4ce21807"
// activeColor
// : 
// "#dc143c"
// experience
// : 
// "5-10 ans d'experience"
// id
// : 
// "eca18bd3-d924-4d96-9fb7-ed28921e9186"
let Cv;
if(currentCVSave){
     Cv=  AllCvTemplateArray?.find(el=>el.id===currentCVSave?.TemplateId)
}

    return(
       <div>
        {
          Cv.name
        }
       </div>
    )
}