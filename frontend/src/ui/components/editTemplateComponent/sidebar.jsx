import React,{useMemo} from "react";
import clsx from "clsx";
import { Link, useLocation,useNavigate } from "react-router-dom";


export default function SidebarEditTemplate({NavLinkEditTemplates,getCurrentStep,StepsCompleted}){


return(
    <aside className="bg-[#000e38] w-[16rem] py-8 h-[100vh]">
      <div className="flex items-center flex-col">
        <img className='w-36' src="/imgs/logo.png" alt="logo" />
        <div className="mt-10 w-full m-auto space-y-1">
          {
            NavLinkEditTemplates?.map((el)=>{
              const isActive = el.id === getCurrentStep()?.id;
              const isCompleted = StepsCompleted?.includes(el.id);
                return isActive  || isCompleted === true ? 
                    <Link to={el.path} key={el.id} className={clsx(isActive?" bg-[#0040e2]":"bg-transparent","text-white relative flex px-10  text-[15px] font-semibold hover:bg-transparent  py-4 items-center gap-3 w-full  transition-all")}>
                        <div className="text-green-400">{el.icon}</div>
                        <div>{el.name}</div>
                        <div className="absolute w-1 h-full -right-1 bg-green-400"></div>
                    </Link>
                :
                <div key={el.id} className="text-gray-400 flex px-10  text-[15px] font-semibold  py-4 items-center gap-3 w-full ">
                    <div>{el.icon}</div>
                    <div>{el.name}</div>
                </div>
            }
                
            )
          }
        </div>
      </div>
    </aside>
    
)

}