import React from 'react';
import { Ul, Li, Span } from '../FeedbackWidget.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Ul>
      <Li>
        Good <Span>{good}</Span>
      </Li>
      <Li>
        Neutral <Span>{neutral}</Span>
      </Li>
      <Li>
        Bad <Span>{bad}</Span>
      </Li>
      <Li>
        Total <Span>{total > 0 ? total : 0}</Span>
      </Li>
      <Li>
        Positive feedback
        <Span>{positivePercentage > 0 ? positivePercentage : 0}%</Span>
      </Li>
    </Ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
