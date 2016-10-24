import React from "react";

import Strings from "../../strings.json";

function html(htmlContent) {
  return { __html: htmlContent };
}

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
                <h4 dangerouslySetInnerHTML={ html(text.CTA.TITLE) }></h4>
                <p dangerouslySetInnerHTML={
                  html(
                    text.CTA.CONTENT
                    .replace("{ CURRICULUM_MODULE_NAME }", Strings.CURRICULUM_MODULE_NAME)
                  )
                }></p>
              </div>

              {/* About the campaign */}
              <div id="campaign-info" className="col-xs-12 col-md-12 col-lg-10">
                <h4 dangerouslySetInnerHTML={ html(text.CAMPAIGN_INFO.TITLE) }></h4>
                <p dangerouslySetInnerHTML={
                  html(
                    text.CAMPAIGN_INFO.CONTENT_1
                    .replace("{ CURRICULUM_MODULE_NAME }", Strings.CURRICULUM_MODULE_NAME)
                  )
                }></p>
                <p dangerouslySetInnerHTML={ html(text.CAMPAIGN_INFO.CONTENT_2) }></p>
              </div>

            {/* How to Contribute */}
              <div id="how-to-contribute" className="col-xs-12 col-md-12 col-lg-10">
                <h4 dangerouslySetInnerHTML={ html(text.CONTRIBUTE.TITLE) }></h4>
                <p dangerouslySetInnerHTML={
                  html(
                    text.CONTRIBUTE.CONTENT
                  )
                }></p>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
