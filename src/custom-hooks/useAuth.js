import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
        // console.log("rendering unsubscribe");
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  });
  // console.log("currentUser:", currentUser);
  // console.log("loading:", loading);

  return { currentUser, loading };
};

export default useAuth;
