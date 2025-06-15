import { v4 as uuidv4 } from 'uuid'
import { Template001 } from './CvTemplatesComponent'
import { Template002 } from './CvTemplatesComponent'


        
export const AllTemplatesArray = [
    {
        id:uuidv4(),
        name:"modern gray blue",
        component: Template001,
        img : "/imgs/cv-pictures/template001.JPG",
        caracteristic:[
            "CV à deux colonnes",
            "ontenu d'exemple modifiable",
            "Téléchargez au format PDF, Word DOCX ou TXT"
        ],
        type:"Recommandé"
    },
    {
        id:uuidv4(),
        name:"classique purple",
        component: Template002,
        img : "/imgs/cv-pictures/template001.JPG",
        caracteristic:[
            "CV à deux colonnes",
            "ontenu d'exemple modifiable",
            "Téléchargez au format PDF, Word DOCX ou TXT"
        ],
        type:"Nouveau"

    }
    
    
   
]