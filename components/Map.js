import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
// import { getCenter } from 'geolib/es/getCenter';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
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
		></ReactMapGL>
	);
};

export default Map;
