import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import user from 'data/user.json';
import UserProfile from 'components/Profile/Profile';
import Additional from 'components/Additional/Additional';

const User = () => {
  const linkText = 'statistics';
  const hideLinkText = 'Hide statistics';
  const subTitle = 'Additional information';

  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Additional
        linkText={linkText}
        hideLinkText={hideLinkText}
        subTitle={subTitle}
        userLocation={{ from: '/userprofile' }}
      />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default User;
