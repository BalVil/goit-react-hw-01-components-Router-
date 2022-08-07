import stat from 'data/data.json';
import UserStatistics from 'components/UserStatistics/UserStatistics';

const Statistics = () => {
  return <UserStatistics title="Upload stats" stats={stat} />;
};

export default Statistics;
