import React from "react"
import { useState } from "react"

export default function useBoolean({values=false}){
    const [value,setValue] = useState(values)
    
    function Toogle(){
        return setValue(!value)
    }
    return (
     {
        value,setValue,Toogle
     }
    )
}   