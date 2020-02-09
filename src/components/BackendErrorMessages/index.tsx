import React from 'react';

import './index.sass';

interface IServerErrors {
    [key: string]: string[];
}

interface IProps {
    backendErrors: IServerErrors
}

const BackendErrorMessages: React.FC<IProps> = ({ backendErrors = {} }) => {
    const errorMessages = Object.keys(backendErrors).map(errorKey => {
        return `${errorKey}: ${backendErrors[errorKey].join(', ')}`
    });

    return (
        <ul className='backend-errors'>
            {
                errorMessages.map((errorMessage, idx) => (
                    <li className='backend-errors__item' key={idx}>
                        { errorMessage }
                    </li>
                ))
            }
        </ul>
    )
}

export default BackendErrorMessages;
