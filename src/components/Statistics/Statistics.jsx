import PropTypes from 'prop-types';
import {
  Statistics,
  Title,
  List,
  ListItem,
  ItemLabel,
} from './Statistics.styled';

export const UserStatistics = ({ title, stats }) => {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id}>
              <ItemLabel>{label}</ItemLabel>
              <ItemLabel>{percentage}%</ItemLabel>
            </ListItem>
          );
        })}
      </List>
    </Statistics>
  );
};
UserStatistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
