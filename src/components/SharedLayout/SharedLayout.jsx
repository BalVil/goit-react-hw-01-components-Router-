import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/userprofile">User Profile</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
      </Header>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;
