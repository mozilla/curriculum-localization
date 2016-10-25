import React from "react";

import Icon from "./Icon.jsx";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="mofooter">
          <div className="icons">
            <Icon href="https://twitter.com/mozlearn" src="../assets/footer-icon-twitter.svg" target="_blank">Twitter</Icon>
            <Icon href="mailto:gideon@mozillafoundation.org" src="../assets/footer-icon-help.svg">Email Us</Icon>
            <Icon href="https://www.mozilla.org/about/legal.html" src="../assets/footer-icon-terms.svg" target="_blank">Legal</Icon>
            <Icon href="https://www.mozilla.org/privacy/websites/" src="../assets/footer-icon-privacy.svg">Privacy</Icon>
          </div>

          <div className="footer-content">
            <a className="logo" href="https://mozilla.org" target="_blank">
              <img height="30" width="105" src="../assets/mozilla-wordmark.svg"/>
            </a>
            <p>Mozilla is a global non-profit dedicated to putting you in control of your online experience and shaping the future of the web for the public good. Visit us at <a href="//mozilla.org" target="_blank">mozilla.org</a></p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
