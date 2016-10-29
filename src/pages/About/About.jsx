import React from "react";

import Text from "../../text.js";

class Instructions extends React.Component {
  generateGuidelineHtml(guideline, index) {
    return (
      <div key={ index } className="single-guideline" dangerouslySetInnerHTML={ Text.html(guideline) }>
      </div>
    );
  }

  render() {
    const text = Text.data.INSTRUCTIONS;
    const CURRICULUM_MODULE_NAME = Text.data.CURRICULUM_MODULE_NAME;
    const CURRICULUM_MODULE_DESC = Text.data.CURRICULUM_MODULE_DESC;

    return (
      <div id="about" className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 push-lg-1">
            <div className="row">

              {/* Main CTA */}
              <div id="main-cta" className="col-xs-12 col-md-12 col-lg-10 push-lg-1">
                <h4 dangerouslySetInnerHTML={ Text.html(text.CTA.TITLE) }></h4>
                <p dangerouslySetInnerHTML={
                  Text.html(Text.replace(text.CTA.CONTENT, {
                    CURRICULUM_MODULE_NAME
                  }))
                }></p>
              </div>

              {/* About the campaign */}
              <div id="campaign-info" className="col-xs-12 col-md-12 col-lg-10">
                <h4 dangerouslySetInnerHTML={ Text.html(text.CAMPAIGN_INFO.TITLE) }></h4>
                <p dangerouslySetInnerHTML={
                  Text.html(Text.replace(text.CAMPAIGN_INFO.CONTENT, {
                    CURRICULUM_MODULE_NAME,
                    CURRICULUM_MODULE_DESC
                  }))
                }></p>
              </div>

              {/* How to Contribute */}
              <div id="how-to-contribute" className="col-xs-12 col-md-12 col-lg-10">
                <h4 dangerouslySetInnerHTML={ Text.html(text.CONTRIBUTE.TITLE) }></h4>
                <p dangerouslySetInnerHTML={ Text.html(text.CONTRIBUTE.CONTENT) }></p>
                <div className="guidelines">
                  {
                    text.CONTRIBUTE.GUIDELINES.map((...args) => this.generateGuidelineHtml(...args))
                  }
                </div>
              </div>

              {/* Submission Guidelines */}
              <div id="submission-guidelines" className="col-xs-12 col-md-12 col-lg-10">
                <h4 dangerouslySetInnerHTML={ Text.html(text.SUBMIT.TITLE) }></h4>
                <p dangerouslySetInnerHTML={ Text.html(text.SUBMIT.CONTENT) }></p>
              </div>

              {/* Rewards */}
              <div id="rewards" className="col-xs-12 col-md-12 col-lg-10">
                <h4 dangerouslySetInnerHTML={ Text.html(text.REWARDS.TITLE) }></h4>
                <p dangerouslySetInnerHTML={ Text.html(text.REWARDS.CONTENT) }></p>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
