import { defaultCenter } from 'constants/common.constant';

import { useMemo } from 'react';

import { MapContainer } from 'react-leaflet';

// import { Maptype } from 'types/common.types';
// import ControlMapCenter from './ControlMapCenter';
import MapLayers from './MapLayers';
import './styles.less';
import ControlMapCenter from './ControlMapCenter';

const HomeMapContainer = () => {
  const mapContainer = useMemo(() => {
    return (
      <MapContainer
        center={defaultCenter}
        zoom={5}
        maxZoom={20}
        zoomControl={false}
        className="map-container">
        <MapLayers />
        {/* <MapActionControl mapType={mapType} handleMapType={handleMapType} /> */}
        <ControlMapCenter zoomLevel={10} center={defaultCenter} />
      </MapContainer>
    );
  }, []);
  // eslint-disable-next-line
  return <>{mapContainer}</>;
};

export default HomeMapContainer;
