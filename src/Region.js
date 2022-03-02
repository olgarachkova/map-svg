import React, { useState } from 'react';
import './App.css';

function latlngToPx(mapCurrentX, mapCurrentY, viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY, mapStartX, mapStartY, mapEndX, mapEndY) {
    const coefX = (viewboxEndX - viewboxStartX) / (mapEndX - mapStartX);
    const coefY = (viewboxEndY - viewboxStartY) / (mapEndY - mapStartY);
    const viewboxCurrentX = (mapCurrentX - mapStartX) * coefX;
    const viewboxCurrentY = (mapCurrentY - mapStartY) * coefY;
    return [viewboxCurrentY, viewboxCurrentX];
}


const Region = ({ geo, setInfo }) => {

    const [fillColor, setFillColor] = useState('transparent');

    const viewboxStartX = 0;
    const viewboxStartY = 0;
    const viewboxEndX = 400;
    const viewboxEndY = 700;

    const mapStartX = 57.551841;
    const mapStartY = 75.273074;
    const mapEndX = 53.189318;
    const mapEndY = 89.591162;

    const geoPoints = geo[0].geojson.coordinates[0].map(item => {
        return latlngToPx(item[1], item[0], viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY, mapStartX, mapStartY, mapEndX, mapEndY);
    }).join(' ');

    const geoInfo = geo[0].display_name;

    const handleClick = (e) => {
        setInfo(geoInfo);
    }

    const handleMouseOver = (e) => {
        setFillColor('red');
    }

    const handleMouseOut = (e) => {
        setFillColor('transparent');
    }

    return (
        <g>
            <polygon
                points={geoPoints}
                fill={fillColor}
                stroke="black"
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <title>{geoInfo}</title>
            </polygon>
        </g>
    );
}

export default Region;