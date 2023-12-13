import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes as routeName } from 'constants/pageRoutes.constants';
import Layouts, { LayoutsV1 } from 'layouts/index';
import NotFound from 'pages/404/NotFound';
import Authentication from 'pages/Authentication';
import Home from 'pages/Home';
import Memberdetail from 'pages/Memberdetail';
import DesignerDetail from 'pages/Memberdetail/DesignerDetail';
import Usermanagement from 'pages/Usermanagement';
import CreateNewDesign from 'pages/CreateNewDesign';
import EditDesign from 'pages/EditDesign';
import Assigndata from 'pages/AssignData/Assigndata';
import Collectdata from 'pages/Collectdata/Collectdata';
import DesignList from 'pages/DesignList';
import Designdata from 'pages/DesignData/Designdata';
import Documentdata from 'pages/DesignView/Documentdata';
import Reviewdata from 'pages/DesignView/Reviewdata';
import Organization from 'pages/OrganizationOnboarding';
import PrivateRoute from './PrivateRoute';
import { UserRole } from 'store/users/types';
import PublicRoute from './PublicRoute';

export const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routeName.LoginUrl}
          element={
            <PublicRoute>
              <Authentication />
            </PublicRoute>
          }
        />
        <Route element={<Layouts />}>
          <Route
            path={routeName.Home}
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.DesignList}
            element={
              <PrivateRoute>
                <DesignList />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.UserDetail}
            element={
              <PrivateRoute
                roles={[
                  UserRole.SuperAdmin,
                  UserRole.Admin,
                  UserRole.Manager,
                  UserRole.Designer,
                  UserRole.Reviewer
                ]}
              >
                <Memberdetail />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.DesignerDetail}
            element={
              <PrivateRoute roles={[]}>
                <DesignerDetail />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.OrgOnBoard}
            element={
              <PrivateRoute roles={[UserRole.SuperAdmin, UserRole.Admin, UserRole.Manager]}>
                <Organization />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.CreateDesign}
            element={
              <PrivateRoute roles={[UserRole.Manager]}>
                <CreateNewDesign />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.EditDesign}
            element={
              <PrivateRoute roles={[UserRole.Manager]}>
                <EditDesign />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.UserManagement}
            element={
              <PrivateRoute roles={[UserRole.SuperAdmin, UserRole.Admin]}>
                <Usermanagement />
              </PrivateRoute>
            }
          />
        </Route>
        <Route element={<LayoutsV1 />}>
          <Route
            path={routeName.Assign}
            element={
              <PrivateRoute roles={[UserRole.Designer, UserRole.Reviewer, UserRole.Manager]}>
                <Assigndata />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.Collect}
            element={
              <PrivateRoute roles={[UserRole.Designer, UserRole.Reviewer, UserRole.Manager]}>
                <Collectdata />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.Design}
            element={
              <PrivateRoute roles={[UserRole.Designer, UserRole.Reviewer, UserRole.Manager]}>
                <Designdata />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.Review}
            element={
              <PrivateRoute roles={[UserRole.Designer, UserRole.Reviewer]}>
                <Reviewdata />
              </PrivateRoute>
            }
          />
          <Route
            path={routeName.Document}
            element={
              <PrivateRoute roles={[UserRole.Designer, UserRole.Reviewer]}>
                <Documentdata />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
