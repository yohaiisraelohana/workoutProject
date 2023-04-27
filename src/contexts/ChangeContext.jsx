import { createContext } from "react";


export const ChangeContext = createContext();

export const ChangeContextProvider = ({children}) =>{

    const change = {
        date:"20",
        kg:"30",
        cir:"5"
    }

    return(
        <ChangeContext.Provider value={change}>
            {children}
        </ChangeContext.Provider>
    )

}