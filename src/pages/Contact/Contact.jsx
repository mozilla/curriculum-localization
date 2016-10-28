import React from "react";

import Text from "../../text.js";

class Contact extends React.Component {
  render() {
    const data = Text.data.CONTACT;

    return (
      <div id="contact" className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 push-lg-1">
            <h4>When to Contact Us?</h4>
            <div>
              We are happy to help you throughout this process in any way that we can. Feel free to contact us through any of the channels below and we will get back to you as soon as possible. Some examples of why you would want to contact us are:
              <ul>
                <li>You want to collaborate with someone in your community to localize the activities</li>
                <li>You are unsure about how to localize certain types of content in the activity</li>
                <li>You are experiencing issues with the tools (Thimble, Google Docs or Github)</li>
                <li>You are having trouble submitting your contribution</li>
              </ul>
            </div>

            <h4>How to Contant Us?</h4>
            <div>
              You can contact us through any one of the following methods:
              <div className="contact-matrix">
                <div>
                  <span className="icon-mail-alt" aria-hidden="true"></span>
                  <a href={ `mailto:${data.EMAIL}` } target="_blank">Send us an email</a>
                </div>
                <div>
                  <span className="icon-github-circled" aria-hidden="true"></span>
                  <a href={ data.GITHUB } target="_blank">Create a new issue on Github</a>
                </div>
                <div>
                  <span className="icon-commenting" aria-hidden="true"></span>
                  <a href={ data.FORUM } target="_blank">Post a question in the Learning Forum</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
