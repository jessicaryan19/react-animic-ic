import { Link } from "react-router-dom";
import '../styles/HomeStyle.css'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { useContext } from "react";
import { FavoritesContext } from "../lib/context/FavoriteContext";

export function Card({anime}){
    return(
        <div className="card-container">
            <CardImage id={anime.id} src={anime.coverImage.large}/>
            <CardTitle id={anime.id}>{anime.title.romaji}</CardTitle>
            <AddFavorite anime={anime}/>
        </div>
    );
}

export function CardImage({id, ...Attr}){
    return (
        <Link to={`/${id}`}>
            <img className="card-image" {...Attr} alt=""/>
        </Link>
    );
}

export function CardTitle({id, children}){
    return <Link className='card-title' to={`/${id}`}>{children}</Link>
}

export function AddFavorite({anime}){
    const {favorite, setFavorite} = useContext(FavoritesContext)
    const isFavorite = favorite.includes(anime.id)
    
    const favoriteClick = () => {
        if(isFavorite){
            setFavorite(favorite.filter((id) => id !== anime.id))
        }
        else{
            setFavorite([...favorite, anime.id])
        }
    }

    console.log(isFavorite)
    return(
        <div>
            {isFavorite ? (
                <button onClick={favoriteClick} className="fav-btn"><MdFavorite/> Remove Favorites</button>
            ):(
                <button onClick={favoriteClick} className="fav-btn"><MdFavoriteBorder/> Add to Favorites</button>
            )}
        </div>
    );
}