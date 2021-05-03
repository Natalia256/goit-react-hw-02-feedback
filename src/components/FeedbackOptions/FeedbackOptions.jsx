import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        type="button"
        className={styles.button}
        key={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  
  export default FeedbackOptions;
  