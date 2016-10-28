import React from "react";
import { Collapse, Panel } from "mofo-ui";

import Text from "../../text.js";
import Tool from "../../components/Tool/Tool.jsx";

class Tools extends React.Component {
  generateToolHeader(number, name) {
    return <span><strong>{ number }.</strong> { name }</span>;
  }

  render() {
    const tools = Text.data.TOOLS;

    return (
      <div id="tools" className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 push-lg-1">
            <h4 dangerouslySetInnerHTML={ Text.html(Text.data.TOOLS.TITLE) }></h4>
            <p dangerouslySetInnerHTML={ Text.html(Text.data.TOOLS.CONTENT) }></p>
            <Collapse accordion={ true }>
              {/* How to use Thimble */}
              <Panel header={ this.generateToolHeader(1, "Thimble") }>
                <Tool
                  id="thimble"
                  steps={ tools.THIMBLE.STEPS }
                  tips={ tools.THIMBLE.TIPS }
                />
              </Panel>

              {/* How to use Github Pages */}
              <Panel header={ this.generateToolHeader(2, "Github Pages") }>
                <Tool
                  id="thimble"
                  steps={ tools.GITHUB_PAGES.STEPS }
                  tips={ tools.GITHUB_PAGES.TIPS }
                />
              </Panel>

              {/* How to use Google Docs */}
              <Panel header={ this.generateToolHeader(3, "Google Docs") }>
                <Tool
                  id="thimble"
                  steps={ tools.GOOGLE_DOCS.STEPS }
                  tips={ tools.GOOGLE_DOCS.TIPS }
                />
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
