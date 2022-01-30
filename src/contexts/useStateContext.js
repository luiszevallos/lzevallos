import { createContext } from "react"

const stateInitial = {
  user: "lzevallos",
  userName: "Luis",
  userLastname: "Zevallos",
  userPhoneNumber: "+(58) 412 378 2039",
  userEmail: "luis_zevallos_17@hotmail.com",
  aboutMe: "Soy Luis Zevallos, Desarrollador Web de Caracas, venezuela. Tengo mucha experiencia en desarrollar App Moviles, construcción y personalizacion de sitios web",
  userUrls: [
    {
      label: "linkedin",
      url: "https://linkedin.com/in/lzevallos20"
    },
    {
      label: "platzi",
      url: "https://platzi.com/@lzevallos"
    },
    {
      label: "instagram",
      url: "https://instagram.com/lzevallos20/"
    }
  ],
  workExperience: [
    {
      business: "Vilo Technologies",
      time: '2021 - Presente',
      charge: 'Desarrollador Frontend'
    },
    {
      business: "Serv y Equipo Byte Master 3000",
      time: '2015 - 2021',
      charge: 'Desarrollador Web'
    },
    {
      business: "Master Byte Corporation",
      time: '2012 - 2015',
      charge: 'Asistente de Programación'
    },
  ]
}

const StateContext = createContext(stateInitial);

export { StateContext, stateInitial };