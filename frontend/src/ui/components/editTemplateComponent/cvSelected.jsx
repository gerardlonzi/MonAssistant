import React,{useMemo} from "react";
import { useSelector } from "react-redux";
import { AllTemplatesArray } from "../../../data/cv/AllCvTemplateArray";

export default function CvSelected(){
    const currentCv = useSelector(state => state.cv.currentCv)

    const currentCVSave = useMemo(()=>{
         return currentCv
    },[currentCv])
console.log(currentCVSave);



    return(
       <div>
        hello world 
       </div>
    )
}