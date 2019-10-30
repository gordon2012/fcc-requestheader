import React, { Component } from 'react';

class App extends Component {
  state = { responses: [] };

  handleSubmit = () => {
    fetch('api/whoami').then(response =>
      response.json().then(data =>
        this.setState({
          responses: [...this.state.responses, JSON.stringify(data)]
        })
      )
    );
  };

  handleClear = () => {
    this.setState({ responses: [] });
  };

  render() {
    return (
      <div className="app">
        <main>
          <h1 className="masthead">Request Header Parser Microservice</h1>

          <div className="container">
            <div className="card">
              <h2 className="masthead">User Story</h2>
              <ol>
                <li>
                  I can get the IP address, preferred languages (from header
                  Accept-Language) and system infos (from header User-Agent) for
                  my device.
                </li>
              </ol>
            </div>

            <div className="card">
              <h2 className="masthead">Request Information</h2>
              <p>
                <code>GET /api/whoami</code>
              </p>
              <div className="buttons">
                <div>
                  <button onClick={this.handleSubmit}>Submit</button>
                </div>
                <div>
                  <button onClick={this.handleClear}>Clear</button>
                </div>
              </div>
            </div>

            {this.state.responses.length > 0 ? (
              <div className="card">
                <h2 className="masthead">Output</h2>
                <div className="responses">
                  {this.state.responses.map((response, i) => (
                    <code key={i}>{response}</code>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </main>
        <footer>
          A{' '}
          <a
            href="https://freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp
          </a>{' '}
          APIs and Microservices Project
        </footer>
      </div>
    );
  }
}
export default App;
