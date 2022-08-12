import React, { Component } from 'react';
import './App.css';
import { Statistics } from './Statistics/statistics';
import { Notification } from './Notification/notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    return (
      <div className="container">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.handleClickBtn}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message={'Feedback no given'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
