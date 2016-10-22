import React from "react";

import Header from "../components/Header/Header.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header path={ this.props.location.pathname } />
        <div id="content" className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
