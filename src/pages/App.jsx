import React from "react";
import { Tab, TabSwitcher } from "mofo-ui";

import About from "./About/About.jsx";
import Tools from "./Tools/Tools.jsx";
import Curriculum from "./Curriculum/Curriculum.jsx";
import Contact from "./Contact/Contact.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTabChange(event) {
    this.props.history.pushState(this.props.state, `/${ event.slug }/`);
  }

  componentDidUpdate() {
    this.refs.tabSwitcher.setState({
      activeTab: this.refs.tabSwitcher.getSlugIndex(this.props.params.tab)
    });
  }

  render() {
    return (
      <div id="main-container">
        <Header path={ this.props.location.pathname } />
        <div id="content" className="container">
          <div className="container">
            <TabSwitcher initialTab={ this.props.params.tab || "about" } ref="tabSwitcher" onChange={ (...args) => this.handleTabChange(...args) }>
              <Tab slug="about" name="About" iconDefault="../assets/icon-about.svg" iconActive="../assets/icon-about-blue.svg">
                <About />
              </Tab>
              <Tab slug="tools" name="Tools">
                <Tools />
              </Tab>
              <Tab slug="curriculum" name="Curriculum">
                <Curriculum />
              </Tab>
              <Tab slug="contact" name="Contact">
                <Contact />
              </Tab>
            </TabSwitcher>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
