import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { GET_ANIME_DETAIL } from "../lib/queries/GetAllAnime";
import { CardImage } from "../components/Card";
import '../styles/HomeStyle.css'

export default function Details(){
    let {animeId} = useParams();

    const {loading, error, data} = useQuery(GET_ANIME_DETAIL, {
        variables : {
            id: animeId
        }
    })

    if(loading) return <p className="text">Loading...</p>
    if(error) return <p className="text">{error.message}</p>
    
    const anime = data.Page.media[0]

    return(
        <div className="page">
            <div className="title">
                <h1>{anime.title.romaji}</h1>
                <p>{anime.title.english}</p>
            </div>
            <div className="detail-container">
                <CardImage id={anime.id} src={anime.coverImage.large}></CardImage>
                <div className="detail-text">
                    <p> Episodes: {anime.episodes}</p>
                    <p>Season: {anime.season} {anime.seasonYear}</p>
                    <p>Start Date: {anime.startDate.day}-{anime.startDate.month}-{anime.startDate.year}</p>
                    <p>End Date: {anime.endDate.day}-{anime.endDate.month}-{anime.endDate.year}</p>
                    <p>Genres: {anime.genres}</p>
                    <p>Description:</p>
                    {anime.description}
                </div>
            </div>
        </div>
    );
}