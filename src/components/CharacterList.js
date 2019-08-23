import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Card, Icon, Image } from 'semantic-ui-react';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const getCharacters = () =>

    Axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
      // console.log(setCharacter);
    })
    .catch(err => {
      console.log( "there is a error", err)
    })
  }, []);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(character =>(
        <Card>
        <Image src={character.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{character.name}</Card.Header>
          {/* <Card.Meta>Joined in 2016</Card.Meta> */}
          <Card.Description>
            {character.location.name}
            
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            {character.origin.name}
        </Card.Content>
      </Card>
      ))
      }
    </section>
  );
}
