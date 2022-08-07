import PropTypes from 'prop-types';
import { AdditionalWrap, StatLink } from './Additional.styled';

const Additional = ({
  linkText,
  hideLinkText,
  subTitle,
  userPath,
  pathStat,
}) => {
  return (
    <AdditionalWrap>
      {pathStat ? (
        <StatLink to={userPath}>{hideLinkText}</StatLink>
      ) : (
        <StatLink to={linkText}>{subTitle}</StatLink>
      )}
    </AdditionalWrap>
  );
};
export default Additional;

Additional.propTypes = {
  linkText: PropTypes.string.isRequired,
  hideLinkText: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  userPath: PropTypes.string.isRequired,
  pathStat: PropTypes.bool.isRequired,
};
