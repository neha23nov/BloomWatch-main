import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import axios from "axios";

// Example tree icon
const treeIcon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/assets/tree.png`,
  iconSize: [25, 25],
});

// Initial tree locations
const trees = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 48.8566, lng: 2.3522 },
  { lat: -1.2921, lng: 36.8219 },
];

// Component to fly to searched location
function SearchMarker({ query }) {
  const map = useMap();

  React.useEffect(() => {
    if (!query) return;

    // Use Nominatim API for geocoding
    const fetchLocation = async () => {
      try {
        const params = new URLSearchParams({ q: query, format: "json", limit: 1 });
        const res = await axios.get(`https://nominatim.openstreetmap.org/search?${params}`);
        if (res.data && res.data.length > 0) {
          const { lat, lon } = res.data[0];
          map.setView([parseFloat(lat), parseFloat(lon)], 6); // zoom to region
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocation();
  }, [query, map]);

  return null;
}

const VegetationMap = () => {
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("");

  return (
    <>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1000, background: "white", padding: 8, borderRadius: 6 }}>
        <input
          type="text"
          placeholder="Search a location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 6, width: 200 }}
        />
        <button
          onClick={() => setQuery(search)}
          style={{ padding: 6, marginLeft: 4 }}
        >
          Search
        </button>
      </div>

      <MapContainer center={[20, 0]} zoom={2} style={{ width: "100%", height: "100vh" }} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {trees.map((tree, idx) => (
          <Marker key={idx} position={[tree.lat, tree.lng]} icon={treeIcon} />
        ))}

        {query && <SearchMarker query={query} />}
      </MapContainer>
    </>
  );
};

export default VegetationMap;
