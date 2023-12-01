import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
function Map() {
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[6.268902, -10.67054]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.268902, -10.67054]}>
          <Popup
            autoClose={false}
            className={styles.mapPopup}
            keepInView={true}
            closeButton={false}
          >
            Gentle Restaurant.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
