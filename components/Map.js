import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
const Map = () => {
	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 10,
	});
	return (
		<ReactMapGL
			mapStyle="mapbox://styles/isrealsix/cksrl6bcr28ln17o7kcwtvarc"
			mapboxApiAccessToken={process.env.mapbox_access_token}
			{...viewport}
		></ReactMapGL>
	);
};

export default Map;
