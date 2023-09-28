import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export  function fetchDataFromApi(url,key){
    const {isError,isLoading,data,error} = useQuery({
        queryKey: [key],
        queryFn: async()=>{
            const {data} = await axios.get(url)
            return data
        }
    });

    return {isError, isLoading, data, error}
}
