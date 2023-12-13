import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer } from 'react-leaflet';
import { defaultCenter } from 'constants/common.constant';
import { routes } from 'constants/pageroutes.constants';
import HomeSubheader from 'components/MapComponents/HomeSubheader';
import MapLayers from 'components/Map/MapLayers';
import ControlMapCenter from 'components/Map/ControlMapCenter';

import { Maptype } from 'types/common.types';
import './styles.less';

const Home = () => {
  const navigate = useNavigate();

  const handleListView = () => {
    navigate(routes.OrgOnBoard);
  };

  const mapContainer = useMemo(() => {
    return (
      <MapContainer
        center={defaultCenter}
        zoom={5}
        maxZoom={20}
        zoomControl={false}
        className="map-container">
        <MapLayers maptype={Maptype.Roadmap} />
        <ControlMapCenter zoomLevel={5} center={defaultCenter} />
      </MapContainer>
    );
  }, []);

  return (
    <div className="main-home">
      {mapContainer}
      <div className="home-sub-header">
        <HomeSubheader handleListView={handleListView} />
      </div>
    </div>
  );
};

export default Home;
