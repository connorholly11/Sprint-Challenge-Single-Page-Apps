import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function LocationsList() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
        .then(response =>{
            console.log(response.data.results)
            setLocations(response.data.results)
        })
    }, [])

    return(
        <section className= "location-list grid-view">
            {locations.map(location =>(
                <div>
                    {location.name}
                </div>
            ))}


        </section>
    )
}


