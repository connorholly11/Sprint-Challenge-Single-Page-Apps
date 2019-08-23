import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
// import CharacterCard from './components/CharacterCard';
import LocationsList from "./components/LocationsList.js";
import EpisodeList from './components/EpisodeList';
import {Route} from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* <CharacterList />
      <LocationsList />
      <EpisodeList /> */}

      <Route exact path="/Character" component={CharacterList} />
      <Route exact path="/Location" component={LocationsList} />
      <Route exact path="/Episode" component={EpisodeList} />
    </main>
  );
}
