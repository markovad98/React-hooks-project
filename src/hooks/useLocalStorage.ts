import { useState, useEffect } from 'react';

type TUseLocalStorageResult = [any, (value: any) => void]

export default (key: string, initialValue: any = ''): TUseLocalStorageResult => {
    const [value, setValue] = useState(localStorage.getItem(key) || initialValue);

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [key, value])

    return [value, setValue];
}
