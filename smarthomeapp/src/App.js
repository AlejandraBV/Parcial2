import React, { useState } from 'react';
import './App.css';
import Space from './components/space/space';
import Room from './components/room/room';
import { IntlProvider } from 'react-intl';
import localeEnMessages from "./en.json";
import localeEsMessages from "./es.json";

function App() {

  const [cSpace, setSpace] = useState("");
  const [wClicked, setVisibility] = useState(false);
  
  function handleClick (spaceID) {
    setSpace(spaceID);
    setVisibility(true);
  }
  
  return (
    <div className="App">
      <IntlProvider locale="es" messages={localeEsMessages}>
      {wClicked === false && <Space handleClick = {handleClick}/>}
      {wClicked === true && <Room idRooms = {cSpace}></Room>}
      </IntlProvider>
    </div>
  );
}

export default App;
