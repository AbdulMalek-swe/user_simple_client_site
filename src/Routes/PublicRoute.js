import { useCookies } from "react-cookie";
import { Navigate } from "react-router";
const PublicRoute = ({children}) => {
    const [cookies] = useCookies(['token']);
    const token = cookies['token'];
      if(token){
        return <Navigate to="/note"/>
      }
      return children
};

export default PublicRoute;