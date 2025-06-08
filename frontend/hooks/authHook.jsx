import React, { useEffect, useState,createContext } from "react"
import useBoolean from "./boolean"
import axios from "axios"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const {value:isLoadding,setValue:setIsLoadding} = useBoolean({values:true})
    const [IsWebsiteAdmin,setIsWebsiteAdmin] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:5000/auth/verifyToken');
        setUser(res.data.user);
        setIsWebsiteAdmin(res.data.IsWebsiteAdmin)

      } catch (err) {
        setUser(null);
      } finally {
        setIsLoadding(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoadding,IsWebsiteAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};


// export default function useAuthHook(){
//     const {value:isLoadding,setValue:setIsLoadding} = useBoolean({values:true})
//     const [user,setUser] = useState(null)
//     const [IsWebsiteAdmin,setIsWebsiteAdmin] = useState(false)

//     useEffect(()=>{
//          axios.get("http://localhost:5000/auth/verifyToken",{ withCredentials: true })
//         .then(res=>{
//             setUser(res.data.user)
//             setIsWebsiteAdmin(res.data.IsWebsiteAdmin)
//              return 
//         })
//         .catch(err=>{
          
//             return setUser(null)
//         })
//         .finally(()=>{
//             setIsLoadding(false)
//         })
//     },[])

//     return {
//       isLoadding,user,IsWebsiteAdmin
//     }
    
// }
