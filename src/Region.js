import React from 'react';
import './App.css';

function latlngToPx(mapCurrentX, mapCurrentY, viewboxStartX, viewboxStartY, viewboxEndX, viewboxEndY, mapStartX, mapStartY, mapEndX, mapEndY) {
    const coefX = (viewboxEndX - viewboxStartX) / (mapEndX - mapStartX);
    const coefY = (viewboxEndY - viewboxStartY) / (mapEndY - mapStartY);
    const viewboxCurrentX = (mapCurrentX - mapStartX) * coefX;
    const viewboxCurrentY = (mapCurrentY - mapStartY) * coefY;
    return [viewboxCurrentY, viewboxCurrentX];
}


const Region = ({ geo, viewbox, map, setInfo, cn }) => {
    const geoPoints = geo[0].geojson.coordinates[0].map(item => {
        return latlngToPx(item[1], item[0], ...viewbox, ...map);
    }).join(' ');

    const geoInfo = geo[0].display_name;

    const handleClick = (e) => {
        setInfo(geoInfo);
    }

    return (
        <g>
            <polygon
                points={geoPoints}
                onClick={handleClick}
                className={cn}
            >
                <title>{geoInfo}</title>
            </polygon>
        </g>
    );
}

export default Region;