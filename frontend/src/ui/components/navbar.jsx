import { NavlinkData } from "../../data/navlinkData"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useMemo, useState } from "react"
import clsx from "clsx"
import { Menu } from "lucide-react"
import useAuthHook from "../../../hooks/authHook"

export default function Navbar({user,IsWebsiteAdmin}) {

  const [navlinkData, setNavlinkData] = useState(NavlinkData)
  const location = useLocation()
  const locationTitle = useMemo(() => {
    return location.pathname
  }, [location.pathname])
  console.log(locationTitle);


  return (
    <nav className="flex justify-between items-center">
      <Link to={"/"}> <img src="/imgs/logo.png" alt="" className="w-56" /> </Link>
      <div >

        <ul className="flex items-center font-bold gap-5">
          {
            navlinkData.map((el, index) =>
              <Link className={clsx(el.path == locationTitle ? "text-[#00bf63] p-3 hover:bg-green-100 " : " hover:bg-gray-100 p-3 hover:text-black text-gray-600","flex items-center gap-2    rounded-lg transition-all")} key={index} to={el.path}>
                {
                 el.icon? <span>{el.icon}</span> :""
                }
                
                {
                  el.name && <span className="text-">{el.name}</span>
                }
              </Link>
            )
          }
          {
            user ? <Link to={clsx(IsWebsiteAdmin?"/admin":"/dashboard")}><img src="/imgs/avatar.jpeg" alt="logo" className="w-10" /></Link>   : <Link to={"/login"} className="px-5 py-3 bg-[#00bf63] text-white rounded-md hover:bg-transparent hover:outline hover:outline-[#00bf63] hover:text-gray-600 transition-all">Connexion</Link>
          }
        </ul>
        
      </div>
    </nav>
  )
}
