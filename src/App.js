import './App.css';

import React, { useState } from 'react';

import bagansky from './bagansky.json';
import Region from './Region';
import suzunsky from './suzunsky.json';

function App() {

  const viewboxStartX = 0;
  const viewboxStartY = 0;
  const viewboxEndX = 400;
  const viewboxEndY = 700;

  const mapStartX = 57.551841;
  const mapStartY = 75.273074;
  const mapEndX = 53.189318;
  const mapEndY = 89.591162;

  const [info, setInfo] = useState('');

  return (
    <div className="App">
      <svg viewBox={`${viewboxStartX} ${viewboxStartY} ${viewboxEndX} ${viewboxEndY}`} xmlns="http://www.w3.org/2000/svg">
        <Region
          geo={bagansky}
          viewbox={[viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY]}
          map={[mapStartX, mapStartY, mapEndX, mapEndY]}
          setInfo={setInfo}
        />
        <Region
          geo={suzunsky}
          viewbox={[viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY]}
          map={[mapStartX, mapStartY, mapEndX, mapEndY]}
          setInfo={setInfo}
        />
      </svg>
      <div className='infoblock'>{info}</div>
    </div>
  );
}

export default App;
