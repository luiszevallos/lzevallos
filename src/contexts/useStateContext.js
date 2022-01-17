import { createContext } from "react"

const stateInitial = {
  user: "lzevallos",
  userName: "Luis",
  userLastname: "Zevallos",
  userPhoneNumber: "+584123782039",
  userEmail: "luis_zevallos_17@hotmail.com",
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