import React, { useEffect, useContext } from 'react';
import useFetch from '../../hooks/useFetch'
import { CurrentUserContext } from '../../contexts/currentUser';
import useLocalStorage from '../../hooks/useLocalStorage';

interface IProps {
    children: any
}

const CurrentUserChecker: React.FC<IProps> =({ children })=> {
    const [{response}, doFetch] = useFetch('/user');
    const [, setCurrentUserState] = useContext(CurrentUserContext);
    const [token] = useLocalStorage('token');

    useEffect(() => {
        if (!token) {
            setCurrentUserState((state: any) => ({
                ...state,
                isLoggedIn: false,
            }))
            return;
        }
        doFetch()
        setCurrentUserState((state: any) => ({
            ...state,
            isLoading: true,
        }))
    }, [])

    useEffect(() => {
        if (!response) {
            return;
        }
        setCurrentUserState((state: any) => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user,
        }))
    }, [response, setCurrentUserState])

    return(
        <div>{children}</div>
    )
}

export default CurrentUserChecker;
