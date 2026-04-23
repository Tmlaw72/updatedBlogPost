import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useUsername = () => {
    const {user} = useContext(AuthContext);
    return user ? user : null;
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
