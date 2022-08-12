import React, { Component } from 'react';
import './App.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(stateGood => ({
      good: stateGood.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(statNeutral => ({
      neutral: statNeutral.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(stateBad => ({
      bad: stateBad.bad + 1,
    }));
  };

  render() {
    const state = this.state;
    const total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <div className="container">
        <div>
          <p>Please leave feedback</p>
          <button className="btn" type="button" onClick={this.goodIncrement}>
            Good
          </button>
          <button className="btn" type="button" onClick={this.neutralIncrement}>
            Neutral
          </button>
          <button className="btn" type="button" onClick={this.badIncrement}>
            Bad
          </button>
        </div>
        <div>
          <p>Statistic</p>
          <ul className="list-feedback">
            <li>Good {state.good}</li>
            <li>Neutral {state.neutral}</li>
            <li>Bad {state.bad}</li>
            <li>Total {state.good + state.neutral + state.bad} </li>
            <li>
              Positive feedback:{' '}
              {total !== 0 ? Math.round((state.good / total) * 100) : 0}%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
