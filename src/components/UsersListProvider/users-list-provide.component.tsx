import React, {useState, useContext} from 'react';
import {urls} from '../../urls';

export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: {
        streetAddress: string,
        city: string,
        state: string,
        zip: string
    },
    description: string
}

interface UserListProps {
    children: React.ReactNode
}

export interface UserListContextProps {
    usersList: IUser[],
    addUser: (user: IUser) => void,
    fetchUsersList: (type: 'large'|'small') => void,
    error: boolean,
    loading: boolean,
    clearErrors: () => void,
}


export const UsersListContext = React.createContext<UserListContextProps|null>(null)


const UsersListProvider: React.FC<UserListProps> = ({children}) => {
    const [usersList, setUsersList] = useState<IUser[]>([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)



    const addUser = (user: IUser) => {
        setUsersList([user, ...usersList])
    }

    const fetchUsersList = (type: 'large'|'small') => {
        setError(false)
        setLoading(true)
        const url = type==='large'?urls.large : urls.small
        fetch(url)
        .then(response => response.json())
        .then(usersList => {
            setUsersList(usersList)
            setLoading(false)
        })
        .catch((err) => {
            setError(true)
            setLoading(false)
        })
    }

    const clearErrors = () => {
        setError(false)
    }




    return (
        <UsersListContext.Provider
        value={{
            usersList,
            addUser,
            fetchUsersList,
            error,
            loading,
            clearErrors,
        }}
        >
            {children}
        </UsersListContext.Provider>
    )
}

const useUsersList = () => {
    const value = useContext(UsersListContext)
    if (!value) {
        throw new Error('useUsersList hook can only be used inside provider')
    }
    return value;
}

export {UsersListProvider, useUsersList};