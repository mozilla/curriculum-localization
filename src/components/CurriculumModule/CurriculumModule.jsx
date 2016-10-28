import React from "react";

class CurriculumModule extends React.Component {
  render() {
    return (
      <div className="module-row">
        <div className="module-row-img">
          <img { ...this.props.image } />
        </div>
        <div className="module-row-text">
          <h4>{ this.props.title }</h4>
          <div className="module-row-buttons">
            <a href={ this.props.links.THIMBLE }><div className="btn btn-primary btn-thimble">Localize on Thimble</div></a>
            <a href={ this.props.links.GOOGLE_DOCS }><div className="btn btn-primary btn-google">Localize on Google Docs</div></a>
          </div>
        </div>
      </div>
    );
  }
}

CurriculumModule.propTypes = {
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.object.isRequired,
  links: React.PropTypes.object.isRequired
};

export default CurriculumModule;
