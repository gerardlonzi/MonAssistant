import { NavlinkData } from "../../data/navlinkData"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useMemo, useState } from "react"
import clsx from "clsx"
import { Menu,UserRound,LogIn } from "lucide-react"
import useAuthHook from "../../../hooks/authHook"

export default function Navbar({user,IsWebsiteAdmin}) {

  const [navlinkData, setNavlinkData] = useState(NavlinkData)
  const location = useLocation()
  const locationTitle = useMemo(() => {
    return location.pathname
  }, [location.pathname])
  console.log(locationTitle);


  return (
    <nav className="flex px-24 py-5 justify-between items-center fixed top-0 w-full  z-100 bg-[#00275b]">
      <Link to={"/"}> <img src="/imgs/logo.png" alt="" className="w-36" /> </Link>
      <div >

        <ul className="flex items-center font-bold gap-5">
          {
            navlinkData.map((el, index) =>
              <Link className={clsx(el.path == locationTitle ? "text-[#00bf63] p-3 hover:bg-green-100 " : " hover:bg-gray-100 p-3 hover:text-black  text-gray-100","flex items-center gap-2    rounded-lg transition-all")} key={index} to={el.path}>
                {
                 el.icon? <span>{el.icon}</span> :""
                }
                
                {
                  el.name && <span className="">{el.name}</span>
                }
              </Link>
            )
          }
          {
            user ? <Link className="flex items-center gap-1 text-gray-100" to={clsx(IsWebsiteAdmin?"/admin":"/dashboard")}><UserRound />My account</Link>   : <Link to={"/login"} className="flex items-center gap-2 text-gray-100 "><LogIn /> Connexion</Link>
          }
        </ul>
        
      </div>
    </nav>
  )
}
