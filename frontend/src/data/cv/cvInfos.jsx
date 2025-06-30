import { a } from "motion/react-client";
import { v4 as uuidv4 } from 'uuid'




export const cvData = {
  img: "/imgs/mirabel.jpg",
  name: "Ramires",
  prename: "Angele",
  profession: "Développeuse web ",
  contact: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
      </svg>,
      infos: "+234089865"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
      </svg>,
      infos: "aliceflore@gmail.com"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </svg>,
      infos: {
        ville: "Paris",
        pays: "France"
      }
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-signpost-icon lucide-signpost"><path d="M12 13v8" /><path d="M12 3v3" /><path d="M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" /></svg>,
      infos: "12 Rue des Fleurs 75010 Paris France"

    }
  ],
  supp_Contact: [
    {
      id:1,
      icon: "",
      htmlfor:"age",
      name: "Åge / date de naissance",
      infos: "",
      placeholder:"29"
    },
    {
      id:2,
      icon: "",
      name: "Permis de conduire / Véhiculé",
      infos: "",
      htmlfor:"permis/vehiculé",
      placeholder:"Permis B"


    },
    {
      id:3,
      icon: "",
      htmlfor:"nationalité",
      name: "Nationalité",
      infos: "",
      placeholder:"camerounaise"

    }
    ,
    {
      id:4,
      icon: "",
      htmlfor:"situationfamiliale",
      name: "Situation familiale",
      infos: "",
      placeholder:" "

    },
    {
      id:5,
      icon: "",
      htmlfor:"site",
      name: "Linkledin / Autre site",
      infos: "",
      placeholder:"https://linkdin/alice.com"

    },
    {
      id:6,
      icon: "",
      htmlfor:"disponibilité",
      name: "Disponibilité / Mobilité",
      infos: "",
      placeholder:" "
    }
  ],
  compétences: [
    "Travail en équipe avec des outils comme Git, Trello, Slack",
    "Conception de structures logicielles claires (MVC, API, architecture propre)",
  ],
  languages: [
    "Français (courant)",
    "Anglais (courant)"
  ],
  hobbies: [
    'lecture', "ecriture", "musique"
  ],
  profile: " Développeur web expérimenté avec plus de 2 ans d’expérience dans la conception, le développement et la maintenance de solutions web performantes et à créer des interfaces modernes et efficaces."
  ,
  experience: [
    {
      poste: "chargé de recruitement",
      lieux: "yaounde Douala",
      debut: "Jan 2022",
      fin: "Dec 2024",
      Activites: [
        "gestion de la communication et des relation exterieure au sein de l'entreprise",
        "recrutement et suivie des candidat au poste probable au sein de l'entreprise"
      ]
    },
    {
      poste: "chargé de recruitement",
      lieux: "yaounde Douala",
      debut: "Jan 2022",
      fin: "Dec 2024",
      Activites: [
        "gestion de la communication et des relation exterieure au sein de l'entreprise",
        "recrutement et suivie des candidat au poste probable au sein de l'entreprise"
      ]
    }
  ],
  education: [
    {
      diplome: "Baccalaureat D",
      debut: "May 2014",
      fin: "Nov 2025",
      ecole: "college saint jean",
      lieux: "Yaounde Douala"
    }

  ],
  formation: [
    {
      diplome: "Master en marketing digital ",
      debut: "May 2018",
      fin: "Nov 2022",
      ecole: "Maneliza vocationnal training center",
      lieux: "Younde Douala"
    }
  ]


}


export const EmptycvData = {
  img: "",
  name: "Nom",
  prename: "Prenom",
  profession: "Ta profession",
  contact: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
      </svg>,
      infos: ""
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
      </svg>,
      infos: <a href="mailto:aliceflore@gmail.com"></a>
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </svg>,
      infos: {
        ville: "",
        pays: ""
      }
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-signpost-icon lucide-signpost"><path d="M12 13v8" /><path d="M12 3v3" /><path d="M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" /></svg>,
      infos: ""

    }

  ],

  supp_Contact: [
    {
      id:1,
      icon: "",
      htmlfor:"age",
      name: "Åge / date de naissance",
      infos: "",
      placeholder:"29"
    },
    {
      id:2,
      icon: "",
      name: "Permis de conduire / Véhiculé",
      infos: "",
      htmlfor:"permis/vehiculé",
      placeholder:"Permis B"


    },
    {
      id:3,
      icon: "",
      htmlfor:"nationalité",
      name: "Nationalité",
      infos: "",
      placeholder:"camerounaise"

    }
    ,
    {
      id:4,
      icon: "",
      htmlfor:"situationfamiliale",
      name: "Situation familiale",
      infos: "",
      placeholder:" "

    },
    {
      id:5,
      icon: "",
      htmlfor:"site",
      name: "Linkledin / Autre site",
      infos: "",
      placeholder:"https://linkdin/alice.com"

    },
    {
      id:6,
      icon: "",
      htmlfor:"disponibilité",
      name: "Disponibilité / Mobilité",
      infos: "",
      placeholder:" "
    }
  ],
  compétences: [
  ],
  languages: [
  ],
  hobbies: [

  ],
  profile: ""
  ,
  experience: [
    {
      poste: "",
      lieux: "",
      debut: "",
      fin: "",
      Activites: [

      ]
    },
    {
      poste: "",
      lieux: "",
      debut: "",
      fin: "",
      Activites: [

      ]
    }
  ],
  education: [
    {
      diplome: "",
      debut: "",
      fin: "",
      ecole: "",
      lieux: ""
    }

  ],
  formation: [
    {
      diplome: "",
      debut: "",
      fin: "",
      ecole: "",
      lieux: ""
    }
  ]


}


