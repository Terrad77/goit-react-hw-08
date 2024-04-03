// import css from './App.module.css';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
// Material UI бібл стилізації компонентів
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

//динамічний імпорт pages
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader>Refreshing user, please wait</Loader>
      ) : (
        <Suspense fallback={null}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegisterPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Suspense>
      )}
      <Toaster />
    </>
  );
}
