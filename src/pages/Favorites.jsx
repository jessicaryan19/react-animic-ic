import { useContext } from "react"
import { FavoritesContext } from "../lib/context/FavoriteContext"
import { Card } from "../components/Card";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../lib/queries/GetAllAnime";
import '../styles/HomeStyle.css'

export default function Favorites(){
    const {favorite} = useContext(FavoritesContext)
    const {loading, error, data} = useQuery(GET_ALL_ANIME, {
        variables : {
            page : 1,
            perPage : 50
        }
    });

    if(loading) return <p className="text">Loading...</p>
    if(error) return <p className="text">{error.message}</p>

    return(
        <div className="page">
            <h1>Favorites</h1>
            {favorite.length > 1 ? (
                <div className="page-card">
                    {
                        data.Page.media.filter((media) => favorite.includes(media.id)).map((anime) => {
                            return <Card anime={anime}/>
                        })
                    }
                </div>
            ):(
                <p className="text">You have no favorite anime.</p>
            )}
        </div>
    );
}