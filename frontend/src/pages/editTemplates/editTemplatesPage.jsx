import React,{useMemo} from 'react'
import {Link,Outlet} from "react-router-dom"
import clsx from "clsx"
import SidebarEditTemplate from '../../ui/components/editTemplateComponent/sidebar'

export default function editTemplatesPage() {
  return (
    <section>
      <SidebarEditTemplate />
      <div>
         <outlet/>
      </div>
    </section>
  )
}
