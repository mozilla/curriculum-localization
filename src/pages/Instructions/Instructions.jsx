import React from "react";

import Strings from "../../strings.json";

class Instructions extends React.Component {
  render() {
    const text = Strings.INSTRUCTIONS;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 push-lg-1">
            <div className="row">

              {/* Main CTA */}
              <div id="main-cta" className="col-xs-12 col-md-12 col-lg-10 push-lg-1">
                <h4>{ text.CTA.TITLE }</h4>
                <p>{
                  text.CTA.CONTENT
                  .replace("{ CURRICULUM_MODULE_NAME }", Strings.CURRICULUM_MODULE_NAME)
                }</p>
              </div>

              {/* How to contribute */}
              <div id="campaign-info" className="col-xs-12 col-md-12 col-lg-10">
                <h4>{ text.CAMPAIGN_INFO.TITLE }</h4>
                <p>{ text.CAMPAIGN_INFO.CONTENT }</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
