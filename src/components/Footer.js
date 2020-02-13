import React from 'react';
import GitHubButton from 'react-github-btn';

class Footer extends React.Component {
  render() {
    return (
      <section id='footer' className='main style2 special'>
        <div className='container'>
          <header className='major'>
            <h2>Want to Contribute?</h2>
          </header>
          <p>
            Join us and help developers write better React tests in less time. <br /> Star us on
            Github!{' '}
          </p>
          <ul className='actions uniform'>
            <li>
              <a href='mailto:spearmintjs@gmail.com' id='footer-buttons' className='button special'>
                Email
              </a>
            </li>
            <li>
              <a
                href='https://www.github.com/spearmintjs/spearmint'
                id='footer-buttons'
                className='button'
              >
                Github
              </a>
            </li>
          </ul>
          <div>
            <GitHubButton id='git-buttons' href="https://github.com/open-source-labs/spearmint" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star spearmint on GitHub">
              Star
            </GitHubButton>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
