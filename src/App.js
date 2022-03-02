import './App.css';

import React, { useState } from 'react';

import bagansky from './bagansky.json';
import Region from './Region';
import suzunsky from './suzunsky.json';

/*function latlngToPx(mapCurrentX, mapCurrentY, viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY, mapStartX, mapStartY, mapEndX, mapEndY) {
  const coefX = (viewboxEndX - viewboxStartX) / (mapEndX - mapStartX);
  const coefY = (viewboxEndY - viewboxStartY) / (mapEndY - mapStartY);
  const viewboxCurrentX = (mapCurrentX - mapStartX) * coefX;
  const viewboxCurrentY = (mapCurrentY - mapStartY) * coefY;
  return [viewboxCurrentY, viewboxCurrentX];
}*/

function App() {

  const viewboxStartX = 0;
  const viewboxStartY = 0;
  const viewboxEndX = 400;
  const viewboxEndY = 700;

  const mapStartX = 57.551841;
  const mapStartY = 75.273074;
  const mapEndX = 53.189318;
  const mapEndY = 89.591162;

  /*const baganskyToSVG = bagansky[0].geojson.coordinates[0].map(item => {
    return latlngToPx(item[1], item[0], viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY, mapStartX, mapStartY, mapEndX, mapEndY);
  });
  const suzunskyToSVG = suzunsky[0].geojson.coordinates[0].map(item => {
    return latlngToPx(item[1], item[0], viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY, mapStartX, mapStartY, mapEndX, mapEndY);
  });*/

  const [info, setInfo] = useState('');

  return (
    <div className="App">
      <svg viewBox={`${viewboxStartX} ${viewboxStartY} ${viewboxEndX} ${viewboxEndY}`} xmlns="http://www.w3.org/2000/svg">
        <Region geo={bagansky} setInfo={setInfo} />
        <Region geo={suzunsky} setInfo={setInfo} />
      </svg>
      <div className='infoblock'>{info}</div>
    </div>
  );
}

export default App;
