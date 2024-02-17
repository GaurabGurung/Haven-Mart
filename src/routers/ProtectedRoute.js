import { signOut } from "firebase/auth";
import useAuth from "../custom-hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  // useEffect(() => {
  //   signOut(auth);
  // }, []);

  if (currentUser === null) {
    // console.log("Redirecting to login");
    return <Navigate to="/login" />;
  } else {
    // console.log("Rendering children");
    return children;
  }
};

export default ProtectedRoute;
