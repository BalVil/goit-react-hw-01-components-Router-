import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Wrapper } from './App.styled';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';
import User from 'pages/User';
import Statistics from 'pages/Statistics';
import Friends from 'pages/Friends';
import Transactions from 'pages/Transactions';

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
