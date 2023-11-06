import axios from "axios"

const apiRequest=async(term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: "Client-ID c4Im2vkDWKNj9v7S2AbgLRSWBmlrHr1aKEkuqMHdnio"
        },
        params:{
            query:term
        }
    })
    return response.data.results
}

export default apiRequest