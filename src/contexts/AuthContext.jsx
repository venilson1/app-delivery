import { createContext, useState } from "react";
import { createSession } from "../services/api";

export const AuthContext = createContext();


export default function AuthProvider({children}){

    const [user, setUser] = useState(null);

    async function login({email, password}){

        try {
            const response = await createSession(email, password);
            const { token } = response.data;
    
            await AsyncStorage.setItem("token", token);
            return true;
    
        } catch (error) {
            throw error.message;
        }
    };

    return (
        <AuthContext.Provider value={{
            authenticated: !!user, user, login
        }}>
            {children}
        </AuthContext.Provider>
    )
}