import {v4 as uuidv4} from "uuid"

export function GetorcreateUuid(){
    let uuid = localStorage.getItem("vsid")
    if(!uuid){
        uuid = uuidv4();
        localStorage.setItem("vsid",uuid)
    }
    return uuid
}