import { v4 as uuidv4 } from 'uuid'
export const niveau_de_connaissance = [
    {
        id:uuidv4(),
        niveau : "Sans experience",
        step2: true,
        value : {
            IsNotStudentContent: "Etudiant",
            IsStudentContent: "Sans experience"
        }
    },
    {
        id:uuidv4(),
        niveau : "Moins de 3 ans",
        step2: true,
        value : {
            IsNotStudentContent: "Etudiant",
            IsStudentContent: "0-3 ans d'experience"
        }
    }

    ,
    {
        id:uuidv4(),
        niveau : "3-5 ans",
        step2: false,
        value : "3-5 ans d'experience"
    }
    ,
    {
        id:uuidv4(),
        niveau : "5-10 ans",
        step2: false,
        value : "5-10 ans d'experience"
    }
    ,
    {
        id:uuidv4(),
        niveau : "Plus de 10 ans",
        step2: false,
        value : "Plus 10 ans d'experience"

    }
]