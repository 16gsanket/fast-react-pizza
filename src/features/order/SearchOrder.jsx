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
            
            <input type="text" value={query} placeholder="Enter Order Nmber #" onChange={(e)=>setQuery(e.target.value)}
                className="rounded-full px-3 py-1 text-sm placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50"
            />
            </form>

        </div>
    )
}

export default SearchOrder
