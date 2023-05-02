import { createContext, useEffect, useState } from "react"

const FavoritesContext = createContext({
    favorite: [],
    setFavorite: () => {}
})

const FavoritesProvider = ({children}) => {
    const [favorite, setFavorite] = useState(() => {
        const localStorageValue = localStorage.getItem("favorite")

        if(localStorageValue === null) return []
        else return JSON.parse(localStorageValue)
    });

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite))
    }, [favorite]);

    return(
        <FavoritesContext.Provider value={{favorite, setFavorite}}>{children}</FavoritesContext.Provider>
    );
}

export { FavoritesContext, FavoritesProvider}