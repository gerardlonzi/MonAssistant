import React, { useEffect, useState } from "react"
import useBoolean from "./boolean"
import axios from "axios"

export default function useAuthHook(){
    const {value:isLoadding,setValue:setIsLoadding} = useBoolean({values:true})
    const [user,setUser] = useState(null)
    const [IsWebsiteAdmin,setIsWebsiteAdmin] = useState(false)

    useEffect(()=>{
         axios.get("http://localhost:5000/auth/verifyToken",{ withCredentials: true })
        .then(res=>{
            setUser(res.data.user)
            setIsWebsiteAdmin(res.data.IsWebsiteAdmin)
             return 
        })
        .catch(err=>{
          
            return setUser(null)
        })
        .finally(()=>{
            setIsLoadding(false)
        })
    },[])

    return {
      isLoadding,user,IsWebsiteAdmin
    }
    
}
