import { useLocation } from 'react-router-dom';
import { AdditionalWrap, StatLink } from './Additional.styled';

const Additional = () => {
  const location = useLocation();
  console.log(location);
  return (
    <AdditionalWrap>
      {location.pathname.includes('/statistics') ? (
        <StatLink to={'/userprofile'}>Hide statistics</StatLink>
      ) : (
        <StatLink to={'/userprofile/statistics'}>
          Additional information
        </StatLink>
      )}
    </AdditionalWrap>
  );
};
export default Additional;

// my previous version (with props):
// const Additional = ({
//   linkText,
//   hideLinkText,
//   subTitle,
//   userPath,
//   pathStat,
// }) => {
//   return (
//     <AdditionalWrap>
//       {pathStat ? (
//         <StatLink to={userPath}>{hideLinkText}</StatLink>
//       ) : (
//         <StatLink to={linkText}>{subTitle}</StatLink>
//       )}
//     </AdditionalWrap>
//   );
// };
// export default Additional;
// Additional.propTypes = {
//   linkText: PropTypes.string.isRequired,
//   hideLinkText: PropTypes.string.isRequired,
//   subTitle: PropTypes.string.isRequired,
//   userPath: PropTypes.string.isRequired,
//   pathStat: PropTypes.bool.isRequired,
// };
