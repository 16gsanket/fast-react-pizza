import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    const [query , setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate(`/order/${query}`);
        setQuery("")
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
            
            <input type="text" value={query} placeholder="Enter Order Nmber #" onChange={(e)=>setQuery(e.target.value)}/>
            </form>

        </div>
    )
}

export default SearchOrder
