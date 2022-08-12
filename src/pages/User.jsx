import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import user from 'data/user.json';
import UserProfile from 'components/Profile/Profile';
import Additional from 'components/Additional/Additional';

const User = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Additional />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default User;

// my previous version (with props):
// const User = () => {

// константи ліпше зберігати в окремому файлі або зберігати у useState:
//   const linkText = 'statistics';
//   const hideLinkText = 'Hide statistics';
//   const subTitle = 'Additional information';

//   const location = useLocation();
//   console.log(location.state); //показує null

//   const pathStat = location.pathname === '/userprofile/statistics';

//   return (
//     <>
//       <UserProfile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Additional
//         linkText={linkText}
//         hideLinkText={hideLinkText}
//         subTitle={subTitle}
//         userPath={'/userprofile'}
//         pathStat={pathStat}
//       />
//       <Suspense fallback={<h3>Loading...</h3>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };
// export default User;
