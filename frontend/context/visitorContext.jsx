import {useContext,useState,useEffect,createContext} from 'react';
import { v4 as uuidv4 } from 'uuid';

const visitorContext = createContext();

export const useVisitorId =()=> useContext(visitorContext);

export const  VisitorContextId=({children})=>{
    const [visitorId, setVisitorId]= useState(null);
    useEffect(()=>{
        let uuid = localStorage.getItem("vsid");
        if (!uuid) {
          uuid = uuidv4();
          localStorage.setItem("vsid", uuid);
        }
        setVisitorId(uuid);
    },[]);

    return (
    <visitorContext.Provider value={visitorId}>
        {children}
    </visitorContext.Provider>
    );
};