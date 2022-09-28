import { createContext, useContext, useEffect, useState } from "react";
import { tokenKey } from "../config";
import * as auth from "../services/sessions-services";
import { createUser, getUser } from "../services/user-services";

const AuthContext = createContext();

function AuthProvider({children}) {

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function signup(credentials) {
    createUser(credentials).then(setUser).catch(console.log);
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