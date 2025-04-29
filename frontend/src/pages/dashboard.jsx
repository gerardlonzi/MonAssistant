import React from "react";
import useAuthHook from "../../hooks/authHook";
import { Navigate } from "react-router-dom";
import LoaderPage from "../ui/components/loaderPage";

export default function Dashboard() {
  const { user, isLoadding,IsWebsiteAdmin } = useAuthHook();

  if (isLoadding) return <LoaderPage /> ;

  if (!user || (user && IsWebsiteAdmin === true) ) return <Navigate to={"/PageError"} />;
  

  return (
    <div>
    user Dasboard
   </div>
  );
}