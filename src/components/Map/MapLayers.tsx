import { Maptype } from 'types/common.types';
import { LayersControl } from 'react-leaflet';

import GoogleMapLayer from './GoogleMapLayer';

const { BaseLayer } = LayersControl;
interface MapLayersProps {
  maptype?: string;
}

const MapLayers = ({ maptype }: MapLayersProps) => {
  return (
    <LayersControl position="topright">
      <BaseLayer checked={maptype === Maptype.Roadmap} name="Google Maps Roads">
        <GoogleMapLayer maptype={Maptype.Roadmap} />
      </BaseLayer>
      <BaseLayer checked={maptype === Maptype.satellite} name="Google Maps Satellite">
        <GoogleMapLayer maptype={Maptype.satellite} />
      </BaseLayer>
    </LayersControl>
  );
};

MapLayers.defaultProps = {
  maptype: Maptype.Roadmap
};

export default MapLayers;
