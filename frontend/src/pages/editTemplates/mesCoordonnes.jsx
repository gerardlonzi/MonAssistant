import React,{useMemo} from 'react'
import {navLinkEditTemplateStep} from "../../data/NavlinkDatas"
import {Link} from "react-router-dom"
import clsx from "clsx"

export default function Mes_Coordonnes() {
  return (
    <section>
      <aside className="bg-[#002a91] w-60">
        <div>
          <img src="/imgs/logo.png" alt="logo" />
          <div>
            {
             navLinkEditTemplateStep.map((el,id)=>
     <div>

     </div>
)
            }
          </div>
        </div>
      </aside>
      <div>
        <outlet/>
      </div>
    </section>
  )
}
