import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const keys = Object.keys(options);
  return (
    <Box display="flex" mt="10px" mb="10px" as="div">
      {keys.map(key => (
        <Button
          type="button"
          name={key}
          onClick={() => onLeaveFeedback(key)}
          key={key}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
