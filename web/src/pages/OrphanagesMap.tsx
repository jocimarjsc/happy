import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

function Orphanages() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :]</p>
                </header>

                <footer>
                    <strong>Várzea Grande</strong>
                    <span>Mato Grosso</span>
                </footer>
            </aside>

            <Map 
                center={[-15.6401913,-56.1475751]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/*<TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tile/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />*/}
            </Map>

            <Link to="" className="create-orphanage" >
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}
export default Orphanages