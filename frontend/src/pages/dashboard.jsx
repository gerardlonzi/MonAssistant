import React,{useContext} from "react";
import { AuthContext } from "../../hooks/authHook";
import { Navigate } from "react-router-dom";
import LoaderPage from "../ui/components/loaderPage";

export default function Dashboard() {
  const { user, isLoadding, IsWebsiteAdmin } = useContext(AuthContext);  


  return (
    <div>
    user Dasboard
   </div>
  );
}