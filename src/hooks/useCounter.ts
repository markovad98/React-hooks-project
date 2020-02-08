import { useState, useEffect } from 'react';

type TCounterResult = [
    () => void,
    () => void,
    number,
]

export default (initialValue: number = 0): TCounterResult => {
    const [count, setCount] = useState<number>(initialValue);

    useEffect(() => {
        console.warn(`Counter: ${count}`);
    }, [count])

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);

    return [
        inc,
        dec,
        count,
    ]
}
