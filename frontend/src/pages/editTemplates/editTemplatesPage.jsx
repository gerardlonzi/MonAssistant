import React,{useMemo} from 'react'
import {Link,Outlet} from "react-router-dom"
import clsx from "clsx"
import SidebarEditTemplate from '../../ui/components/editTemplateComponent/sidebar'
import Coordonnees from './coordonnes'
import EditTemplateContainer from '../../modules/editTemplatesContainer'

export default function EditTemplatesPage() {
  return (
    <section>
      <div>
        <EditTemplateContainer/>
       
      </div>
    </section>
  )
}
