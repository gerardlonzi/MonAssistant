import { NavlinkData } from "../../data/navlinkData"
import { Link } from "react-router-dom"
import { useLocation,useNavigate } from "react-router-dom"
import { useMemo, useState } from "react"
import clsx from "clsx"
import { Menu, UserRound, LogIn, X,CornerUpLeft } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ user, IsWebsiteAdmin }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };
  const [navlinkData, setNavlinkData] = useState(NavlinkData)
  const location = useLocation()
  const locationTitle = useMemo(() => {
    return location.pathname
  }, [location.pathname])
  console.log(locationTitle);


  return (
    <header className="flex px-2 sm:px-10 xl:px-24 py-5 justify-between items-center fixed top-0 w-full  z-100 md:bg-[#00275b] bg-white shadow-b-xl">
      <nav className="flex justify-between items-center w-full ">
        <Link className="hidden md:block" to={"/"}> <img src="/imgs/logo.png" alt="logo-desktop" className="w-36 " /> </Link>
        <Link to={"/"} className="block md:hidden"> <img src="/imgs/logo-res.png" alt="logo-mobile" className="w-36 " /> </Link>
        <div className="flex items-center">

          <ul className=" flex items-center font-bold gap-5 hidden lg:flex">
            {
              navlinkData.map((el, index) =>
                <Link className={clsx(el.path == locationTitle ? "text-[#00bf63] p-3 hover:bg-green-100 " : " hover:bg-gray-100 p-3 hover:text-black  text-gray-100", "flex items-center gap-2    rounded-lg transition-all")} key={index} to={el.path}>
                  {
                    el.icon ? <span>{el.icon}</span> : ""
                  }

                  {
                    el.name && <span className="">{el.name}</span>
                  }
                </Link>
              )
            }
            {
              user ? <Link className="flex items-center gap-1 text-gray-100" to={clsx(IsWebsiteAdmin ? "/admin" : "/dashboard")}><UserRound />My account</Link> : <Link to={"/login"} className="flex items-center gap-2 text-gray-100 "><LogIn /> Connexion</Link>
            }
          </ul>
          <button className="lg:hidden text-green-600 p-1 border-green-600 border rounded-sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed top-0 right-0 h-full w-3/4 bg-[#001230] md:bg-white shadow-lg z-40 p-6"
          >
            <div>
              <div className="flex justify-between mb-5">
                
                <button className="lg:hidden flex justify-center  text-green-600 p-1 " onClick={handleGoBack}>
                  {isOpen ? <CornerUpLeft className="w-6 h-6" /> : <Menu className="w-6 h-6" />} 
                </button>
                <button className="lg:hidden flex justify-center  text-green-600 p-1 " onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

              </div>
              <ul className=" font-bold gap-3 flex flex-col justify-end">
                {
                  navlinkData.map((el, index) =>
                    <Link className={clsx(el.path == locationTitle ? "text-[#00bf63] p-3 bg-green-100 " : " hover:bg-gray-200 p-3 hover:text-black text-white  md:text-gray-500", "flex items-center gap-2    rounded-lg transition-all")} key={index} to={el.path}>
                      {
                        el.icon ? <span>{el.icon}</span> : ""
                      }

                      {
                        el.name && <span className="">{el.name}</span>
                      }
                    </Link>
                  )
                }
                {
                  user ? <Link className="flex items-center gap-1 text-gray-500 p-3" to={clsx(IsWebsiteAdmin ? "/admin" : "/dashboard")}><UserRound />My account</Link> : <Link to={"/login"} className="flex items-center gap-2 text-white  lg:text-gray-500 p-3"><LogIn /> Connexion</Link>
                }
              </ul>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
