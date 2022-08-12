import { useEffect } from "react";
import { createContext, useState } from "react";
import { getAllInfo } from "../api";

export const InfoContext = createContext({
    /**
     * 
     * @param {String} name Name of info field
     */
    getInfo: Function
});

export const InfoProvider = ({ children }) => {

    const [info, setInfo] = useState({ loading: true, data: [] });

    useEffect(() => {
        getAllInfo.then(res => {
            setInfo({ loading: false, data: res })
        })
    }, [])
    /**
     * 
     * @param {String} name Name of info field
     */
    const getInfo = (name) => {
        if (info.loading) {
            return undefined
        } else {
            return info.data.filter((data) => data.name === name)[0].value
        }
    }
    return (
        <InfoContext.Provider value={{ getInfo }}>{children}</InfoContext.Provider>
    );
}