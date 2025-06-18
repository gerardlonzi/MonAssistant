import { BriefcaseBusiness, CircleUser, FileText, Heart,FileUser,FileChartColumn,Gem,File,GraduationCap,Wrench,CircleDot,Languages,FilePenLine} from "lucide-react"
import { v4 as uuidv4 } from 'uuid'

        

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
    
    
];

export const navLinkEditTemplateStep = [
    {
        id:1,
        name:"COORDONNÉES",
        path:"/creer-cv/edit/crdn",
        icon:<CircleUser />,
        component:{
            step:"",
        }
       
    },
    {
        id:2,
        name:"EXPÉRIENCE",
        path:"/creer-cv/edit/exp",
        icon:<File/>,
        component:{
            step:"",
        }

    },
    {
        id:3,
        name:"FORMATION",
        path:"/creer-cv/edit/frmt",
        icon:<GraduationCap />,
        component:{
            step:"",
        }
    }
    ,
    {
        id:4,
        name:"COMPÉTENCES",
        path:"/creer-cv/edit/frmt",
        icon:<Wrench />,
        component:{
            step:"",
        }
    }
    ,
    {
        id:5,
        name:"PROFIL",
        path:"/creer-cv/edit/profil",
        icon:<CircleDot />,
        component:{
            step:"",
        }
    }
    ,
    {
        id:6,
        name:"LANGUAGE",
        path:"/creer-cv/edit/lang",
        icon:<Languages />,
        component:{
            step:"",
        }
    }
    ,
    {
        id:7,
        name:"FINALISATION",
        path:"/creer-cv/edit/finish",
        icon:<FilePenLine />,
        component:{
            step:"",
        }
    }
]