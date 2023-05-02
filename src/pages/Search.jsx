import { useQuery } from "@apollo/client"
import { useState } from "react"
import { Card } from "../components/Card"
import { GET_ALL_ANIME } from "../lib/queries/GetAllAnime"
import '../styles/HomeStyle.css'

export default function Search(){
    const [search, setSearch] = useState("")
    const {loading, error, data} = useQuery(GET_ALL_ANIME, {
        variables : {
            page : 1,
            perPage : 50
        }
    })

    if(loading) return <p className="text">Loading...</p>
    if(error) return <p className="text">{error.message}</p>

    return(
        <div className="page">
            <div className="search-container">
                <input type="text" value={search ?? ""} placeholder="Search anime name..." onChange={(e) => setSearch(e.target.value)}/>
            </div>
            {search !== "" && (
                <div className="page-card">
                    {data.Page.media.filter((media) => 
                        (media.title.romaji && media.title.romaji.toLowerCase().includes(search.toLowerCase())) ||
                        (media.title.english && media.title.english.toLowerCase().includes(search.toLowerCase()))
                        ).map((anime) => {
                        return <Card anime={anime}/>;
                    })}
                </div>
            )}
        </div>
    )
}
