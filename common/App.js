import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="masthead">Request Header Microservice</h1>

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
            <div className="masthead">
              <button>Submit</button>
            </div>
          </div>

          <div className="card">
            <h2 className="masthead">Output</h2>
            <div className="responses" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
