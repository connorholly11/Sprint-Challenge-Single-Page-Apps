import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react';


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
                <Card>
                {/* <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} /> */}
                <Card.Content>
                  <Card.Header>{location.name}</Card.Header>
                  {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                  <Card.Description>
                    {/* Daniel is a comedian living in Nashville. */}
                  </Card.Description>
                </Card.Content>
                {/* <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content> */}
              </Card>
            ))}


        </section>
    )
}


