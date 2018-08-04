/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('installation.html', this.props.language)}>
              nteract
            </a>
            <a href={this.docUrl('papermill-introduction.html', this.props.language)}>
              Papermill
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://github.com/nteract/meeting-minutes">
              Weekly Team Meetings
            </a>
            <a href="https://slack.com/">Project Chat</a>
            <a
              href="https://twitter.com/nteractio"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a href="https://github.com/nteract/global-sprint">
              Global Contributor Sprint
            </a>
          </div>
          
          <div>
            <h5>More</h5>
            <a href="https://blog.nteract.io">Blog</a>
            <a href="https://github.com/nteract/nteract">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/nteract/nteract/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
