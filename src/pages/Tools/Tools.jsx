import React from "react";
import { Collapse, Panel } from "mofo-ui";

import Text from "../../text.js";
import Tool from "../../components/Tool/Tool.jsx";

class Tools extends React.Component {
  render() {
    const thimbleHeader = <span><strong>1.</strong> Thimble</span>;
    const ghPagesHeader = <span><strong>2.</strong> Github Pages</span>;
    const googleDocsHeader = <span><strong>3.</strong> Google Docs</span>;
    const tools = Text.data.TOOLS;

    return (
      <div id="tools" className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 push-lg-1">
            <h4 dangerouslySetInnerHTML={ Text.html(Text.data.TOOLS.TITLE) }></h4>
            <p dangerouslySetInnerHTML={ Text.html(Text.data.TOOLS.CONTENT) }></p>
            <Collapse accordion={ true }>
              {/* How to use Thimble */}
              <Panel header={ thimbleHeader }>
                <Tool
                  id="thimble"
                  steps={ tools.THIMBLE.STEPS }
                  tips={ tools.THIMBLE.TIPS }
                />
              </Panel>

              {/* How to use Github Pages */}
              <Panel header={ ghPagesHeader }>
                <Tool
                  id="thimble"
                  steps={ tools.THIMBLE.STEPS }
                  tips={ tools.THIMBLE.TIPS }
                />
              </Panel>

              {/* How to use Google Docs */}
              <Panel header={ googleDocsHeader }>
                <Tool
                  id="thimble"
                  steps={ tools.THIMBLE.STEPS }
                  tips={ tools.THIMBLE.TIPS }
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
