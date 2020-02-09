import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_PATHS } from '../constants/api';

type Tmethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

type TPrimitive = number | string | boolean | null | undefined | symbol;

interface IOptionParametr {
    [key: string]: IOptionParametr | TPrimitive;
}

interface IData {
    [key: string]: IOptionParametr | TPrimitive;
}

interface IOptions {
    method?: Tmethod;
    data?: IData;
}

interface IError {
    errors: {
        [key: string]: string[]
    }
}

type TUseFetchResult = [
    {
        isLoading: boolean,
        response: any,
        error: IError,
    },
    (options: IOptions) => void,
]

export default (url: string): TUseFetchResult => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [options, setOptions] = useState<IOptions | object>({})

    useEffect(() => {
        if (!isLoading) {
            return
        }
        axios(`${API_PATHS.BASE_URL}${url}`, options)
            .then(res => {
                console.warn('SUCCESS IN THEN: ', res);
                setIsLoading(false);
                setResponse(res.data);
            })
            .catch(err => {
                console.warn('ERROR IN CATCH: ', err);
                setIsLoading(false);
                setError(err.response.data);
            })

    }, [isLoading, url, options])

    const doFetch = (option: IOptions = {}) => {
        setIsLoading(true);
        setOptions(option)
    }

    return [
        {isLoading, response, error},
        doFetch
    ]
}
