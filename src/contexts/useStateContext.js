import { createContext } from "react"

const stateInitial = {
  user: "lzevallos",
  userName: "Luis",
  userLastname: "Zevallos",
  userPhoneNumber: "+584123782039",
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
  ]
}

const StateContext = createContext(stateInitial);

export { StateContext, stateInitial };