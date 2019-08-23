import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function EpisodeList(){
    const [episodes, setEpisodes] = useState([])

    useEffect(() =>{
        axios.get('https://rickandmortyapi.com/api/episode/')
        .then(response =>{
            console.log(response.data.results)
            setEpisodes(response.data.results)
        })
    }, [])


return(
    <section className="episode-list grid-view">
        {episodes.map(episode => (
            <div>
                {episode.name}
            </div>
        ))}

    </section>
)
}