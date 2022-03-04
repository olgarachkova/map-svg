import './App.css';

import React, { useState } from 'react';

import Region from './Region';
import bagansky from './bagansky.json';
import suzunsky from './suzunsky.json';
import chanovsky from './chanovsky.json';
import toguchinsky from './toguchinsky.json';
import ubinsky from './ubinsky.json';
import karasuksky from './karasuksky.json';

function App() {

  const viewboxStartX = 0;
  const viewboxStartY = 0;
  const viewboxEndX = 800;
  const viewboxEndY = 1200;

  const mapStartX = 57.551841;
  const mapStartY = 75.273074;
  const mapEndX = 53.189318;
  const mapEndY = 89.591162;

  const [info, setInfo] = useState('');

  return (
    <>
      <div className="App">
        <svg
          viewBox={`${viewboxStartX} ${viewboxStartY} ${viewboxEndX} ${viewboxEndY}`}
          xmlns="http://www.w3.org/2000/svg"
          width='1000px'
          height='700px'
        >
          <linearGradient id="gradlinear">
            <stop offset="0%" stopColor="crimson"
              className="stop-1" />
            <stop offset="50%" stopColor="gold"
              className="stop-2" />
            <stop offset="100%" stopColor="teal"
              className="stop-3" />
          </linearGradient>
          <Region
            geo={bagansky}
            viewbox={[viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY]}
            map={[mapStartX, mapStartY, mapEndX, mapEndY]}
            cn='region1'
            setInfo={setInfo}
          />
          <Region
            geo={suzunsky}
            viewbox={[viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY]}
            map={[mapStartX, mapStartY, mapEndX, mapEndY]}
            cn='region2'
            setInfo={setInfo}
          />
          <Region
            geo={chanovsky}
            viewbox={[viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY]}
            map={[mapStartX, mapStartY, mapEndX, mapEndY]}
            cn='region3'
            setInfo={setInfo}
          />
          <Region
            geo={toguchinsky}
            viewbox={[viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY]}
            map={[mapStartX, mapStartY, mapEndX, mapEndY]}
            cn='region4'
            setInfo={setInfo}
          />
          <Region
            geo={ubinsky}
            viewbox={[viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY]}
            map={[mapStartX, mapStartY, mapEndX, mapEndY]}
            cn='region5'
            setInfo={setInfo}
          />
          <Region
            geo={karasuksky}
            viewbox={[viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY]}
            map={[mapStartX, mapStartY, mapEndX, mapEndY]}
            cn='region6'
            setInfo={setInfo}
          />
        </svg>
        <div className='infoblock'>{info}</div>
      </div>
    </>
  );
}

export default App;
