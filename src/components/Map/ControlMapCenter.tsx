import { defaultCenter } from 'constants/common.constant';

import { useEffect, useState } from 'react';

import { useMap } from 'react-leaflet';

interface ControlMapCenterProps {
  zoomLevel: number;
  center?: any | null | undefined;
}

const ControlMapCenter = ({ zoomLevel, center = defaultCenter }: ControlMapCenterProps) => {
  const map = useMap();
  const [isBound, setBound] = useState<boolean>(false);

  useEffect(() => {
    // if (isBound) return;
    if (!center) return;

    map.setView(center, zoomLevel);
    setBound(true);
  }, [center, zoomLevel, isBound]); // eslint-disable-line

  return null;
};

ControlMapCenter.defaultProps = {
  center: defaultCenter
};

export default ControlMapCenter;
