import React from 'react';
import { H2, Wrapper } from '../FeedbackWidget.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <H2>{title}</H2>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
