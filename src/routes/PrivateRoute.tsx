import React from 'react';
import { includes } from 'lodash';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { ACCESS_TOKEN } from 'constants/common.constant';
import { routes } from 'constants/pageRoutes.constants';
import { UserRole } from 'store/users/types';
import type { JWT } from 'types/common.types';
import { getStorageValue } from 'services/axiosClient';

interface PrivateRouteProps {
  children: React.ReactElement;
  roles?: Array<UserRole>;
}

const PrivateRoute = ({
  children,
  roles = [
    UserRole.SuperAdmin,
    UserRole.Designer,
    UserRole.Manager,
    UserRole.Admin,
    UserRole.Reviewer
  ]
}: PrivateRouteProps) => {
  const accessToken = getStorageValue(ACCESS_TOKEN);

  if (!accessToken) {
    return <Navigate to={routes.LoginUrl} />;
  }

  if (accessToken) {
    const decodeAccessToken: JWT = jwtDecode(accessToken);

    const isRoleAccess = includes(roles, decodeAccessToken.user_claims.role[0]);

    if (!isRoleAccess) {
      return <Navigate to={routes.LoginUrl} />;
    }
  }

  return children;
};

PrivateRoute.defaultProps = {
  roles: [
    UserRole.SuperAdmin,
    UserRole.Designer,
    UserRole.Manager,
    UserRole.Admin,
    UserRole.Reviewer
  ]
};

export default PrivateRoute;
