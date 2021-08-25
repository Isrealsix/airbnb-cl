import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import { getCenter } from 'geolib/es/getCenter';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
	const [selectedLocation, setSelectedLocation] = useState({});

	// Transforming the search result
	const coordinates = searchResults?.map(result => ({
		longitude: result.long,
		latitude: result.lat,
	}));
	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 10,
	});

	return (
		<ReactMapGL
			mapStyle="mapbox://styles/isrealsix/cksrl6bcr28ln17o7kcwtvarc"
			mapboxApiAccessToken={process.env.mapbox_access_token}
			{...viewport}
			onViewportChange={nextViewport => setViewport(nextViewport)}
		>
			{searchResults.map(result => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
					>
						<p
							className="cursor-pointer text-2xl animate-bounce"
							aria-label="push-pin"
							role="img"
							onClick={() => setSelectedLocation(result)}
						>
							📌
						</p>
					</Marker>

					{/* Show popup on marker cliked */}
					{selectedLocation.long === result.long && (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							longitude={result.long}
							latitude={result.lat}
						>
							{result.title}
						</Popup>
					)}
				</div>
			))}
		</ReactMapGL>
	);
};

export default Map;
