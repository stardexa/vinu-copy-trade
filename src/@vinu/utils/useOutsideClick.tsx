import {useEffect, useRef} from "react";

const useOutsideClick = (callback: any) => {
    const ref = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const handleClick = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [ref]);

    return ref;
};

export default useOutsideClick;