import { createContext, useContext, useEffect, useState } from "react";

export const AuthProviderContext = createContext();
export const AuthProviderContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "auhtState";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false ;
      console.log(userData);
    setAuth(userData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(auth);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
    console.log(data);
  }, [auth]);

  return (
    <AuthProviderContext.Provider value={auth}>
      <AuthProviderContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthAction = () => useContext(AuthProviderContextDispatcher);
