import React from "react";
import { useSelector } from "react-redux";
import { AllTemplatesArray } from "../../../data/cv/AllCvTemplateArray";

export default function CvSelected(){
    const currentCv = useSelector(state => state.cv.currentCv)
console.log(currentCv);



    return(
       <div>
        hello world 
       </div>
    )
}