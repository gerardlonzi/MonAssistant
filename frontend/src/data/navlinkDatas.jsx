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
        id:uuidv4(),
        name:"COORDONNÉES",
        path:"/creer-cv/edit/crdn",
        icon:<CircleUser />,
        step:1
    },
    {
        id:uuidv4(),
        name:"EXPÉRIENCE",
        path:"/creer-cv/edit/exp",
        icon:<File/>,
        step:2

    },
    {
        id:uuidv4(),
        name:"FORMATION",
        path:"/creer-cv/edit/frmt",
        icon:<GraduationCap />,
        step:3
    }
    ,
    {
        id:uuidv4(),
        name:"COMPÉTENCES",
        path:"/creer-cv/edit/frmt",
        icon:<Wrench />,
        step:4
    }
    ,
    {
        id:uuidv4(),
        name:"PROFIL",
        path:"/creer-cv/edit/profil",
        icon:<CircleDot />,
        step:5
    }
    ,
    {
        id:uuidv4(),
        name:"LANGUAGE",
        path:"/creer-cv/edit/lang",
        icon:<Languages />,
        step:6
    }
    ,
    {
        id:uuidv4(),
        name:"FINALISATION",
        path:"/creer-cv/edit/finish",
        icon:<FilePenLine />,
        step:7
    }
]