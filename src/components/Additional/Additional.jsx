import PropTypes from 'prop-types';
import { AdditionalWrap, StatLink } from './Additional.styled';

import { useLocation } from 'react-router-dom';

const Additional = ({ linkText, hideLinkText, subTitle, userLocation }) => {
  const location = useLocation();

  const path = location.pathname === '/userprofile/statistics';

  return (
    <AdditionalWrap>
      {path ? (
        <StatLink to={userLocation.from}>{hideLinkText}</StatLink>
      ) : (
        <StatLink to={linkText}>{subTitle}</StatLink>
      )}
    </AdditionalWrap>
  );
};
export default Additional;

Additional.propTypes = {
  linkText: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  userLocation: PropTypes.object.isRequired,
};
