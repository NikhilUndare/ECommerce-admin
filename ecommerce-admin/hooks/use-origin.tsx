import { useEffect, useState } from "react"

export const useOrigin = () => {
    const [isMounted,SetIsMounted] = useState(false);
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

    useEffect(()=>{
        SetIsMounted(true)
    },[])

    if(!isMounted){
        return '';
    }
    return origin;
}