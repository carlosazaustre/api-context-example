import { useState, createContext, useContext } from 'react';

// Creamos el Contexto
const AuthContext = createContext();

// Creamos un Hook para usar el contexto, y asi evitar importar
// useContext en cada componente que necesite el contexto
export function useAuthContext() {
    return useContext(AuthContext);
}

// Creamos el componente Provider, que tiene el contexto y el estado
// y funciones que permiten cambiarlo.
export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        username: "John Doe",
        id: 1
    })

    const updateUsername = (username) => {
        setAuth({ ...auth, username });
    }

    return (
        <AuthContext.Provider value={{ auth, updateUsername }}>
            {children}
        </AuthContext.Provider>
    )
}

