import { Component } from 'react';
import { Box } from './Box';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  // handleIncrement = event => {
  //   const targetName = event.currentTarget.name;
  //   this.setState(prevState => {
  //     switch (targetName) {
  //       case 'good':
  //         return { good: prevState.good + 1 };
  //       case 'neutral':
  //         return { neutral: prevState.neutral + 1 };
  //       case 'bad':
  //         return { bad: prevState.bad + 1 };
  //       default:
  //         console.log('default');
  //     }
  //   });
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = countTotalFeedback => {
    const { good, neutral } = this.state;
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round(((good + neutral) * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Box pl="100px" pt="20px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {this.countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Box>
    );
  }
}
