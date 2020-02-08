import React, { useState, createContext, Dispatch, SetStateAction } from 'react';

export const CurrentUserContext = createContext({} as any,  (user: any): any => {} );

export interface IAuthUserInfo {
    isLoading: boolean;
    isLoggedIn: boolean | null;
    currentUser: any;
}

interface IProps {
    children: JSX.Element;
}

export const CurrentUserProvider: React.FC<IProps> = ({ children }) => {
    const [state, setState] = useState<IAuthUserInfo>({
        isLoading: false,
        isLoggedIn: null,
        currentUser: null,
    });

    return (
        <CurrentUserContext.Provider value={[state, setState]}>
            { children }
        </CurrentUserContext.Provider>
    )
}


