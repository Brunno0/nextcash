import { useState } from "react"
import { GlobalContext } from "./GlobalContext";
import { useEffect } from "react";


export const GlobalState = (props) =>{
   

    useEffect (()=>{




    },[])

    const context = {
        // eachPost,
        // setEachPostId
    }

    return(
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )
}