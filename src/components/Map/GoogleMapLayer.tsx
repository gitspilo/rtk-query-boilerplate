import { GOOGLE_MAP_API_KEY } from 'constants/common.constant';

import { Maptype } from 'types/common.types';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

interface GoogleMapLayerProps {
  maptype: Maptype;
}

const GoogleMapLayer = ({ maptype }: GoogleMapLayerProps) => {
  // @ts-ignore
  return (
    <ReactLeafletGoogleLayer 
      // @ts-ignore
      googleMapsLoaderConf={{
        region: 'IN'
      }}
      apiKey={GOOGLE_MAP_API_KEY}
      type={maptype}
    />
  );
};

export default GoogleMapLayer;
