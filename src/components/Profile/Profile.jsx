import PropTypes from 'prop-types';
import {
  UserWrapper,
  UserDescription,
  UserAvatar,
  Username,
  Usertag,
  UserLocation,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

const UserProfile = ({
  username,
  tag,
  userLocation,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserWrapper>
      <UserDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Usertag>@{tag}</Usertag>
        <UserLocation>{userLocation}</UserLocation>
      </UserDescription>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </UserWrapper>
  );
};
export default UserProfile;

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
