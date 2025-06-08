import { useContext } from 'react';
import { AuthContext } from './authHook';
import { Navigate } from 'react-router-dom';
import LoaderPage from '../src/ui/components/loaderPage';


const PrivateRoute = ({ children }) => {
  const {isLoadding,IsWebsiteAdmin,user} = useContext(AuthContext);

  if (isLoadding) return <LoaderPage /> ;

  if (!user || (user && IsWebsiteAdmin === true) ) return <Navigate to={"/PageError"} />;

  return user ? children : <Navigate to="/login" />;
};


