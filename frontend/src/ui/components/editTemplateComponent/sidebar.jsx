import React,{useMemo} from "react";
import clsx from "clsx";
import { useLocation,useNavigate } from "react-router-dom";


export default function SidebarEditTemplate({NavLinkEditTemplates,getcurrentStep,StepComplete}){

    const location = useLocation()
    const locationPathname = useMemo(()=>{
        return location.pathname
    },[location.pathname])


return(
    <aside className="bg-[#000e38] w-[16rem] py-8 h-[100vh]">
      <div className="flex items-center flex-col">
        <img className='w-36' src="/imgs/logo.png" alt="logo" />
        <div className="mt-10">
          {
            NavLinkEditTemplates.map(el=>
                <div className={clsx(getcurrentStep.id === el.id ?"text-white bg-gray-200":"text-gray-100")}>
                    <div>{el.icon}</div>
                    <div>{el.name}</div>
                </div>
            )
          }
        </div>
      </div>
    </aside>
    
)

}