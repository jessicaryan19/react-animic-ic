import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../lib/queries/GetAllAnime";
import { Card } from "../components/Card";
import '../styles/HomeStyle.css'

export default function Home(){
    const {loading, error, data} = useQuery(GET_ALL_ANIME, {
        variables : {
            page : 1,
            perPage : 50
        }
    });

    if(loading) return <p className="text">Loading...</p>
    if(error) return <p className="text">{error.message}</p>

    console.log(data)

    return(
        <div className="page">
            <h1>Popular</h1>
            <div className="page-card">
                {data.Page.media.map((anime, index) => {
                    return <Card anime={anime}></Card>
                })}
            </div>
        </div>
    );
}