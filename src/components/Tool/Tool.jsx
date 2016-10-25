import React from "react";

import Text from "../../text.js";

function generateStep(index, content) {
  return (
    <p key={ index }>
      <span className="step">Step { index + 1 }: </span>
      <span className="step-content" dangerouslySetInnerHTML={ Text.html(content) }></span>
    </p>
  );
}

function generateTip(index, content) {
  return (
    <li key={ index } dangerouslySetInnerHTML={ Text.html(content) }></li>
  );
}

class Tool extends React.Component {
  render() {
    const steps = this.props.steps.map((step, index) => generateStep(index, step));
    const tips = this.props.tips.map((tip, index) => generateTip(index, tip));

    return (
      <div id={ this.props.id } className="tool">
        { steps }
        { tips.length > 0 &&
          <div className="tips">
            <h5>Tips</h5>
            <ul>
              { tips }
            </ul>
          </div>
        }
      </div>
    );
  }
}

Tool.propTypes = {
  id: React.PropTypes.string.isRequired,
  steps: React.PropTypes.array.isRequired,
  tips: React.PropTypes.array
};

Tool.defaultProps = {
  tips: []
};

export default Tool;
