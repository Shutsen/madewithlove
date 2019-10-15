import React, { Component } from 'react';

class UnsupportedView extends Component {
  render() {
    return (
      <div className="unsupported-view text-center">
        <h2>We're sorry, but your browser is not supported</h2>
        <div>
          <img width="300" src="/img/unsupported.svg" alt="Warning for unsupported browser"/>
        </div>
        <p className="m-3">
          <span>To enjoy this web page, we recommend using Chrome or Firefox</span><br />
          <a className="link-effect" href="https://www.google.com/chrome/">Download Google Chrome</a>
          <span> or </span>
          <a className="link-effect" href="https://www.mozilla.org/en/firefox/new/">download Firefox</a>
        </p>
      </div>
    );
  }
}

export default UnsupportedView;