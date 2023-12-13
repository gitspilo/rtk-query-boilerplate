import { routes as routeName } from 'constants/pageroutes.constants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Authentication from 'pages/Login';
import Organization from 'pages/OrganizationOnboarding';
import NotFound from 'pages/404/NotFound';
import Layouts from 'layouts/index';

export const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeName.LoginUrl} element={<Authentication />} />
        <Route element={<Layouts />}>
          <Route path={routeName.Home} element={<Home />} />
          <Route path={routeName.OrgOnBoard} element={<Organization />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
