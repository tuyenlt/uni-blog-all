import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";

const AuthContext = createContext({
    user: undefined,
    login: () => { },
    logout: () => { },
})

export const useAuthContext = () => useContext(AuthContext)

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const login = (userName, passwd) => {
        if (userName === "fakeuser@fake.com" && passwd === "fakepass") {
            setUser({ name: "fake user" })
            navigate("/home")
        } else {
            throw new Error("Unable to login")
        }
    }

    const logout = () => {
        setUser(null)
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}