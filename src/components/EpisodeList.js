import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react';


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
            <Card>
            {/* <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} /> */}
            <Card.Content>
              <Card.Header>{episode.name}</Card.Header>
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