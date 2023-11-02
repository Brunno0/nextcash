import { useState } from "react"
import { GlobalContext } from "./GlobalContext";
import { useEffect } from "react";


export const GlobalState = (props) =>{
   

    useEffect (()=>{




    },[])


    const formatCurrency = (value) => {
        if (value) {
            const formattedValue = value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            });
            return formattedValue;
        }
        return '';
    };

    const context = {
        // eachPost,
        // setEachPostId
       // formatCurrency
    }

    return(
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )
}