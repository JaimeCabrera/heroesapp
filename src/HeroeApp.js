import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";


const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { auth: false };
};

export const HeroeApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  // si el usuario cambia grabo en el localStorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])


  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />;
    </AuthContext.Provider>
  );
};
