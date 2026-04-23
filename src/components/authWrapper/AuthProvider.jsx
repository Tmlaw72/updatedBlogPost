import React from "react";
import AuthContext from "./AuthContext";
import { useState } from "react";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    
    const login = (username) => {
        setUser(username);
    }
    const logout = () => {
        setUser(null);
    }

    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}
