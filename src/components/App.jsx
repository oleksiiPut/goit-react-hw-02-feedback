import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeCounter = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    const totalFeedback = total.reduce((acc, el) => acc + el, 0);
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    return Math.round((positiveFeedback / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const optionButton = Object.keys(this.state);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionButton}
            onLeaveFeedback={this.onChangeCounter}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
