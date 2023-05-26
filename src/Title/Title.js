import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=>{
        document.title= `${title} - Happy Hues`
    },[])
}

export default useTitle ;