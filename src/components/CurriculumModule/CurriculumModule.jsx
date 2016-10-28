import React from "react";

class CurriculumModule extends React.Component {
  render() {
    return (
      <div className="module-row">
        <div className="module-row-img">
          <a href={ this.props.links.VIEW } target="_blank">
            <img { ...this.props.image } />
          </a>
        </div>
        <div className="module-row-text">
          <h4><a href={ this.props.links.VIEW } target="_blank">{ this.props.title }</a></h4>
          <div className="module-row-buttons">
            <a href={ this.props.links.THIMBLE } target="_blank"><div className="btn btn-primary btn-thimble">Localize on Thimble</div></a>
            <a href={ this.props.links.GOOGLE_DOCS } target="_blank"><div className="btn btn-primary btn-google">Localize on Google Docs</div></a>
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
