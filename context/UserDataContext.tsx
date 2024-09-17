import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/user";

interface UserDataContextType {
    users: User[];
    updateUsersData: (userData: User[]) => void;
    getUserName: (id: number) => string | undefined;
}
const defaultUserDataContextValue: UserDataContextType = {
    users: [],
    updateUsersData: () => { },
    getUserName: () => undefined,
};

export const UserDataContext = createContext<UserDataContextType>(defaultUserDataContextValue);

export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    const updateUsersData = (userData: User[]) => {
        setUsers(userData);
    }
    const getUserName = (id: number) => {
        return users.filter((user) => user?.id === id)[0].name
    }

    return (
        <UserDataContext.Provider value={{ users, updateUsersData, getUserName }} >
            {children}
        </UserDataContext.Provider>
    )
}

