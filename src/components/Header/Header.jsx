import React from "react";

import Strings from "../../strings.json";

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="jumbotron jumbotron-fluid text-xs-center m-b-0">
        <div className="container">
          <div className="row">
            <a className="mozilla-logo" href="https://www.mozilla.org">
              <img src="assets/mozilla-wordmark.svg" target="_blank" />
            </a>
            <h1 className="col-xs-12">Localizing Curriculum</h1>
            <p className="header-subtitle m-t-1 col-xs-12 col-lg-10 col-lg-push-1 col-xl-8 col-xl-push-2">Let's teach curriculum globally</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
