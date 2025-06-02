import { BriefcaseBusiness, CircleUser, FileText, Heart,FileUser,FileChartColumn,Gem } from "lucide-react"

export const NavlinkData = [
    // {
    //     name:"Favoris",
    //     path:"/favoris",
    //     icon: <Heart />
    // },
    // {
    //     name:"Invoice",
    //     path:"/invoice",
    //     icon:<FileChartColumn />
    // }
    // ,
    {
        name:"Home",
        path:"/",
    }
    ,
    
    {
        name:"Lettre de motivation",
        path:"/letter",
        icon:<FileUser />
    }
    ,
    {
        name:"Creér un cv",
        path:"/creer-cv",
        icon:<FileText />
    },
    {
        name:"Subscription",
        path:"/subscription",
        icon:<Gem />
    }
    
    
]