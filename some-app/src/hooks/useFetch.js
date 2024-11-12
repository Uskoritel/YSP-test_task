import { useState } from "react";

export default function useFetch(callback){
    const [load, setLoad] = useState(true);
    const fetchData = async (...args) => {
        try{
            await callback(...args);
        }
        catch(e){
            console.log(e.message); 
        }
        finally{
            setLoad(false)
        }
    }
    return [load, fetchData]
}