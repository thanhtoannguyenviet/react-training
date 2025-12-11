import { createContext, useState,useEffect } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { email: 'admin@example.com', password: 'admin123' }
    ]);

    const addUser = (userData) => {
        setUsers(prev => [...prev, userData]);
    };
    // useEffect(() => {
    //     console.log('Current users:', users);
    // }, [users]);
    return (
        <AuthContext.Provider value={{ users, addUser }}>
            {children}
        </AuthContext.Provider>
    )
};
