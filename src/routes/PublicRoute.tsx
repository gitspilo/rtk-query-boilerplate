import { ACCESS_TOKEN } from 'constants/common.constant';
import { Navigate, useLocation } from 'react-router-dom';
import { getStorageValue } from 'services/axiosClient';

const PublicRoute = ({ children }: any) => {
  const location = useLocation();
  const accessToken = getStorageValue(ACCESS_TOKEN);

  if (accessToken) {
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return children;
};

export default PublicRoute;
