import React from "react";
import { TabSwitcher, Tab } from "mofo-ui";

import Instructions from "../Instructions/Instructions.jsx";
import Curriculum from "../Curriculum/Curriculum.jsx";
import Contact from "../Contact/Contact.jsx";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <TabSwitcher initialTab={ "instructions" }>
          <Tab slug="instructions" name="Instructions">
            <Instructions />
          </Tab>
          <Tab slug="curriculum" name="Curriculum">
            <Curriculum />
          </Tab>
          <Tab slug="contact" name="Contact">
            <Contact />
          </Tab>
        </TabSwitcher>
      </div>
    );
  }
}

export default Home;
