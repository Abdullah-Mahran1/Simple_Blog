import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("Loading...");
    useEffect( () => {
            fetch(url).then(response => {
                return response.json();
              }).then(data => {
                        console.log('Data fetched_F: ', data);
                        setData(data);
                    }).catch(e => 
                        {
                            console.log(e.message)
                            setMessage(e.message)
                    })
                
            },[url])
        return {data, message}
}

export default useFetch;