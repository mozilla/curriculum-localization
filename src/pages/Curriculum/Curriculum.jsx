import React from "react";
import { Link } from "react-router";

import CurriculumModule from "../../components/CurriculumModule/CurriculumModule.jsx";
import Text from "../../text.js";

class Curriculum extends React.Component {
  render() {
    const CURRICULUM_MODULE_NAME = Text.data.CURRICULUM_MODULE_NAME;
    const data = Text.data.CURRICULUM;

    return (
      <div id="curriculum" className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 push-lg-1">
            <h4 dangerouslySetInnerHTML={ Text.html(data.TITLE) }></h4>
            <p dangerouslySetInnerHTML={ Text.html(data.content) }></p>
            <p><em>For help on how to localize these activities using your preferred tool, <Link to="tools/">click here</Link></em></p>
            <div className="gh-pages">
              <div className="gh-pages-image alert"><img src="../assets/octocat.png" alt="Github's Octocat" /></div>
              <div className="alert blue-alert" dangerouslySetInnerHTML={
                Text.html(Text.replace(data.GITHUB_PAGES, {
                  CURRICULUM_MODULE_NAME
                }))
              }>
              </div>
            </div>
            <div className="modules">
              {
                data.MODULES.map((module, index) => (
                  <CurriculumModule key={ index } { ...module } />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Curriculum;
