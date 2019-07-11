import React from 'react';
import jokeRequest from './request';

class JokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokeNum: '', jokeContent: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ jokeNum: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    jokeRequest(this.state.jokeNum).then(jokeResponse => {
      this.setState({ jokeContent: jokeResponse });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Joke # <input type='number' onChange={this.handleChange} />
          </label>
          <input
            type='submit'
            value='Make me laugh'
            onChange={this.handleSubmit}
          />
        </form>
        <p>{this.state.jokeContent.setup} </p>
        <p>{this.state.jokeContent.punchline} </p>
      </div>
    );
  }
}

export default JokeForm;
