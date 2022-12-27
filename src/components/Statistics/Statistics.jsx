import PropTypes from 'prop-types';
import { StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatisticsItem>
        <span>Good:</span>
        <span>{good}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Bad:</span>
        <span>{bad}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Total:</span>
        <span>{total}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </StatisticsItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
