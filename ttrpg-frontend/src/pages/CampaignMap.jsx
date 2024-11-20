import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import './CampaignMap.css';

// Default icon setup for Leaflet (fixes missing icon issue)
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function CampaignMap() {
    const [markers, setMarkers] = useState([]);

    // Function to add a new marker on map click
    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                const newMarker = {
                    id: Date.now(),
                    position: [lat, lng],
                    description: 'New Marker',
                };
                setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
            },
        });
        return null;
    };

    // Function to update marker description
    const updateMarkerDescription = (id, description) => {
        setMarkers((prevMarkers) =>
            prevMarkers.map((marker) =>
                marker.id === id ? { ...marker, description } : marker
            )
        );
    };

    return (
        <div className="campaign-map">
            <h2>Campaign Map</h2>
            <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true} className="map-container">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapClickHandler />
                {markers.map((marker) => (
                    <Marker key={marker.id} position={marker.position}>
                        <Popup>
                            <input
                                type="text"
                                value={marker.description}
                                onChange={(e) => updateMarkerDescription(marker.id, e.target.value)}
                                placeholder="Enter description"
                            />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default CampaignMap;