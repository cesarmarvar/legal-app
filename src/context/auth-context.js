import { createContext, useContext, useEffect, useState } from "react";
import { tokenKey } from "../config";
import * as auth from "../services/sessions-services";
import { createUser, getUser } from "../services/user-services";

const AuthContext = createContext();

function AuthProvider({children}) {

  const [ user, setUser ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    getUser().then(data => {
      setUser(data);
      setTimeout(() => { setIsLoading(false); }, 1000);
    }).catch((_e) => {
      setIsLoading(false);
    });
  }, []);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(e => {
      setError(e);
    });
  }

  function signup(credentials) {
    createUser(credentials).then(setUser).catch(e => {
      setError(e.message);
    });
  }

  function logout(){
    auth.logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      setUser(null);
    })
  }

  return(
    <AuthContext.Provider value={{
      user,
      error,
      isLoading,
      login,
      signup,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth };