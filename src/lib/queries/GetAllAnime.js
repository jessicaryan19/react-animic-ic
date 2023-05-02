import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
    query getAllAnime($page:Int, $perPage:Int){
        Page(page:$page, perPage:$perPage){
            media(type:ANIME, sort:POPULARITY_DESC){
                id
                coverImage{
                    large
                }
                title{
                    romaji
                    english
                }
            }
        }
    }
`;

export const GET_FAV_ANIME = gql`
    query getFavAnime($page:Int, $perPage:Int $id: Int){
        Page(page:$page, perPage:$perPage){
            media(type:ANIME, id:$id){
                id
                coverImage{
                    large
                }
                title{
                    romaji
                    english
                }
                genres
            }
        }
    }
`;

export const GET_ANIME_DETAIL = gql`
    query getAnimeDetail($id: Int){
        Page{
            media(type: ANIME id: $id){
                id
                coverImage{
                    large
                }
                title{
                    romaji
                    english
                }
                season
                seasonYear
                startDate {
                    year
                    month
                    day
                }
                endDate {
                    year
                    month
                    day
                }
                episodes
                genres
                description
            }
        }
    }
`;