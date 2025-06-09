import { useContext } from 'react';
import { AuthContext } from './authHook';
import { Navigate } from 'react-router-dom';
import LoaderPage from '../src/ui/components/loaderPage';


export const PrivateRouteUser = ({ children }) => {
  const {isLoadding,IsWebsiteAdmin,user} = useContext(AuthContext);

  if (isLoadding) return <LoaderPage /> ;
  
  return  user && IsWebsiteAdmin === false  ? children : <Navigate to={"/login"} />

}
