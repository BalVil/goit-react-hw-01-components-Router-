import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Wrapper } from './App.styled';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const User = lazy(() => import('pages/User'));
const Statistics = lazy(() => import('pages/Statistics'));
const Friends = lazy(() => import('pages/Friends'));
const Transactions = lazy(() => import('pages/Transactions'));

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="userprofile" element={<User />}>
            <Route path="statistics" element={<Statistics />} />
          </Route>
          <Route path="friends" element={<Friends />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Wrapper>
  );
};
export default App;
