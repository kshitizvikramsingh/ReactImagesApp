import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import apiRequest from "./api"
import {useState} from "react" 

function App(){
    const [Images,setImages]=useState([])
    const handleSubmit=async(term)=> {
        console.log("DO a search with "+term)
        const result=await apiRequest(term)
        setImages(result)
    }

    return <div>
        <span><SearchBar onSubmit={handleSubmit} /></span>
        <span><ImageList data={Images}/></span>
    </div>
}

export default App